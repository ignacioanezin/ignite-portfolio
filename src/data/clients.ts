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

// Real clients/races only (honesty rule). Empty for launch → the trust wall
// auto-hides via `hasClients`. Add real SVG wordmarks here when available; use
// `fill="currentColor"` so the wall can normalise them to one tone. Template:
//
//   {
//     name: 'Race or Brand',
//     svg: `<svg viewBox="0 0 168 40" fill="currentColor" role="img" aria-label="Race or Brand">
//       <text x="0" y="26" font-family="sans-serif" font-size="17" font-weight="700">NAME</text>
//     </svg>`,
//   },
export const CLIENTS: Client[] = [];

/** True only when there is at least one real client to show. */
export const hasClients = CLIENTS.length > 0;
