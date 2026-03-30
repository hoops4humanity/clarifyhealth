import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { topics } from "@/data/topics";

const TopicsIndex = () => (
  <main className="pt-32 pb-[64px] md:pb-[120px] px-6">
    <div className="mx-auto max-w-[1100px]">
      <h1 className="text-[36px] font-semibold text-foreground md:text-[48px]">Health Topics</h1>
      <p
        className="mt-4 max-w-[680px] text-[16px] leading-relaxed text-muted-foreground md:text-[18px]"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        Tap any topic to read a clear, jargon-free explanation.
      </p>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3" style={{ gap: "1px" }}>
        {topics.map((topic) => (
          <Link
            key={topic.id}
            to={`/topics/${topic.id}`}
            className="group flex flex-col justify-between p-8 transition-colors hover:bg-[hsl(var(--section-bg))]"
            style={{
              border: "0.5px solid hsl(var(--border))",
              borderRadius: "12px",
              margin: "-0.25px",
            }}
          >
            <div>
              <h2
                className="text-[22px] font-medium text-foreground"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {topic.title}
              </h2>
              <p
                className="mt-2 text-[14px] leading-relaxed text-muted-foreground"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {topic.description}
              </p>
            </div>
            <div className="mt-6 flex items-center text-[13px] text-muted-foreground group-hover:text-primary transition-colors" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="mr-2">Read more</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  </main>
);

export default TopicsIndex;
