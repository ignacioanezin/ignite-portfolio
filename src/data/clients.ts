/**
 * clients.ts — the homepage trust wall.
 *
 * HONESTY RULES (from the brief):
 *  - Only REAL clients / races. Never aspirational or target brands.
 *  - If CLIENTS is empty, the whole section auto-hides.
 *  - Pick a heading that matches reality (see CLIENTS_HEADING).
 *
 * The seed entries below are the fictional clients used in the sample case
 * studies, so the demo is internally consistent. Replace them with real
 * logos before launch (or empty the array to hide the section).
 *
 * Logos are inline SVG strings using `fill="currentColor"` so the wall can
 * normalise mismatched marks to a single muted tone and brighten on hover.
 * SVG wordmarks are preferred — crisp and trivially recolourable.
 */

export type ClientsHeading =
  | 'Clients'
  | 'Worked with'
  | 'Races & events covered';

/** Pick the framing that's honest for the current list size. */
export const CLIENTS_HEADING: ClientsHeading = 'Worked with';

export interface Client {
  name: string;
  /** Inline SVG markup. Use currentColor so the wall can recolour it. */
  svg: string;
}

// Simple geometric placeholder wordmarks (viewBox ~ 160×40, currentColor).
export const CLIENTS: Client[] = [
  {
    name: 'Sierra Skyrace',
    svg: `<svg viewBox="0 0 168 40" fill="currentColor" role="img" aria-label="Sierra Skyrace">
      <path d="M4 30 16 12l8 12 8-16 10 22z" fill="none" stroke="currentColor" stroke-width="2.4"/>
      <text x="58" y="26" font-family="sans-serif" font-size="17" font-weight="700" letter-spacing="0.5">SIERRA</text>
    </svg>`,
  },
  {
    name: 'Cumbre Apparel',
    svg: `<svg viewBox="0 0 168 40" fill="currentColor" role="img" aria-label="Cumbre Apparel">
      <path d="M8 28l12-18 12 18z" />
      <text x="44" y="26" font-family="sans-serif" font-size="17" font-weight="700" letter-spacing="1">CUMBRE</text>
    </svg>`,
  },
  {
    name: 'Andes Trail Co.',
    svg: `<svg viewBox="0 0 168 40" fill="currentColor" role="img" aria-label="Andes Trail Co.">
      <circle cx="18" cy="20" r="11" fill="none" stroke="currentColor" stroke-width="2.4"/>
      <path d="M18 9v22M9 20h18" stroke="currentColor" stroke-width="2.4"/>
      <text x="40" y="26" font-family="sans-serif" font-size="16" font-weight="700" letter-spacing="0.5">ANDES TRAIL</text>
    </svg>`,
  },
  {
    name: 'Patagonia Wild',
    svg: `<svg viewBox="0 0 168 40" fill="currentColor" role="img" aria-label="Patagonia Wild">
      <rect x="6" y="10" width="20" height="20" rx="4" fill="none" stroke="currentColor" stroke-width="2.4"/>
      <path d="M10 24l5-7 4 5 3-4 4 6" fill="none" stroke="currentColor" stroke-width="2"/>
      <text x="36" y="26" font-family="sans-serif" font-size="15" font-weight="700" letter-spacing="0.5">WILD CO.</text>
    </svg>`,
  },
];

/** True only when there is at least one real client to show. */
export const hasClients = CLIENTS.length > 0;
