import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { topics } from "@/data/topics";
import PageMeta from "@/components/PageMeta";

function getPlainAnswer(question: string): string {
  const q = question.toLowerCase();
  for (const topic of topics) {
    const keywords = topic.title.toLowerCase().split(" ");
    if (keywords.some((kw) => kw.length > 3 && q.includes(kw)) || q.includes(topic.id.replace(/-/g, " "))) {
      const relevant = topic.sections
        .map((s) => `**${s.title}**\n${s.content}`)
        .join("\n\n");
      return `Here's what we know about **${topic.title}**:\n\n${relevant}\n\n*Remember: Always talk to your doctor for advice specific to your situation.*`;
    }
  }
  return `That's a great question. While we don't have a specific article on that topic yet, here are some tips:\n\n• **Write it down** — bring your question to your next doctor's appointment.\n• **Ask for plain language** — tell your doctor, "Can you explain that in simpler terms?"\n• **Bring someone with you** — a second set of ears can help.\n\nWe're always adding new topics. Check back soon, or browse our existing topics for related information.\n\n*This is not medical advice. Please consult a healthcare professional.*`;
}

const exampleQuestions = [
  "What does high cholesterol mean?",
  "How is anxiety treated?",
  "What are signs of diabetes?",
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
    <main className="pt-28 pb-[64px] md:pb-[120px] px-6">
      <div className="mx-auto max-w-[680px]">
        {/* Hero */}
        <div className="stagger-reveal">
          <h1 className="text-[44px] font-semibold leading-[1.1] text-foreground md:text-[56px]">
            Ask anything about
            <br />
            your health.
          </h1>
          <p
            className="mt-5 text-[18px] leading-relaxed text-muted-foreground md:text-[20px]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Get a plain-English answer in seconds. No jargon, no judgment.
          </p>
        </div>

        {/* Example pills */}
        <div className="stagger-reveal mt-10 flex flex-wrap gap-2">
          {exampleQuestions.map((eq) => (
            <button
              key={eq}
              onClick={() => {
                setQuestion(eq);
                setAnswer("");
              }}
              className="rounded-full px-4 py-2 text-[13px] font-medium text-muted-foreground transition-all hover:text-foreground hover:border-primary active:scale-[0.98]"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                border: "0.5px solid hsl(var(--border))",
              }}
            >
              {eq}
            </button>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="stagger-reveal mt-8">
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Type your health question here..."
            rows={4}
            className="w-full resize-none bg-transparent p-4 text-[16px] placeholder:text-muted-foreground focus:outline-none transition-all"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              border: "0.5px solid hsl(var(--border))",
              borderRadius: "4px",
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "hsl(var(--primary))";
              e.currentTarget.style.boxShadow = "0 0 0 3px rgba(26,107,74,0.15)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "hsl(var(--border))";
              e.currentTarget.style.boxShadow = "none";
            }}
          />
          <button
            type="submit"
            disabled={!question.trim() || loading}
            className="mt-4 w-full py-3.5 text-[15px] font-medium text-primary-foreground bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-[0.98]"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              borderRadius: "4px",
            }}
          >
            {loading ? (
              <span className="inline-flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                Thinking...
              </span>
            ) : (
              "Get your answer"
            )}
          </button>
        </form>

        {/* Response */}
        {(answer || loading) && (
          <div className="mt-12">
            <div className="h-px w-full bg-border mb-10" style={{ height: "0.5px" }} />

            {loading ? (
              <div className="flex items-center gap-3 text-muted-foreground animate-fade-in" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <Loader2 className="h-4 w-4 animate-spin" />
                Finding a clear answer...
              </div>
            ) : (
              <div className="animate-fade-in" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {answer.split("\n").map((line, i) => {
                  if (line.startsWith("**") && line.endsWith("**")) {
                    return (
                      <h3
                        key={i}
                        className="mt-6 mb-2 text-[18px] font-semibold text-foreground first:mt-0"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {line.replace(/\*\*/g, "")}
                      </h3>
                    );
                  }
                  if (line.startsWith("•")) {
                    const parts = line.replace("• ", "").split("**");
                    return (
                      <p key={i} className="my-1.5 pl-4 text-[16px] leading-[1.75] text-foreground/80">
                        •{" "}
                        {parts.map((part, j) =>
                          j % 2 === 1 ? (
                            <strong key={j} className="text-foreground">{part}</strong>
                          ) : (
                            <span key={j}>{part}</span>
                          )
                        )}
                      </p>
                    );
                  }
                  if (line.startsWith("*") && line.endsWith("*")) {
                    return (
                      <p key={i} className="mt-8 text-[14px] italic text-muted-foreground">
                        {line.replace(/\*/g, "")}
                      </p>
                    );
                  }
                  if (line.trim() === "") return <div key={i} className="h-2" />;
                  return (
                    <p key={i} className="my-1.5 text-[16px] leading-[1.75] text-foreground/80">
                      {line}
                    </p>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
};

export default AskPage;
