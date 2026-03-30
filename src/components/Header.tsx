import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/topics", label: "Topics" },
  { to: "/ask", label: "Ask" },
  { to: "/about", label: "About" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Prevent scroll when overlay open
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
        </div>
      )}
    </>
  );
};

export default Header;
