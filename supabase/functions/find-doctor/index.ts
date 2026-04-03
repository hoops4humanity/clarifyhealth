import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const TRIAGE_SYSTEM_PROMPT = `You are a medical triage assistant at Clarify Health. A patient has described their symptoms or situation. Your job is to identify what type of doctor or specialist they most likely need. Return a JSON object only, no explanation:
{
  "specialty": "<e.g. Cardiologist, Primary Care, Endocrinologist>",
  "specialty_code": "<Google Places API type, e.g. doctor, hospital>",
  "reason": "<one plain-English sentence explaining why this specialty>",
  "urgency": "<routine | soon | urgent>",
  "urgency_note": "<one sentence on timing>"
}`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { symptoms, zipCode } = await req.json();

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

    // Step 1: AI triage — determine specialty + urgency
    const aiResponse = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: TRIAGE_SYSTEM_PROMPT },
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
        return new Response(JSON.stringify({ error: "AI service temporarily unavailable. Please try again later." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errText = await aiResponse.text();
      console.error("AI gateway error:", aiResponse.status, errText);
      throw new Error(`AI gateway error: ${aiResponse.status}`);
    }

    const aiData = await aiResponse.json();
    const rawContent = aiData.choices?.[0]?.message?.content ?? "";

    let triage: {
      specialty: string;
      specialty_code: string;
      reason: string;
      urgency: string;
      urgency_note: string;
    };
    try {
      const jsonMatch = rawContent.match(/\{[\s\S]*\}/);
      triage = JSON.parse(jsonMatch ? jsonMatch[0] : rawContent);
    } catch {
      triage = {
        specialty: "Primary Care",
        specialty_code: "doctor",
        reason: "A primary care doctor can evaluate your symptoms and refer you to a specialist if needed.",
        urgency: "routine",
        urgency_note: "Schedule an appointment at your convenience.",
      };
    }

    // Step 2: Google Places API — fetch real nearby doctors
    const GOOGLE_PLACES_API_KEY = Deno.env.get("GOOGLE_PLACES_API_KEY");
    if (!GOOGLE_PLACES_API_KEY) {
      // Return AI triage results with empty doctors and fallback flag
      return new Response(
        JSON.stringify({
          specialty: triage.specialty,
          reason: triage.reason,
          urgency: triage.urgency,
          urgency_note: triage.urgency_note,
          doctors: [],
          fallback: true,
        }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const locationQuery = zipCode ? ` near ${zipCode.trim().slice(0, 5)}` : "";
    const searchQuery = `${triage.specialty} doctor${locationQuery}`;

    const placesResponse = await fetch(
      "https://places.googleapis.com/v1/places:searchText",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": GOOGLE_PLACES_API_KEY,
          "X-Goog-FieldMask":
            "places.id,places.displayName,places.formattedAddress,places.rating,places.userRatingCount,places.nationalPhoneNumber,places.currentOpeningHours,places.googleMapsUri",
        },
        body: JSON.stringify({
          textQuery: searchQuery,
          maxResultCount: 10,
        }),
      }
    );

    if (!placesResponse.ok) {
      console.error("Google Places API error:", placesResponse.status);
      return new Response(
        JSON.stringify({
          specialty: triage.specialty,
          reason: triage.reason,
          urgency: triage.urgency,
          urgency_note: triage.urgency_note,
          doctors: [],
          fallback: true,
        }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const placesData = await placesResponse.json();
    const places = placesData.places || [];

    const doctors = places.map((place: any) => {
      const name = place.displayName?.text || "Unknown";
      return {
        placeId: place.id || "",
        name,
        address: place.formattedAddress || "",
        rating: place.rating ?? null,
        reviewCount: place.userRatingCount ?? 0,
        phone: place.nationalPhoneNumber || "",
        googleMapsUrl:
          place.googleMapsUri ||
          `https://www.google.com/maps/place/?q=place_id:${place.id}`,
        healthgradesUrl: `https://www.healthgrades.com/search?what=${encodeURIComponent(name)}`,
        openNow: place.currentOpeningHours?.openNow ?? null,
      };
    });

    return new Response(
      JSON.stringify({
        specialty: triage.specialty,
        reason: triage.reason,
        urgency: triage.urgency,
        urgency_note: triage.urgency_note,
        doctors,
        fallback: false,
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
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
