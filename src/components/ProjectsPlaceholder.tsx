import { projectPlaceholder } from '../data/site';

export function ProjectsPlaceholder() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="reveal rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-secondary-bg)] px-6 py-10 sm:px-8 lg:px-12 lg:py-14">
          <p className="text-[0.7rem] font-medium tracking-[0.28em] text-[var(--color-secondary)] uppercase">
            {projectPlaceholder.eyebrow}
          </p>
          <h2 className="mt-5 max-w-xl font-display text-[clamp(2.2rem,4vw,3.5rem)] leading-[0.96] tracking-[-0.06em] text-[var(--color-text)]">
            {projectPlaceholder.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--color-secondary)]">
            {projectPlaceholder.text}
          </p>
          <div className="mt-8 rounded-[1.4rem] border border-dashed border-[var(--color-border)] bg-[color:rgba(255,255,255,0.2)] p-6 text-base text-[var(--color-secondary)]">
            {projectPlaceholder.note}
          </div>
        </div>
      </div>
    </section>
  );
}
