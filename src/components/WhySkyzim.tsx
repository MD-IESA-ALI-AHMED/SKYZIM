import { differentiators } from '../data/site';

export function WhySkyzim() {
  return (
    <section className="bg-[var(--color-secondary-bg)] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="reveal max-w-2xl">
          <p className="text-[0.7rem] font-medium tracking-[0.28em] text-[var(--color-secondary)] uppercase">THE SKYZIM APPROACH</p>
          <h2 className="mt-5 font-display text-[clamp(2.4rem,5vw,4rem)] leading-[0.96] tracking-[-0.06em] text-[var(--color-text)]">
            A more personal way to navigate real estate.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {differentiators.map((item, index) => (
            <div
              key={item.title}
              className="reveal rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-bg)] p-6 sm:p-7"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <p className="text-[0.68rem] font-medium tracking-[0.22em] text-[var(--color-secondary)] uppercase">
                0{index + 1}
              </p>
              <h3 className="mt-4 text-[1.45rem] font-display leading-tight tracking-[-0.04em] text-[var(--color-text)]">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-8 text-[var(--color-secondary)]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
