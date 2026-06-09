# Ignacio Anezin — Portfolio

Portfolio site for an embedded athlete-filmmaker. Fast, production-grade, light
editorial monochrome with cinematic dark sections.

- **Astro 5** (static output) + **React islands** for interactivity only
- **Tailwind v4** via `@theme` tokens in `src/styles/global.css`
- **TypeScript** (strict)
- Deploys to **Vercel** (`@astrojs/vercel`)

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production build → .vercel/output
npm run preview  # preview the build locally
```

## Where things live

```
src/
  lib/site.ts            # ⭐ single source of truth: brand, contact, feature flags
  data/metrics.ts        # proof numbers (auto-hides when empty)
  data/clients.ts        # trust-wall logos (auto-hides when empty)
  content/projects/*.md  # case studies (one file per project)
  assets/projects/*.jpg  # project thumbnails (bright/photographic)
  assets/hero/ignacio.png# hero portrait cutout
  components/            # .astro components; react/ holds the 4 islands
  pages/                 # routes (index, work, work/[slug], about, services, contact)
  styles/global.css      # design tokens + component utilities
```

Almost everything is configured from **`src/lib/site.ts`** and the two data
files — you rarely need to touch components.

## Common tasks

> **Templates:** ready-to-fill starters live in `templates/` —
> `templates/project.example.md` and `templates/post.example.md`. Copy one into
> `src/content/projects/` or `src/content/posts/`, rename, and fill the blanks.
> (Files under `templates/` are outside the content collection, so they never
> appear on the site.)

### Add a project

1. Create `src/content/projects/my-project.md` (or copy `templates/project.example.md`).
   Required fields (see `src/content.config.ts` for the schema):

   ```yaml
   ---
   title: "My Project"
   category: brand-content      # brand-content | race-coverage | athlete-story
   client: "Brand or Race"      # optional
   year: 2026
   location: "Where it was shot"
   role: "Director, DP, Editor"
   youtubeId: "abcdEFGhijk"     # the project video id
   thumbnail: "../../assets/projects/my-project.jpg"  # bright, photographic
   excerpt: "One strategic line for the grid."
   challenge: "The client's problem."
   strategy: "The creative approach."
   production: "How it was shot — the embedded angle lives here."
   deliverables:
     - "Hero film"
     - "Social cutdowns"
   # result: "Only include if it's real and true — no invented outcomes."
   featured: true               # show on the home page (keep to 3–4)
   tags: ["tag-a", "tag-b"]     # optional
   ---

   Optional author's note (markdown body) renders at the bottom of the case study.
   ```

2. Drop the thumbnail into `src/assets/projects/`. Astro optimizes it.
3. It appears automatically on `/work`, gets its own `/work/my-project` case
   study, and shows on the home page if `featured: true`.

**Home grid note:** the home page shows up to **4 featured** projects as a 2×2 on
desktop; the 4th is hidden on mobile (it shows 3). `/work` shows everything.

> There is currently one **placeholder** project, `headwind.md`, added purely to
> balance the home grid. Its thumbnail is a copy of `dragons-back.jpg`. Replace
> the copy and image with a real fourth project (keep the filename) when ready.

### Fill in metrics

Edit `src/data/metrics.ts` — uncomment/add **real** numbers only:

```ts
export const METRICS: Metric[] = [
  { value: '17M+', label: 'views generated' },
  { value: '100+', label: 'athletes covered' },
];
```

If the array is empty, the whole metrics strip hides itself. Never ship
invented or zero metrics.

### Add clients / races

Edit `src/data/clients.ts`. Add inline SVG wordmarks (use `fill="currentColor"`
so they normalize to one tone). Only **real** clients/races. Empty array hides
the section. Pick an honest heading via `CLIENTS_HEADING`
(`'Clients' | 'Worked with' | 'Races & events covered'`). For 10+ logos, set
`CLIENTS_DISPLAY = 'slider'` in `src/lib/site.ts` for a marquee.

### Swap the hero to reel mode

In `src/lib/site.ts`:

```ts
export const VIMEO_REEL_ID = '123456789'; // your Vimeo id
export const HERO_MODE = 'reel';
```

`'reel'` only activates when a `VIMEO_REEL_ID` is present — otherwise the page
falls back to the finished portrait hero. The portrait relocates into an intro
band automatically; nothing else needs editing.

### Add the Switzer font

The site ships with Geist as the self-hosted fallback. To use Switzer (primary):

1. Download `switzer-variable.woff2` from Fontshare and drop it in
   `public/fonts/`.
2. In `src/styles/global.css`, uncomment the `@font-face` block for Switzer.
3. In `src/layouts/BaseLayout.astro`, add a matching `<link rel="preload">` for
   the Switzer woff2 (there's a note next to the Geist preload).

The font stack already lists Switzer first, so it takes over once present.

### Wire up the contact form

`src/pages/contact.astro` posts to a placeholder `FORM_ENDPOINT`. Create a form
on [Formspree](https://formspree.io) (or similar) and replace
`https://formspree.io/f/your-form-id` with your endpoint. Until then the form
shows a friendly "email me directly" message instead of submitting.

## Design system

- **No accent colour** anywhere except one muted sage "signal" token
  (`--color-signal`) used only for the availability pill. Emphasis comes from
  ink/bone fills, animated underlines, and weight.
- Light: bone `#E9E8E3` bg, ink `#111110` text, secondary `#57574f`
  (kept AA-compliant — don't swap it for `#6B6B63`, which fails AA and would
  drop the Lighthouse Accessibility score).
- Dark sections invert to bone-on-ink.
- One grotesque sitewide (Switzer → Geist → system); vary weight/size only.
- Motion respects `prefers-reduced-motion`: scroll-reveal, marquee, hover
  previews, and the film grain all disable, and content stays fully visible.

## SEO

- Per-page `<title>`/meta, Open Graph + Twitter cards (`BaseLayout.astro`).
- JSON-LD `Person` site-wide; `VideoObject` on each case study.
- `@astrojs/sitemap` generates `/sitemap-index.xml`; `robots.txt` is a dynamic
  endpoint (`src/pages/robots.txt.ts`) tied to the `SITE.indexable` flag.
- Update `SITE.url` in `src/lib/site.ts` before deploy so canonical URLs, OG tags,
  and the sitemap use the real domain.

## Preview vs. public (indexing)

`src/lib/site.ts` has a master switch, **`SITE.indexable`**:

- **`false` (default)** — preview mode. Every page ships `noindex,nofollow` and
  `robots.txt` returns `Disallow: /`. Use this to deploy a shareable live URL
  without search engines indexing sample/placeholder content.
- **`true`** — public. Pages are indexable and `robots.txt` allows crawling and
  advertises the sitemap.

Flip to `true` only once real content is in (real projects/results, real client
logos in `src/data/clients.ts`, real metrics, a real OG image).

## Deploy to Vercel

1. Push to a Git repo and import it in Vercel (framework preset: **Astro**).
2. Set the production domain, then update `SITE.url` in `src/lib/site.ts`.
3. Replace `public/og/og-default.jpg` with a real 1200×630 share image.
4. Wire the contact form: set the real `FORM_ENDPOINT` in
   `src/pages/contact.astro` (or leave it — the page falls back to the mailto).
5. When ready for the public launch, set `SITE.indexable = true` and redeploy.

No env vars are required for the static build.
