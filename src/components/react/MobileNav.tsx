import { useEffect, useState } from 'react';

interface NavLink {
  href: string;
  /** Bilingual labels — rendered as dual spans; CSS shows the active language. */
  en: string;
  es: string;
}

interface MenuLabels {
  openEn: string;
  openEs: string;
  closeEn: string;
  closeEs: string;
}

interface Props {
  links: readonly NavLink[];
  menuLabels: MenuLabels;
  currentPath: string;
}

/**
 * MobileNav — the only interactive piece of the header. Renders a hamburger
 * that opens a full-screen overlay menu. Static markup (logo, desktop links)
 * stays in Nav.astro; this island is hydrated client:idle.
 *
 * Labels arrive bilingual and render as `data-lang` dual spans, so the same
 * CSS language layer (html[data-lang]) drives the overlay with no extra JS.
 */
export default function MobileNav({ links, menuLabels, currentPath }: Props) {
  const [open, setOpen] = useState(false);

  // aria-label can't dual-render; resolve once from the active language.
  const lang =
    (typeof document !== 'undefined' &&
      document.documentElement.getAttribute('data-lang')) ||
    'en';
  const openLabel = lang === 'es' ? menuLabels.openEs : menuLabels.openEn;
  const closeLabel = lang === 'es' ? menuLabels.closeEs : menuLabels.closeEn;

  // Lock body scroll while the menu is open, and close on Escape.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === '/' ? currentPath === '/' : currentPath.startsWith(href);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? closeLabel : openLabel}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="relative z-[70] flex h-10 w-10 items-center justify-center"
      >
        <span className="sr-only">{open ? closeLabel : openLabel}</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          {open ? (
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          ) : (
            <>
              <path d="M3 7h18" strokeLinecap="round" />
              <path d="M3 17h18" strokeLinecap="round" />
            </>
          )}
        </svg>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[65] flex flex-col bg-bone/98 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <nav className="flex flex-1 flex-col justify-center gap-2 px-gutter">
            {links.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`font-display text-5xl font-medium tracking-tight transition-opacity ${
                  isActive(link.href)
                    ? 'text-ink opacity-100'
                    : 'text-ink opacity-60 hover:opacity-100'
                }`}
                style={{
                  // staggered fade-in for the slow-camera feel
                  animation: `mn-in 0.5s var(--ease-cinematic) ${
                    0.05 + i * 0.06
                  }s both`,
                }}
              >
                <span className="t" data-k={link.href}>
                  <span lang="en" data-lang="en">
                    {link.en}
                  </span>
                  <span lang="es" data-lang="es">
                    {link.es}
                  </span>
                </span>
              </a>
            ))}
          </nav>
          <style>{`@keyframes mn-in{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}
            @media (prefers-reduced-motion: reduce){[style*="mn-in"]{animation:none!important}}`}</style>
        </div>
      )}
    </div>
  );
}
