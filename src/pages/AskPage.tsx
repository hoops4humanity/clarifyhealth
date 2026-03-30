import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Send, Loader2, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { topics } from "@/data/topics";

// Simple keyword-based matching for demo (no API needed)
function getPlainAnswer(question: string): string {
  const q = question.toLowerCase();

  for (const topic of topics) {
    const keywords = topic.title.toLowerCase().split(" ");
    if (keywords.some((kw) => q.includes(kw)) || q.includes(topic.id.replace("-", " "))) {
      const relevant = topic.sections
        .map((s) => `**${s.title}**\n${s.content}`)
        .join("\n\n");
      return `Here's what we know about **${topic.title}**:\n\n${relevant}\n\n*Remember: Always talk to your doctor for advice specific to your situation.*`;
    }
  }

  return `That's a great question. While we don't have a specific article on that topic yet, here are some tips:\n\n• **Write it down** — bring your question to your next doctor's appointment.\n• **Ask for plain language** — tell your doctor, "Can you explain that in simpler terms?"\n• **Bring someone with you** — a second set of ears can help.\n\nWe're always adding new topics. Check back soon, or browse our existing topics for related information.\n\n*This is not medical advice. Please consult a healthcare professional.*`;
}

const suggestedQuestions = [
  "What is diabetes?",
  "How do I lower my blood pressure?",
  "What does high cholesterol mean?",
  "What are common side effects of medications?",
];

const AskPage = () => {
  const [searchParams] = useSearchParams();
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const q = searchParams.get("q");
    if (q) {
      setQuestion(q);
      handleAsk(q);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAsk = (q?: string) => {
    const text = q || question;
    if (!text.trim()) return;
    setLoading(true);
    setAnswer("");
    // Simulate brief loading
    setTimeout(() => {
      setAnswer(getPlainAnswer(text));
      setLoading(false);
    }, 800);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleAsk();
  };

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-bold text-foreground md:text-4xl">
        Ask a Question
      </h1>
      <p className="mt-2 text-lg text-muted-foreground">
        Type any health question and get a plain-language answer.
      </p>

      <form onSubmit={handleSubmit} className="mt-8">
        <div className="flex gap-3">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="e.g., What does high cholesterol mean?"
            className="h-12 flex-1 rounded-xl border bg-card px-4 text-base transition-shadow placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
          <Button
            type="submit"
            disabled={!question.trim() || loading}
            className="h-12 rounded-xl px-6"
          >
            {loading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </Button>
        </div>
      </form>

      {/* Suggested questions */}
      {!answer && !loading && (
        <div className="mt-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <Lightbulb className="h-4 w-4" />
            Try asking:
          </div>
          <div className="flex flex-wrap gap-2">
            {suggestedQuestions.map((sq) => (
              <button
                key={sq}
                onClick={() => {
                  setQuestion(sq);
                  handleAsk(sq);
                }}
                className="rounded-full border bg-card px-4 py-2 text-sm text-foreground transition-colors hover:border-primary/30 hover:bg-accent"
              >
                {sq}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Answer */}
      {(answer || loading) && (
        <div className="mt-8 rounded-2xl border bg-card p-6">
          {loading ? (
            <div className="flex items-center gap-3 text-muted-foreground">
              <Loader2 className="h-5 w-5 animate-spin" />
              Finding a clear answer for you...
            </div>
          ) : (
            <div className="prose prose-sm max-w-none text-foreground/85">
              {answer.split("\n").map((line, i) => {
                if (line.startsWith("**") && line.endsWith("**")) {
                  return (
                    <h3 key={i} className="mt-4 mb-1 text-base font-semibold text-foreground first:mt-0">
                      {line.replace(/\*\*/g, "")}
                    </h3>
                  );
                }
                if (line.startsWith("•")) {
                  return (
                    <p key={i} className="ml-2 my-1">
                      {line}
                    </p>
                  );
                }
                if (line.startsWith("*") && line.endsWith("*")) {
                  return (
                    <p key={i} className="mt-4 text-sm italic text-muted-foreground">
                      {line.replace(/\*/g, "")}
                    </p>
                  );
                }
                if (line.trim() === "") return <br key={i} />;
                return <p key={i} className="my-1 leading-relaxed">{line}</p>;
              })}
            </div>
          )}
        </div>
      )}
    </main>
  );
};

export default AskPage;
