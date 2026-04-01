import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  MapPin, Search, Loader2, Phone, Star, ChevronDown, ChevronUp,
  ExternalLink, LocateFixed, BadgeCheck, SlidersHorizontal,
} from "lucide-react";
import PageMeta from "@/components/PageMeta";

interface Doctor {
  npi: string;
  name: string;
  credential: string;
  specialty: string;
  practiceName: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    zip: string;
  };
  phone: string;
  acceptingNew: boolean;
  gender: string;
  aiReason: string;
}

interface SearchResult {
  specialty: string;
  reasoning: string;
  doctors: Doctor[];
  total: number;
}

const QUICK_PILLS = [
  { key: "diagnosis", label: "I just got a diagnosis" },
  { key: "specialist", label: "I need a specialist" },
  { key: "mental", label: "Mental health support" },
  { key: "chronic", label: "Chronic condition" },
  { key: "checkup", label: "General checkup" },
];

const INSURANCE_OPTIONS = ["Any", "Medicare", "Medicaid", "Private"];
const GENDER_OPTIONS = ["Any", "Male", "Female"];
const LANGUAGE_OPTIONS_DOCTOR = ["Any", "English", "Spanish", "Arabic", "Hindi", "Urdu"];

const SORT_OPTIONS = [
  { value: "default", label: "Default" },
  { value: "name", label: "A–Z" },
];

