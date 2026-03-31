import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLanguage, type Language } from "@/contexts/LanguageContext";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { lang, setLang, t } = useLanguage();

  const navLinks = [
    { to: "/topics", label: t("nav.topics") },
    { to: "/ask", label: t("nav.ask") },
    { to: "/about", label: t("nav.about") },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled && !mobileOpen ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80" : "bg-transparent"
        }`}
        style={{ borderBottom: scrolled && !mobileOpen ? "0.5px solid hsl(var(--border))" : "none" }}
      >
        <div className="mx-auto flex h-16 max-w-[1100px] items-center justify-between px-6">
          <Link
            to="/"
            className="relative z-50 text-[15px] font-medium tracking-tight text-foreground"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Clarify Health
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-link-underline text-[13px] font-medium uppercase tracking-[0.15em] transition-colors hover:text-foreground ${
                  location.pathname.startsWith(link.to)
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {link.label}
              </Link>
            ))}

            {/* Language toggle */}
            <div className="flex gap-0.5 ml-2" style={{ border: "0.5px solid hsl(var(--border))", borderRadius: "4px", padding: "2px" }}>
              {(["en", "es"] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className="px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider transition-all"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    borderRadius: "3px",
                    background: lang === l ? "hsl(var(--primary))" : "transparent",
                    color: lang === l ? "hsl(var(--primary-foreground))" : "hsl(var(--muted-foreground))",
                  }}
                >
                  {l}
                </button>
              ))}
            </div>
          </nav>

          {/* Mobile toggle */}
          <button
            className="relative z-50 md:hidden p-2 -mr-2 press-scale transition-transform"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      {mobileOpen && (
        <div className="nav-overlay fixed inset-0 z-40 flex flex-col items-start justify-center bg-background px-10 md:hidden">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link, i) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`nav-overlay-link text-[36px] font-medium leading-tight transition-colors hover:text-primary ${
                  location.pathname.startsWith(link.to)
                    ? "text-primary"
                    : "text-foreground"
                }`}
                style={{
                  fontFamily: "'Playfair Display', serif",
                  animationDelay: `${i * 80}ms`,
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile language toggle */}
          <div
            className="nav-overlay-link mt-10 flex gap-1"
            style={{ border: "0.5px solid hsl(var(--border))", borderRadius: "6px", padding: "3px", animationDelay: `${navLinks.length * 80}ms` }}
          >
            {(["en", "es"] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className="px-4 py-2 text-[14px] font-semibold uppercase tracking-wider transition-all"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  borderRadius: "4px",
                  background: lang === l ? "hsl(var(--primary))" : "transparent",
                  color: lang === l ? "hsl(var(--primary-foreground))" : "hsl(var(--muted-foreground))",
                }}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
