const AboutPage = () => (
  <main className="pt-32 pb-[64px] md:pb-[120px] px-6">
    <div className="mx-auto max-w-[680px]">
      <div className="stagger-reveal">
        <h1 className="text-[36px] font-semibold text-foreground md:text-[48px]">About</h1>

        <div
          className="mt-10 space-y-6 text-[16px] leading-[1.8] text-foreground/80"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
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
        </div>
      </div>

      <div
        className="mt-16 p-8 animate-fade-in"
        style={{
          border: "0.5px solid hsl(var(--border))",
          borderRadius: "12px",
          backgroundColor: "hsl(var(--section-bg))",
          animationDelay: "300ms",
        }}
      >
        <p
          className="text-[14px] leading-relaxed text-muted-foreground"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          <strong className="text-foreground">Important:</strong> Clarify Health
          is an educational resource, not a substitute for professional medical
          advice. Always consult your doctor or a qualified healthcare provider.
        </p>
      </div>
    </div>
  </main>
);

export default AboutPage;
