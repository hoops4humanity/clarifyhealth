import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Search } from "lucide-react";
import { getTopics } from "@/data/topics";
import { useLanguage } from "@/contexts/LanguageContext";
import PageMeta from "@/components/PageMeta";

const Index = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { lang, t } = useLanguage();
  const topics = getTopics(lang);

  const stats = [
    { value: "10", label: t("home.stat.topics") },
    { value: "40", label: t("home.stat.sections") },
    { value: "100%", label: t("home.stat.jargon") },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/ask?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <main>
      <PageMeta
        title={t("home.meta.title")}
        description={t("home.meta.desc")}
        canonical="/"
        jsonLd={{
          "@type": "WebSite",
          name: "Clarify Health",
          url: "https://clarifyhealth.lovable.app",
          description: t("home.meta.desc"),
          potentialAction: {
            "@type": "SearchAction",
            target: "https://clarifyhealth.lovable.app/ask?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }}
      />
      {/* Hero — full viewport */}
      <section className="flex min-h-screen flex-col justify-center px-6">
        <div className="mx-auto w-full max-w-[1100px] stagger-reveal">
          <h1
            className="text-[44px] leading-[1.1] font-semibold text-foreground md:text-[72px]"
            style={{ letterSpacing: "-1px" }}
          >
            {t("home.hero.line1")}
            <br />
            {t("home.hero.line2")}
            <br />
            {t("home.hero.line3")}
          </h1>
          <p
            className="mt-6 max-w-[680px] text-[16px] leading-relaxed text-muted-foreground md:text-[18px]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {t("home.hero.sub")}
          </p>

          {/* Search bar */}
          <form onSubmit={handleSearch} className="mt-10 max-w-[680px]">
            <div className="flex gap-0" style={{ border: "0.5px solid hsl(var(--border))", borderRadius: "4px" }}>
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={t("home.search.placeholder")}
                  className="h-12 w-full bg-transparent pl-11 pr-4 text-[15px] placeholder:text-muted-foreground focus:outline-none focus-glow transition-shadow"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                />
              </div>
              <button
                type="submit"
                className="h-12 px-6 text-[14px] font-medium text-primary-foreground bg-primary hover:bg-primary/90 transition-all press-scale"
                style={{ fontFamily: "'DM Sans', sans-serif", borderRadius: "0 3px 3px 0" }}
              >
                {t("home.search.button")}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Stats strip */}
      <section className="grain-bg px-6 py-[64px] md:py-[120px]" style={{ backgroundColor: "hsl(var(--section-bg))" }}>
        <div className="mx-auto max-w-[1100px]">
          <div className="grid grid-cols-1 md:grid-cols-3 stagger-reveal">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`flex flex-col items-center py-8 md:py-0 ${
                  i < stats.length - 1 ? "md:border-r" : ""
                }`}
                style={{
                  borderColor: "hsl(var(--border))",
                  borderWidth: i < stats.length - 1 ? "0 0.5px 0 0" : "0",
                }}
              >
                <span
                  className="text-[48px] font-semibold text-primary md:text-[56px]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {stat.value}
                </span>
                <span
                  className="mt-2 text-[11px] uppercase text-muted-foreground"
                  style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "1.2px", fontSize: "11px" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics grid */}
      <section className="px-6 py-[64px] md:py-[120px]">
        <div className="mx-auto max-w-[1100px]">
          <h2
            className="mb-12 text-[32px] font-semibold text-foreground md:text-[40px] animate-fade-in"
            style={{ letterSpacing: "-0.5px" }}
          >
            {t("home.explore")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 stagger-reveal" style={{ gap: "16px" }}>
            {topics.map((topic) => (
              <Link
                key={topic.id}
                to={`/topics/${topic.id}`}
                className="group flex flex-col justify-between p-8 transition-all hover:border-primary/60"
                style={{
                  border: "0.5px solid hsl(var(--border))",
                  borderRadius: "12px",
                }}
              >
                <div>
                  <h3
                    className="text-[22px] font-medium text-foreground"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {topic.title}
                  </h3>
                  <p
                    className="mt-2 text-[14px] leading-relaxed text-muted-foreground"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {topic.description}
                  </p>
                </div>
                <div
                  className="mt-6 flex items-center text-muted-foreground group-hover:text-primary transition-colors"
                  style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "1.2px", fontSize: "11px", textTransform: "uppercase" }}
                >
                  <span className="mr-2">{t("home.readMore")}</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
