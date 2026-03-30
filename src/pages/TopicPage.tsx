import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowRight, Check, Copy } from "lucide-react";
import { topics } from "@/data/topics";

const TopicPage = () => {
  const { id } = useParams<{ id: string }>();
  const topic = topics.find((t) => t.id === id);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!topic) return;
    const text = topic.doctorQuestions.map((q, i) => `${i + 1}. ${q}`).join("\n");
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  if (!topic) {
    return (
      <main className="pt-32 px-6 text-center">
        <h1 className="text-[28px] font-semibold text-foreground">Topic not found</h1>
        <Link
          to="/topics"
          className="mt-4 inline-block text-primary hover:underline text-[15px]"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          ← Back to Topics
        </Link>
      </main>
    );
  }

  return (
    <main className="pt-28 pb-0 px-6">
      <div className="mx-auto max-w-[1100px]">
        {/* Breadcrumb */}
        <nav
          className="mb-10 flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.18em] text-primary"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          <Link to="/topics" className="hover:underline">
            Topics
          </Link>
          <span className="text-muted-foreground">→</span>
          <span>{topic.title}</span>
        </nav>

        {/* Hero */}
        <h1 className="text-[44px] font-semibold leading-[1.1] text-foreground md:text-[56px]">
          {topic.title}
        </h1>
        <p
          className="mt-5 max-w-[680px] text-[18px] leading-relaxed text-muted-foreground md:text-[20px]"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {topic.definition}
        </p>

        {/* Green rule */}
        <div className="mt-10 mb-16 h-px w-full bg-primary/30" />

        {/* Two-column layout */}
        <div className="flex flex-col gap-16 lg:flex-row lg:gap-20">
          {/* Main content — 65% */}
          <div className="w-full lg:w-[65%]">
            <div className="space-y-14">
              {topic.sections.map((section, i) => (
                <section key={i}>
                  <span
                    className="mb-3 block text-[11px] font-semibold uppercase tracking-[0.2em] text-primary"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {section.label}
                  </span>
                  <h2 className="mb-5 text-[26px] font-medium leading-tight text-foreground md:text-[28px]">
                    {section.title}
                  </h2>
                  <p
                    className="text-[16px] text-foreground/80"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      lineHeight: "1.75",
                    }}
                  >
                    {section.content}
                  </p>
                </section>
              ))}
            </div>

            {/* Disclaimer */}
            <div
              className="mt-20 p-8"
              style={{
                border: "0.5px solid hsl(var(--border))",
                borderRadius: "12px",
                backgroundColor: "hsl(var(--section-bg))",
              }}
            >
              <p
                className="text-[14px] leading-relaxed text-muted-foreground"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <strong className="text-foreground">Disclaimer:</strong> This
                information is for educational purposes only and is not a
                substitute for professional medical advice. Always consult your
                doctor or a qualified health provider.
              </p>
            </div>
          </div>

          {/* Sidebar — 35% */}
          <aside className="w-full lg:w-[35%]">
            <div
              className="lg:sticky lg:top-28 p-8"
              style={{
                backgroundColor: "#e8f5ef",
                borderRadius: "12px",
              }}
            >
              <h3
                className="text-[20px] font-semibold text-primary"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                5 questions to ask your doctor
              </h3>
              <ol
                className="mt-6 space-y-4"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {topic.doctorQuestions.map((q, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-[15px] leading-relaxed text-foreground"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold text-primary" style={{ backgroundColor: "#d0ebdd" }}>
                      {i + 1}
                    </span>
                    {q}
                  </li>
                ))}
              </ol>
              <button
                onClick={handleCopy}
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded py-3 text-[14px] font-medium text-primary-foreground bg-primary hover:bg-primary/90 transition-colors"
                style={{ fontFamily: "'DM Sans', sans-serif", borderRadius: "4px" }}
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    Copy these questions
                  </>
                )}
              </button>
            </div>
          </aside>
        </div>
      </div>

      {/* Bottom CTA */}
      <section
        className="mt-24 px-6 py-[64px] md:py-[80px]"
        style={{ backgroundColor: "hsl(var(--section-bg))" }}
      >
        <div className="mx-auto max-w-[1100px] flex flex-col items-center text-center">
          <h2 className="text-[32px] font-semibold text-foreground md:text-[36px]">
            Still have questions?
          </h2>
          <p
            className="mt-3 max-w-[480px] text-[16px] text-muted-foreground"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Type any health question and get a clear, jargon-free answer.
          </p>
          <Link
            to="/ask"
            className="mt-8 inline-flex items-center gap-2 rounded bg-primary px-8 py-3 text-[14px] font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            style={{ fontFamily: "'DM Sans', sans-serif", borderRadius: "4px" }}
          >
            Ask a question
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default TopicPage;
