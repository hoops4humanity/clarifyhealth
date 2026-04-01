import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are a medical routing assistant for Clarify Health. Given a patient's description of symptoms or conditions, determine the best medical specialty and generate a brief "why this doctor" explanation.

RESPOND ONLY WITH VALID JSON, no markdown, no explanation outside the JSON.

Respond with this exact JSON structure:
{
  "specialty_taxonomy": "<NPI taxonomy code>",
  "specialty_name": "<human-readable specialty name>",
  "reasoning": "<1 sentence explaining why this specialty is recommended>"
}

Common taxonomy codes:
- 207R00000X = Internal Medicine
- 207Q00000X = Family Medicine  
- 2084P0800X = Psychiatry
- 207RC0000X = Cardiovascular Disease (Cardiology)
- 207RG0100X = Gastroenterology
- 207RN0300X = Neurology
- 207RE0101X = Endocrinology
- 207RR0500X = Rheumatology
- 207RP1001X = Pulmonary Disease
- 2085R0001X = Surgery
- 207X00000X = Orthopedic Surgery
- 207Y00000X = Otolaryngology (ENT)
- 207W00000X = Ophthalmology
- 207V00000X = Obstetrics & Gynecology
- 2084A0401X = Addiction Medicine
- 207RH0003X = Hematology & Oncology
- 207UN0903X = Nephrology
- 207RS0010X = Sports Medicine
- 2086S0120X = Pediatrics
- 207N00000X = Dermatology

If the user describes general symptoms or a checkup, use Family Medicine (207Q00000X).
If mental health related, use Psychiatry (2084P0800X).`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { symptoms, zipCode, state, city, insurance, gender, language, acceptingNew } = await req.json();

    if (!symptoms || typeof symptoms !== "string" || symptoms.trim().length < 3) {
      return new Response(JSON.stringify({ error: "Please describe your symptoms" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    // Step 1: Use AI to determine specialty
    const aiResponse = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: symptoms.trim().slice(0, 500) },
        ],
      }),
    });

    if (!aiResponse.ok) {
      if (aiResponse.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit reached. Please try again shortly." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (aiResponse.status === 402) {
        return new Response(JSON.stringify({ error: "Service temporarily unavailable." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      throw new Error(`AI gateway error: ${aiResponse.status}`);
    }

    const aiData = await aiResponse.json();
    const rawContent = aiData.choices?.[0]?.message?.content ?? "";
    
    // Parse the AI JSON response
    let specialty: { specialty_taxonomy: string; specialty_name: string; reasoning: string };
    try {
      const jsonMatch = rawContent.match(/\{[\s\S]*\}/);
      specialty = JSON.parse(jsonMatch ? jsonMatch[0] : rawContent);
    } catch {
      specialty = {
        specialty_taxonomy: "207Q00000X",
        specialty_name: "Family Medicine",
        reasoning: "A family medicine doctor can evaluate your symptoms and refer you to a specialist if needed.",
      };
    }

    // Step 2: Query NPI Registry API
    const npiParams = new URLSearchParams({
      version: "2.1",
      limit: "15",
      taxonomy_description: specialty.specialty_name,
      enumeration_type: "NPI-1", // Individual providers only
    });

    if (zipCode) npiParams.set("postal_code", zipCode.trim().slice(0, 5));
    if (state) npiParams.set("state", state);
    if (city) npiParams.set("city", city);
    if (gender === "Male") npiParams.set("gender", "M");
    if (gender === "Female") npiParams.set("gender", "F");

    const npiUrl = `https://npiregistry.cms.hhs.gov/api/?${npiParams.toString()}`;
    const npiResponse = await fetch(npiUrl);
    const npiText = await npiResponse.text();
    
    let npiData;
    try {
      npiData = JSON.parse(npiText);
    } catch {
      console.error("NPI API returned non-JSON:", npiText.slice(0, 200));
      npiData = { results: [], result_count: 0 };
    }

    const doctors = (npiData.results || []).map((r: any) => {
      const basic = r.basic || {};
      const address = r.addresses?.find((a: any) => a.address_purpose === "LOCATION") || r.addresses?.[0] || {};
      const taxonomy = r.taxonomies?.find((t: any) => t.primary) || r.taxonomies?.[0] || {};

      return {
        npi: r.number,
        name: `Dr. ${basic.first_name || ""} ${basic.last_name || ""}`.trim(),
        credential: basic.credential || "",
        specialty: taxonomy.desc || specialty.specialty_name,
        practiceName: basic.organization_name || address.organization_name || "",
        address: {
          line1: address.address_1 || "",
          line2: address.address_2 || "",
          city: address.city || "",
          state: address.state || "",
          zip: (address.postal_code || "").slice(0, 5),
        },
        phone: address.telephone_number || "",
        acceptingNew: true, // NPI doesn't have this data, default true
        gender: basic.gender === "M" ? "Male" : basic.gender === "F" ? "Female" : "",
        aiReason: specialty.reasoning,
      };
    });

    return new Response(
      JSON.stringify({
        specialty: specialty.specialty_name,
        reasoning: specialty.reasoning,
        doctors,
        total: npiData.result_count || 0,
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (e) {
    console.error("find-doctor error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
