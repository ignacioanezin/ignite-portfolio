import { useState } from 'react';

interface Category {
  key: string;
  /** Bilingual labels — rendered as dual spans; CSS shows the active language. */
  en: string;
  es: string;
  count: number;
}

interface Props {
  categories: Category[];
  total: number;
  /** Bilingual "All work" label. */
  allEn: string;
  allEs: string;
}

/**
 * WorkFilter — the only interactive piece of the Work page. Project cards are
 * server-rendered by Astro (keeping <Image> + hover-preview); this island owns
 * the filter UI and toggles card visibility by category. No reload, no re-fetch.
 *
 * Bilingual: button labels render as `data-lang` dual spans (the shared CSS
 * language layer shows the active one); the aria-live status is built in the
 * active language read from html[data-lang] at click time.
 */
export default function WorkFilter({
  categories,
  total,
  allEn,
  allEs,
}: Props) {
  const [active, setActive] = useState<string>('all');

  const tabs = [
    { key: 'all', en: allEn, es: allEs, count: total },
    ...categories,
  ];

  function statusText(key: string) {
    const lang =
      document.documentElement.getAttribute('data-lang') === 'es' ? 'es' : 'en';
    const cat = categories.find((c) => c.key === key);
    const shown = key === 'all' ? total : (cat?.count ?? 0);
    if (lang === 'es') {
      const noun = shown === 1 ? 'proyecto' : 'proyectos';
      return key === 'all'
        ? `Mostrando ${shown} ${noun}.`
        : `Mostrando ${shown} ${noun} en ${cat?.es ?? ''}.`;
    }
    const noun = shown === 1 ? 'project' : 'projects';
    return key === 'all'
      ? `Showing ${shown} ${noun}.`
      : `Showing ${shown} ${noun} in ${cat?.en ?? ''}.`;
  }

  function apply(key: string) {
    setActive(key);
    document
      .querySelectorAll<HTMLElement>('[data-work-item]')
      .forEach((el) => {
        const show = key === 'all' || el.dataset.category === key;
        el.classList.toggle('hidden', !show);
      });
    const live = document.getElementById('work-filter-status');
    if (live) live.textContent = statusText(key);
  }

  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-3">
      {tabs.map((tab) => {
        const isActive = active === tab.key;
        return (
          <button
            key={tab.key}
            type="button"
            aria-pressed={isActive}
            onClick={() => apply(tab.key)}
            className={`group inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              isActive
                ? 'border-ink bg-ink text-bone'
                : 'border-line text-ink-dim hover:border-ink/40 hover:text-ink'
            }`}
          >
            <span className="t">
              <span lang="en" data-lang="en">
                {tab.en}
              </span>
              <span lang="es" data-lang="es">
                {tab.es}
              </span>
            </span>
            <span
              className={`text-xs tabular-nums ${
                isActive ? 'text-bone/60' : 'text-ink-faint'
              }`}
            >
              {tab.count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
