export function About() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="reveal">
          <p className="text-[0.7rem] font-medium tracking-[0.28em] text-[var(--color-secondary)] uppercase">ABOUT SKYZIM</p>
          <h2 className="mt-5 max-w-md font-display text-[clamp(2.4rem,5vw,3.8rem)] leading-[0.98] tracking-[-0.06em] text-[var(--color-text)]">
            Real estate, built around trust.
          </h2>
        </div>

        <div className="reveal space-y-6 text-[1.02rem] leading-8 text-[var(--color-secondary)]">
          <p>
            Skyzim Realtors is a Kolkata-based real-estate consultancy focused on helping clients navigate residential property decisions with greater clarity and confidence.
          </p>
          <p>
            From understanding individual requirements to exploring suitable opportunities, negotiating terms, and assisting with documentation, we provide personalized support throughout the property journey.
          </p>
          <p className="text-[var(--color-text)]">
            With a local understanding of the market and a personal, hands-on approach, Skyzim helps clients make informed decisions without unnecessary friction.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl lg:mt-16">
        <div className="reveal overflow-hidden rounded-[1.8rem] border border-[var(--color-border)] bg-[var(--color-secondary-bg)]">
          <img
            src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80"
            alt="Modern residential architecture facade with minimal detailing and warm materials"
            className="h-[420px] w-full object-cover md:h-[520px]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
