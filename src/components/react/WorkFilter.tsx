import { useState } from 'react';

interface Category {
  key: string;
  label: string;
  count: number;
}

interface Props {
  categories: Category[];
  total: number;
}

/**
 * WorkFilter — the only interactive piece of the Work page. The project cards
 * are server-rendered by Astro (so they keep <Image> optimization + the
 * hover-preview script); this island just owns the filter UI and toggles card
 * visibility by category. No reload, no re-fetch — it flips a `hidden` class on
 * the matching `[data-work-item]` elements. One of the sanctioned React islands.
 */
export default function WorkFilter({ categories, total }: Props) {
  const [active, setActive] = useState<string>('all');

  const tabs = [{ key: 'all', label: 'All work', count: total }, ...categories];

  function apply(key: string) {
    setActive(key);
    const items =
      document.querySelectorAll<HTMLElement>('[data-work-item]');
    items.forEach((el) => {
      const show = key === 'all' || el.dataset.category === key;
      el.classList.toggle('hidden', !show);
    });
    // Announce the result count for screen readers.
    const live = document.getElementById('work-filter-status');
    if (live) {
      const shown =
        key === 'all'
          ? total
          : categories.find((c) => c.key === key)?.count ?? 0;
      const label =
        key === 'all'
          ? 'all work'
          : categories.find((c) => c.key === key)?.label ?? '';
      live.textContent = `Showing ${shown} ${
        shown === 1 ? 'project' : 'projects'
      }${key === 'all' ? '' : ` in ${label}`}.`;
    }
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
            {tab.label}
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
