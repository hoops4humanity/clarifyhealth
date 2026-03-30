import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="py-8 px-6" style={{ borderTop: "0.5px solid hsl(var(--border))" }}>
    <div className="mx-auto max-w-[1100px] flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-muted-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <span>© {new Date().getFullYear()} Clarify Health</span>
      <div className="flex items-center gap-6">
        <Link to="/topics" className="hover:text-foreground transition-colors">Topics</Link>
        <Link to="/ask" className="hover:text-foreground transition-colors">Ask</Link>
        <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
