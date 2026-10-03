import { siteConfig } from '../data/site';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-[1.7rem] leading-none tracking-[-0.06em] text-[var(--color-text)]">SKYZIM REALTORS</p>
          <p className="mt-3 text-sm text-[var(--color-secondary)]">Residential Real Estate Consultancy · Kolkata, India</p>
        </div>

        <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-5 sm:gap-7">
          {siteConfig.footerNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link text-[0.7rem] font-medium tracking-[0.12em] text-[var(--color-secondary)] uppercase"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="space-y-2 text-sm text-[var(--color-secondary)]">
          <a href={siteConfig.phoneHref} className="block transition-colors duration-300 hover:text-[var(--color-text)]">
            {siteConfig.phoneDisplay}
          </a>
          <a href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer" className="block transition-colors duration-300 hover:text-[var(--color-text)]">
            WhatsApp
          </a>
        </div>
      </div>

      <div className="mx-auto flex justify-center mt-6 max-w-7xl border-t border-[var(--color-border)] pt-5 text-[0.7rem] font-medium tracking-[0.08em] text-[var(--color-secondary)] uppercase">
        © {year} Skyzim Realtors
      </div>
    </footer>
  );
}
