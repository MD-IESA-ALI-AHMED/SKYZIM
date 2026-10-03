import { siteConfig } from '../data/site';

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-4 pb-20 pt-6 sm:px-6 lg:px-8 lg:pb-28 lg:pt-12">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="reveal max-w-[40rem]">
          <p className="text-[0.7rem] font-medium tracking-[0.28em] text-[var(--color-secondary)] uppercase">
            {siteConfig.brandLine}
          </p>
          <h1 className="mt-6 max-w-xl font-display text-[clamp(3.5rem,7vw,5.8rem)] leading-[0.94] tracking-[-0.06em] text-[var(--color-text)]">
            {siteConfig.heroTitle}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-[var(--color-secondary)] sm:text-lg">
            {siteConfig.heroText}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-text)] px-6 py-3 text-sm font-medium tracking-[0.08em] text-[var(--color-light)] uppercase transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-primary-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
            >
              WhatsApp Us
            </a>
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] bg-transparent px-6 py-3 text-sm font-medium tracking-[0.08em] text-[var(--color-text)] uppercase transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:text-[var(--color-text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
            >
              Call Us
            </a>
          </div>

          <p className="mt-6 text-[0.68rem] font-medium tracking-[0.18em] text-[var(--color-secondary)] uppercase">
            {siteConfig.heroMeta}
          </p>

          <a
            href="#about"
            className="mt-12 inline-flex items-center gap-3 text-[0.68rem] font-medium tracking-[0.18em] text-[var(--color-secondary)] uppercase transition-colors duration-300 hover:text-[var(--color-text)]"
            aria-label="Scroll to the about section"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] text-base text-[var(--color-text)]">↓</span>
            Explore
          </a>
        </div>

        <div className="reveal hero-frame lg:justify-self-end">
          <img
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
            alt="Contemporary residential house with warm natural tones and layered architecture"
            className="h-[560px] w-full rounded-[1.8rem] object-cover shadow-[0_30px_70px_rgba(36,39,34,0.12)] sm:h-[640px] lg:h-[760px]"
          />
        </div>
      </div>
    </section>
  );
}
