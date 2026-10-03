import { approachSteps } from '../data/site';

export function OurApproach() {
  return (
    <section id="approach" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="reveal max-w-3xl">
          <h2 className="font-display text-[clamp(2.4rem,5vw,4rem)] leading-[0.96] tracking-[-0.06em] text-[var(--color-text)]">
            Clarity at every stage.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {approachSteps.map((step, index) => (
            <div
              key={step.title}
              className="reveal rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-bg)] p-6 sm:p-7"
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <p className="text-[0.68rem] font-medium tracking-[0.22em] text-[var(--color-secondary)] uppercase">{step.number}</p>
              <h3 className="mt-5 text-[1.9rem] font-display leading-tight tracking-[-0.04em] text-[var(--color-text)]">
                {step.title}
              </h3>
              <p className="mt-4 text-base leading-8 text-[var(--color-secondary)]">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
