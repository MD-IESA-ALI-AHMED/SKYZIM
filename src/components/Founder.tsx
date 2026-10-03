export function Founder() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.06fr_0.94fr] lg:items-center">
        <div className="reveal overflow-hidden rounded-[1.8rem] border border-[var(--color-border)] bg-[var(--color-secondary-bg)] p-3">
          <div className="relative overflow-hidden rounded-[1.4rem] border border-[var(--color-border)] bg-[var(--color-bg)]">
            <img
              src="/images/founder-muzaffar-ali-ahmed-rai.jpeg"
              alt="Placeholder portrait for Muzaffar Ali Ahmed Rai"
              className="h-[480px] w-full object-cover md:h-[620px]"
              loading="lazy"
            />
          </div>
        </div>

        <div className="reveal">
          <p className="text-[0.7rem] font-medium tracking-[0.28em] text-[var(--color-secondary)] uppercase">THE PERSON BEHIND SKYZIM</p>
          <h2 className="mt-5 max-w-lg font-display text-[clamp(2.4rem,4.6vw,4rem)] leading-[0.96] tracking-[-0.06em] text-[var(--color-text)]">
            Personal guidance. Professional commitment.
          </h2>

          <div className="mt-8 space-y-4">
            <div>
              <p className="font-display text-[clamp(2rem,3vw,3rem)] leading-none tracking-[-0.05em] text-[var(--color-text)]">
                Muzaffar Ali Ahmed Rai
              </p>
              <p className="mt-2 text-[0.7rem] font-medium tracking-[0.22em] text-[var(--color-secondary)] uppercase">
                Founder, Skyzim Realtors
              </p>
            </div>

            <p className="max-w-[42rem] text-base leading-8 text-[var(--color-secondary)]">
              Muzaffar Ali Ahmed Rai founded Skyzim Realtors with a focus on personalized residential real-estate assistance in Kolkata. Drawing on local market knowledge, professional relationships with builders, and an emphasis on thoughtful negotiation, he works closely with clients to help them navigate property decisions and the documentation process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