const FindADoctorPage = () => {
  const { t, lang } = useLanguage();
  const resultsRef = useRef<HTMLDivElement>(null);

  // Form state
  const [symptoms, setSymptoms] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [locating, setLocating] = useState(false);
  const [insurance, setInsurance] = useState("Any");
  const [genderPref, setGenderPref] = useState("Any");
  const [langPref, setLangPref] = useState("Any");
  const [acceptingNew, setAcceptingNew] = useState(true);
  const [prefsOpen, setPrefsOpen] = useState(false);

  // Results state
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SearchResult | null>(null);
  const [error, setError] = useState("");
  const [sortBy, setSortBy] = useState("default");

  const handleUseLocation = () => {
    if (!navigator.geolocation) return;
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&format=json`
          );
          const data = await res.json();
          const zip = data.address?.postcode;
          if (zip) setZipCode(zip);
        } catch { /* ignore */ }
        setLocating(false);
      },
      () => setLocating(false),
      { timeout: 10000 }
    );
  };

  const handleSearch = async () => {
    if (!symptoms.trim()) return;
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const { data, error: fnError } = await supabase.functions.invoke("find-doctor", {
        body: {
          symptoms: symptoms.trim(),
          zipCode: zipCode.trim() || undefined,
          insurance: insurance !== "Any" ? insurance : undefined,
          gender: genderPref !== "Any" ? genderPref : undefined,
          language: langPref !== "Any" ? langPref : undefined,
          acceptingNew,
        },
      });

      if (fnError) throw fnError;
      if (data?.error) {
        setError(data.error);
      } else {
        setResult(data as SearchResult);

        // Store anonymous analytics
        supabase.from("doctor_search_queries").insert({
          symptoms_summary: symptoms.trim().slice(0, 100),
          specialty_detected: data?.specialty || null,
          zip_code: zipCode.trim().slice(0, 5) || null,
          insurance_type: insurance !== "Any" ? insurance : null,
          results_count: data?.doctors?.length || 0,
        }).then(() => {}); // fire and forget
      }
    } catch (err: any) {
      setError(err?.message || "Something went wrong. Please try again.");
    }

    setLoading(false);
    setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: "smooth" }), 200);
  };

  const handlePillClick = (label: string) => {
    setSymptoms(label);
  };

  const sortedDoctors = result?.doctors
    ? [...result.doctors].sort((a, b) => {
        if (sortBy === "name") return a.name.localeCompare(b.name);
        return 0;
      })
    : [];

  const formatPhone = (phone: string) => {
    const digits = phone.replace(/\D/g, "");
    if (digits.length === 10) return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
    return phone;
  };

  return (
    <>
      <PageMeta
        title={t("findDoctor.meta.title")}
        description={t("findDoctor.meta.desc")}
        canonical="/find-a-doctor"
      />
      <main className="min-h-screen pt-28 pb-24 px-6">
        <div className="mx-auto max-w-[700px]">

          {/* Hero */}
          <div className="mb-12">
            <div className="w-[60px] h-[3px] bg-primary mb-6" />
            <h1
              className="text-[36px] md:text-[48px] font-medium leading-[1.1] mb-4"
              style={{ fontFamily: "'Playfair Display', serif", letterSpacing: "-0.5px" }}
            >
              {t("findDoctor.title")}
            </h1>
            <p
              className="text-[16px] text-muted-foreground max-w-[520px]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {t("findDoctor.sub")}
            </p>
          </div>

          {/* Step 1 */}
          <div className="mb-8">
            <Label
              className="text-[11px] uppercase tracking-[1.2px] text-muted-foreground mb-3 block"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {t("findDoctor.step1")}
            </Label>
            <Textarea
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              placeholder={t("findDoctor.symptomsPlaceholder")}
              className="min-h-[100px] text-[15px]"
            />
            <div className="flex flex-wrap gap-2 mt-3">
              {QUICK_PILLS.map((pill) => (
                <button
                  key={pill.key}
                  onClick={() => handlePillClick(pill.label)}
                  className="px-3 py-1.5 text-[12px] font-medium rounded-full border transition-colors hover:bg-primary hover:text-primary-foreground"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    borderColor: "hsl(var(--border))",
                  }}
                >
                  {pill.label}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2 */}
          <div className="mb-8">
            <Label
              className="text-[11px] uppercase tracking-[1.2px] text-muted-foreground mb-3 block"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {t("findDoctor.step2")}
            </Label>
            <div className="flex gap-3">
              <div className="flex-1">
                <Input
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  placeholder={t("findDoctor.zipPlaceholder")}
                  maxLength={5}
                  className="text-[15px]"
                />
              </div>
              <Button
                variant="outline"
                onClick={handleUseLocation}
                disabled={locating}
                className="gap-2 text-[13px] shrink-0"
              >
                {locating ? (
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                ) : (
                  <LocateFixed className="h-3.5 w-3.5" />
                )}
                {t("findDoctor.useLocation")}
              </Button>
            </div>
          </div>

          {/* Step 3 — Preferences */}
          <Collapsible open={prefsOpen} onOpenChange={setPrefsOpen} className="mb-8">
            <CollapsibleTrigger asChild>
              <button
                className="flex items-center gap-2 text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <SlidersHorizontal className="h-3.5 w-3.5" />
                {t("findDoctor.preferences")}
                {prefsOpen ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
              </button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-4 space-y-4 pl-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label className="text-[12px] text-muted-foreground">{t("findDoctor.insurance")}</Label>
                  <Select value={insurance} onValueChange={setInsurance}>
                    <SelectTrigger className="mt-1"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {INSURANCE_OPTIONS.map((o) => (
                        <SelectItem key={o} value={o}>{o}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-[12px] text-muted-foreground">{t("findDoctor.gender")}</Label>
                  <Select value={genderPref} onValueChange={setGenderPref}>
                    <SelectTrigger className="mt-1"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {GENDER_OPTIONS.map((o) => (
                        <SelectItem key={o} value={o}>{o}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-[12px] text-muted-foreground">{t("findDoctor.language")}</Label>
                  <Select value={langPref} onValueChange={setLangPref}>
                    <SelectTrigger className="mt-1"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {LANGUAGE_OPTIONS_DOCTOR.map((o) => (
                        <SelectItem key={o} value={o}>{o}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center gap-3 pt-5">
                  <Switch checked={acceptingNew} onCheckedChange={setAcceptingNew} />
                  <Label className="text-[13px]">{t("findDoctor.acceptingNew")}</Label>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* Search Button */}
          <Button
            onClick={handleSearch}
            disabled={loading || !symptoms.trim()}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-[15px] h-12 gap-2"
          >
            {loading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Search className="h-4 w-4" />
            )}
            {t("findDoctor.searchButton")}
          </Button>

          {error && (
            <p className="mt-4 text-destructive text-[14px] text-center">{error}</p>
          )}

          {/* Results */}
          <div ref={resultsRef}>
            {result && (
              <div className="mt-12">
                {/* Specialty detected */}
                <div className="mb-6 p-4 rounded-md" style={{ background: "hsl(var(--section-bg))" }}>
                  <p className="text-[13px] text-muted-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    <span className="font-medium text-foreground">{t("findDoctor.specialtyDetected")}:</span>{" "}
                    <span className="text-primary font-semibold">{result.specialty}</span>
                  </p>
                  <p className="text-[13px] text-muted-foreground mt-1">{result.reasoning}</p>
                </div>

                {/* Sort controls */}
                {sortedDoctors.length > 0 && (
                  <div className="flex items-center justify-between mb-4">
                    <p
                      className="text-[13px] text-muted-foreground"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {sortedDoctors.length} {t("findDoctor.resultsFound")}
                    </p>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="w-[140px] h-8 text-[12px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {SORT_OPTIONS.map((o) => (
                          <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {/* Doctor cards */}
                {sortedDoctors.length === 0 ? (
                  <p className="text-center text-muted-foreground py-10 text-[15px]">
                    {t("findDoctor.noResults")}
                  </p>
                ) : (
                  <div className="space-y-4">
                    {sortedDoctors.map((doc) => (
                      <div
                        key={doc.npi}
                        className="p-5 rounded-md transition-colors hover:shadow-sm"
                        style={{
                          border: "0.5px solid hsl(var(--border))",
                          background: "hsl(var(--card))",
                        }}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            <h3
                              className="text-[18px] font-medium text-foreground"
                              style={{ fontFamily: "'Playfair Display', serif" }}
                            >
                              {doc.name}
                              {doc.credential && (
                                <span className="text-muted-foreground text-[13px] font-normal ml-1">
                                  , {doc.credential}
                                </span>
                              )}
                            </h3>
                            <p className="text-[13px] text-primary font-medium mt-0.5">
                              {doc.specialty}
                            </p>
                            {doc.practiceName && (
                              <p className="text-[13px] text-muted-foreground mt-0.5">
                                {doc.practiceName}
                              </p>
                            )}
                          </div>
                          {doc.acceptingNew && (
                            <span className="flex items-center gap-1 px-2 py-1 rounded text-[11px] font-medium bg-primary/10 text-primary whitespace-nowrap">
                              <BadgeCheck className="h-3 w-3" />
                              Accepting patients
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-4 mt-3 text-[13px] text-muted-foreground">
                          {doc.address.city && (
                            <span className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {doc.address.city}, {doc.address.state} {doc.address.zip}
                            </span>
                          )}
                          {doc.phone && (
                            <a
                              href={`tel:${doc.phone}`}
                              className="flex items-center gap-1 hover:text-foreground transition-colors"
                            >
                              <Phone className="h-3 w-3" />
                              {formatPhone(doc.phone)}
                            </a>
                          )}
                        </div>

                        {/* AI reason */}
                        <p className="mt-3 text-[12px] text-muted-foreground italic">
                          {t("findDoctor.whyThisDoctor")}: {doc.aiReason}
                        </p>

                        {/* View profile */}
                        <div className="mt-3 pt-3" style={{ borderTop: "0.5px solid hsl(var(--border))" }}>
                          <a
                            href={`https://www.google.com/maps/search/${encodeURIComponent(`${doc.name} ${doc.specialty} ${doc.address.city} ${doc.address.state}`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-primary hover:underline"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                          >
                            {t("findDoctor.viewProfile")}
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Disclaimer */}
                <p className="mt-8 text-[12px] text-muted-foreground text-center leading-relaxed">
                  {t("findDoctor.disclaimer")}
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default FindADoctorPage;
