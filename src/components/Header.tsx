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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80" : "bg-transparent"
      }`}
      style={{ borderBottom: scrolled ? "0.5px solid hsl(var(--border))" : "none" }}
    >
      <div className="mx-auto flex h-16 max-w-[1100px] items-center justify-between px-6">
        <Link
          to="/"
          className="text-[15px] font-medium tracking-tight text-foreground"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
          onClick={() => setMobileOpen(false)}
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
          className="md:hidden p-2 -mr-2 press-scale transition-transform"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="bg-background px-6 pb-6 pt-2 md:hidden animate-fade-in" style={{ borderBottom: "0.5px solid hsl(var(--border))" }}>
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`py-3 text-[13px] font-medium uppercase tracking-[0.15em] transition-colors ${
                  location.pathname.startsWith(link.to)
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
