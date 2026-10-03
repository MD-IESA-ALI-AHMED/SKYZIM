import { useState } from 'react';
import { siteConfig } from '../data/site';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)]/90 bg-[color:rgba(247,245,240,0.88)] backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]">
          <div className="flex flex-col leading-none">
            <img src="/images/skyzim-logo.jpeg" alt="SKYZIM Realtors Logo" className="h-10 w-auto" />
            </div>
            
        </a>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 md:flex"
        >
          {siteConfig.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link text-[0.76rem] font-medium tracking-[0.12em] text-[var(--color-secondary)] uppercase"
            >
              {item.label}
            </a>
          ))}
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-[var(--color-accent)] bg-[var(--color-accent)]/10 px-4 py-2 text-[0.7rem] font-medium tracking-[0.12em] text-[var(--color-text)] uppercase transition-colors duration-300 hover:bg-[var(--color-accent)] hover:text-[var(--color-light)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
          >
            WhatsApp Us
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="flex flex-col gap-[5px]">
            <span className={`block h-px w-5 bg-current transition-transform ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`block h-px w-5 bg-current transition-opacity ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`block h-px w-5 bg-current transition-transform ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </span>
        </button>
      </div>

      {menuOpen && (
        <div id="mobile-nav" className="border-t border-[var(--color-border)] bg-[var(--color-bg)] md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4">
            {siteConfig.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link py-2 text-[0.72rem] font-medium tracking-[0.12em] text-[var(--color-secondary)] uppercase"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-full border border-[var(--color-accent)] bg-[var(--color-accent)]/12 px-4 py-3 text-[0.72rem] font-medium tracking-[0.12em] text-[var(--color-text)] uppercase"
              onClick={() => setMenuOpen(false)}
            >
              WhatsApp Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
