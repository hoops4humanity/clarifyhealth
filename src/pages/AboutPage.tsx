import { Heart } from "lucide-react";

const AboutPage = () => (
  <main className="mx-auto max-w-2xl px-6 py-12">
    <h1 className="text-3xl font-bold text-foreground md:text-4xl">About Clarify Health</h1>

    <div className="mt-8 space-y-6 text-base leading-relaxed text-foreground/85">
      <p>
        Clarify Health was built by a high school student in New Jersey who
        noticed something troubling: when people get a new diagnosis, the
        information available online is often confusing, full of medical jargon,
        and sometimes downright scary.
      </p>
      <p>
        This site exists because everyone deserves to understand their own
        health. Not just doctors and nurses — everyone. Your grandmother. Your
        neighbor. The person sitting in a waiting room right now, worried about
        what the doctor just told them.
      </p>
      <p>
        Every article on this site is written in plain, everyday language. No
        medical terminology without an explanation. No assumptions about what
        you already know. Just clear, honest information to help you feel less
        confused and more in control.
      </p>

      <div className="flex items-start gap-3 rounded-2xl border bg-accent/50 p-6">
        <Heart className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">Important:</strong> Clarify Health
          is an educational resource, not a substitute for professional medical
          advice. Always consult your doctor or a qualified healthcare provider
          for diagnosis and treatment.
        </p>
      </div>
    </div>
  </main>
);

export default AboutPage;
