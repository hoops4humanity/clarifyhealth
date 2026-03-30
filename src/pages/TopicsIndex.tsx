import { Link } from "react-router-dom";
import { topics } from "@/data/topics";

const TopicsIndex = () => (
  <main className="mx-auto max-w-5xl px-6 py-12">
    <h1 className="text-3xl font-bold text-foreground md:text-4xl">Health Topics</h1>
    <p className="mt-2 text-lg text-muted-foreground">
      Tap any topic to read a clear, jargon-free explanation.
    </p>

    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {topics.map((topic) => (
        <Link
          key={topic.id}
          to={`/topics/${topic.id}`}
          className="group rounded-2xl border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md"
        >
          <span className="text-3xl">{topic.emoji}</span>
          <h2 className="mt-3 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {topic.title}
          </h2>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            {topic.description}
          </p>
        </Link>
      ))}
    </div>
  </main>
);

export default TopicsIndex;
