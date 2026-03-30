import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { topics } from "@/data/topics";

const Index = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/ask?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <main>
      {/* Hero */}
      <section className="mx-auto max-w-3xl px-6 pb-16 pt-20 text-center md:pt-28">
        <h1 className="text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
          Your health, in{" "}
          <span className="text-primary">plain English.</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
          No jargon. No confusion. Just clear, trustworthy answers about your health — written so anyone can understand.
        </p>

        {/* Search */}
        <form onSubmit={handleSearch} className="mx-auto mt-10 max-w-lg">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search a condition or ask a question..."
              className="h-14 w-full rounded-2xl border bg-card pl-12 pr-4 text-base shadow-sm transition-shadow placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:shadow-md"
            />
          </div>
        </form>
      </section>

      {/* Topic Cards */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <h2 className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Common Topics
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <Link
              key={topic.id}
              to={`/topics/${topic.id}`}
              className="group rounded-2xl border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md"
            >
              <span className="text-3xl">{topic.emoji}</span>
              <h3 className="mt-3 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {topic.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {topic.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Index;
