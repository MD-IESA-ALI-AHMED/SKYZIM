import { services } from '../data/site';

export function Services() {
  return (
    <section id="services" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="reveal max-w-2xl">
          <p className="text-[0.7rem] font-medium tracking-[0.28em] text-[var(--color-secondary)] uppercase">WHAT WE DO</p>
          <h2 className="mt-5 font-display text-[clamp(2.4rem,5vw,4rem)] leading-[0.97] tracking-[-0.06em] text-[var(--color-text)]">
            Guidance at every step.
          </h2>
          <p className="mt-5 text-base leading-8 text-[var(--color-secondary)]">
            Every property decision comes with different priorities. Our role is to understand yours and help you navigate the process with informed, personalized assistance.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="reveal group rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-bg)] p-6 transition-all duration-300 hover:border-[var(--color-accent)]/60 hover:bg-[var(--color-secondary-bg)] sm:p-7"
            >
              <p className="text-[0.68rem] font-medium tracking-[0.22em] text-[var(--color-secondary)] uppercase">{service.number}</p>
              <h3 className="mt-5 text-[clamp(1.5rem,2vw,2rem)] font-display leading-tight tracking-[-0.04em] text-[var(--color-text)]">
                {service.title}
              </h3>
              <p className="mt-4 text-base leading-8 text-[var(--color-secondary)]">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
