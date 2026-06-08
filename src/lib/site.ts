/**
 * site.ts — single source of truth for brand, contact, SEO and the feature
 * flags called out in the brief. Edit this file to re-skin the site; nothing
 * here should require touching components.
 */

export const SITE = {
  /** Used for canonical URLs, sitemap, OG tags. Update before deploy. */
  url: 'https://ignacioanezin.com',

  name: 'Ignacio Anezin',
  /** One-word positioning tag. */
  tagline: 'Filmmaker',
  /** The dominant hero line — kept stronger than the tagline (see brief). */
  heroStatement: 'Embedded athlete-filmmaker — I run the races I film.',
  /** Short description used for <meta description> + OG fallback. */
  description:
    'Embedded athlete-filmmaker working with outdoor and trail-running brands. I run the races I film — access an external crew can’t replicate.',

  baseLocation: 'Córdoba, Argentina',
  shootingRegion: 'Patagonia & the Andes',

  /** Shown in the hero/nav top bar. Set to '' to hide the availability chip. */
  availability: 'Available for 2026 commissions',

  email: 'anezinignacio@gmail.com',

  social: {
    instagramHandle: '@ignite.av',
    instagram: 'https://instagram.com/ignite.av',
  },

  /** Default OG/Twitter share image (1200×630). Lives in /public. */
  ogImage: '/og/og-default.jpg',
} as const;

/**
 * VIMEO_REEL_ID — drop the numeric Vimeo id here when the hero reel is ready.
 * While empty: no background loop, no "Play reel" control — the hero renders as
 * a clean, finished statement-over-still. Nothing else needs to change.
 */
export const VIMEO_REEL_ID = '' as string;

/**
 * HERO_MODE — the portrait relocates by mode (see Hero components).
 *  - 'portrait' : bone hero with the big "Ignacio / Anezin" name + the cutout
 *                 portrait bleeding off the bottom. No reel needed; looks
 *                 finished with zero motion. (Default while VIMEO_REEL_ID is '' .)
 *  - 'reel'     : full-bleed muted autoplay reel + overlaid statement +
 *                 unmute / Play-reel controls; the portrait moves into an
 *                 INTRO BAND directly below the reel.
 *
 * 'reel' only takes effect when VIMEO_REEL_ID is set — otherwise we fall back
 * to 'portrait' so the page is always finished. Switching reorganises the page
 * automatically; no other edits needed.
 */
export const HERO_MODE: 'portrait' | 'reel' = 'portrait';

/**
 * Derived: is the reel hero actually active? 'reel' only takes effect when a
 * Vimeo id exists, otherwise we fall back to the portrait hero. Used by both
 * the page (for dark nav chrome) and the Hero dispatcher.
 */
export const heroIsReel =
  HERO_MODE === 'reel' && VIMEO_REEL_ID.trim().length > 0;

/**
 * CLIENTS_DISPLAY
 *  - 'wall'   : static monochrome logo grid (default; best under ~10 logos).
 *  - 'slider' : slow seamless pause-on-hover marquee. Respects
 *               prefers-reduced-motion (falls back to the wall). Worth it 10+.
 */
export const CLIENTS_DISPLAY: 'wall' | 'slider' = 'wall';

/** Four-item nav — order matters. `key` resolves the label via the i18n dict. */
export const NAV_LINKS = [
  { label: 'Work', href: '/work', key: 'nav.work' },
  { label: 'About', href: '/about', key: 'nav.about' },
  { label: 'Services', href: '/services', key: 'nav.services' },
  { label: 'Contact', href: '/contact', key: 'nav.contact' },
] as const;
