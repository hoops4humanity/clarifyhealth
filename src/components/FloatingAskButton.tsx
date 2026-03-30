import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";

const FloatingAskButton = () => (
  <Link
    to="/ask"
    className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all hover:scale-105 press-scale md:hidden"
    aria-label="Ask a question"
  >
    <MessageCircle className="h-6 w-6" />
  </Link>
);

export default FloatingAskButton;
