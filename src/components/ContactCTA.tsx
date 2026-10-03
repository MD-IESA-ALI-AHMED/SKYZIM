import { siteConfig } from '../data/site';

export function ContactCTA() {
  return (
    <section id="contact" className="bg-[var(--color-dark)] px-4 py-20 text-[var(--color-light)] sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div className="reveal">
          <p className="text-[0.7rem] font-medium tracking-[0.28em] text-[var(--color-light)]/80 uppercase">CONTACT SKYZIM</p>
          <h2 className="mt-5 max-w-xl font-display text-[clamp(2.6rem,4.8vw,4.4rem)] leading-[0.96] tracking-[-0.06em] text-[var(--color-light)]">
            Let&apos;s find the right property for you.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-[var(--color-light)]/80">
            Tell us what you&apos;re looking for, and let&apos;s start a conversation about your residential property needs in Kolkata.
          </p>
        </div>

        <div className="reveal flex flex-col gap-4 sm:flex-row lg:flex-col xl:flex-row">
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-medium tracking-[0.08em] text-[var(--color-dark)] uppercase transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-light)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-dark)]"
          >
            Chat on WhatsApp
          </a>
          <a
            href={siteConfig.phoneHref}
            className="inline-flex items-center justify-center rounded-full border border-[var(--color-light)]/25 bg-transparent px-6 py-3 text-sm font-medium tracking-[0.08em] text-[var(--color-light)] uppercase transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:text-[var(--color-light)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-dark)]"
          >
            Call Skyzim Realtors
          </a>
        </div>
      </div>
    </section>
  );
}
