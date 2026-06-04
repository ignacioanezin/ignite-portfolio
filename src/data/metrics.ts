/**
 * metrics.ts — the homepage proof strip.
 *
 * HONESTY RULE (from the brief): only TRUE numbers. If this array is empty,
 * the metrics strip hides itself automatically — we never ship invented or
 * zero metrics. To go live, uncomment / edit the examples below with real
 * figures. That's the only change needed; the component does the rest.
 */

export interface Metric {
  /** The number/figure, e.g. "17M+". Keep it punchy. */
  value: string;
  /** What it counts, e.g. "views generated". */
  label: string;
}

export const METRICS: Metric[] = [
  // ── Fill these in with REAL numbers, then delete this comment. ──────────
  // { value: '17M+', label: 'views generated' },
  // { value: '100+', label: 'athletes covered' },
  // { value: '24',   label: 'campaigns delivered' },
  // { value: '3',    label: 'continents shot on' },
];

/** True only when there is at least one real metric to show. */
export const hasMetrics = METRICS.length > 0;
