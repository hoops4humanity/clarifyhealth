import { useLanguage } from "@/contexts/LanguageContext";
import PageMeta from "@/components/PageMeta";

const AboutPage = () => {
  const { t } = useLanguage();

  return (
    <main className="pt-32 pb-[64px] md:pb-[120px] px-6">
      <PageMeta
        title={t("about.meta.title")}
        description={t("about.meta.desc")}
        canonical="/about"
        jsonLd={{
          "@type": "AboutPage",
          name: "About Clarify Health",
          description: t("about.meta.desc"),
        }}
      />
      <div className="mx-auto max-w-[680px]">
        <div className="stagger-reveal">
          <h1 className="text-[36px] font-semibold text-foreground md:text-[48px]">{t("about.title")}</h1>

          <div
            className="mt-10 space-y-6 text-[16px] leading-[1.8] text-foreground/80"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            <p>{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
            <p>{t("about.p3")}</p>
          </div>
        </div>

        <div
          className="mt-16 p-8 animate-fade-in"
          style={{
            border: "0.5px solid hsl(var(--border))",
            borderRadius: "12px",
            backgroundColor: "hsl(var(--section-bg))",
            animationDelay: "300ms",
          }}
        >
          <p
            className="text-[14px] leading-relaxed text-muted-foreground"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            <strong className="text-foreground">{t("about.title") === "Acerca de" ? "Importante:" : "Important:"}</strong> {t("about.disclaimer")}
          </p>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
