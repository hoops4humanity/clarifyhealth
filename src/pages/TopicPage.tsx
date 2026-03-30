import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { topics } from "@/data/topics";

const TopicPage = () => {
  const { id } = useParams<{ id: string }>();
  const topic = topics.find((t) => t.id === id);

  if (!topic) {
    return (
      <main className="pt-32 px-6 text-center">
        <h1 className="text-[28px] font-semibold text-foreground">Topic not found</h1>
        <Link to="/" className="mt-4 inline-block text-primary hover:underline text-[15px]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          ← Back to Home
        </Link>
      </main>
    );
  }

  return (
    <main className="pt-32 pb-[64px] md:pb-[120px] px-6">
      <div className="mx-auto max-w-[680px]">
        <Link
          to="/topics"
          className="mb-10 inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Topics
        </Link>

        <h1 className="text-[36px] font-semibold text-foreground md:text-[48px]">
          {topic.title}
        </h1>
        <p
          className="mt-4 text-[16px] leading-relaxed text-muted-foreground md:text-[18px]"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {topic.description}
        </p>

        <div className="mt-16 space-y-14">
          {topic.sections.map((section, i) => (
            <section key={i}>
              <h2 className="mb-4 text-[24px] font-medium text-foreground">
                {section.title}
              </h2>
              <p
                className="text-[16px] leading-[1.8] text-foreground/80"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {section.content}
              </p>
            </section>
          ))}
        </div>

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
            <strong className="text-foreground">Disclaimer:</strong> This information is for educational purposes only and is not a substitute for professional medical advice. Always consult your doctor or a qualified health provider.
          </p>
        </div>
      </div>
    </main>
  );
};

export default TopicPage;
