import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { topics } from "@/data/topics";

const TopicPage = () => {
  const { id } = useParams<{ id: string }>();
  const topic = topics.find((t) => t.id === id);

  if (!topic) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h1 className="text-2xl font-bold text-foreground">Topic not found</h1>
        <Link to="/" className="mt-4 inline-block text-primary hover:underline">
          ← Back to Home
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <Link
        to="/"
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Topics
      </Link>

      <div className="mb-8">
        <span className="text-4xl">{topic.emoji}</span>
        <h1 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
          {topic.title}
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">{topic.description}</p>
      </div>

      <div className="space-y-10">
        {topic.sections.map((section, i) => (
          <section key={i}>
            <h2 className="mb-3 text-xl font-semibold text-primary">
              {section.title}
            </h2>
            <p className="text-base leading-relaxed text-foreground/85">
              {section.content}
            </p>
          </section>
        ))}
      </div>

      <div className="mt-16 rounded-2xl border bg-accent/50 p-6">
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">Disclaimer:</strong> This information is for educational purposes only and is not a substitute for professional medical advice. Always consult your doctor or a qualified health provider with questions about your health.
        </p>
      </div>
    </main>
  );
};

export default TopicPage;
