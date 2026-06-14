import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * projects — the case-study collection. One markdown file per project in
 * src/content/projects/. The body fields drive the case-study narrative
 * (Challenge → Strategy → Production → Deliverables → Result).
 *
 * Curate to 6–9 total; mark 3–4 as `featured` for the home page.
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      // Sharpened, outcome-oriented category labels (no medium-based labels).
      category: z.enum(['brand-content', 'race-coverage', 'athlete-story']),
      client: z.string().optional(), // brand or race name
      year: z.number(),
      location: z.string(),
      role: z.string(), // e.g. "Director, DP, Editor"
      youtubeId: z.string(), // project video id
      thumbnail: image(), // local image → optimized via <Image/>
      previewClip: z.string().optional(), // muted hover loop (mp4/webm) in /public
      excerpt: z.string(), // one strategic line for the grid

      // Film-slate metadata (optional → renders only when present, honesty rule).
      // tcIn/tcOut are the piece's stylised in/out timecodes; lens + elevationGain
      // (D+ vertical) are production facts. Leave blank where unknown.
      tcIn: z.string().optional(), // e.g. "00:00:00:00"
      tcOut: z.string().optional(), // e.g. "00:05:12:08"
      lens: z.string().optional(), // e.g. "24mm · 50mm"
      elevationGain: z.string().optional(), // e.g. "2,400 m"

      // Case-study body.
      challenge: z.string(), // the client's problem
      strategy: z.string(), // the creative approach
      production: z.string(), // how it was shot (embedded angle lives here)
      deliverables: z.array(z.string()), // the asset ecosystem
      result: z.string().optional(), // outcome — only if real/true

      // Optional Spanish translations (EN fallback when absent). `excerpt_es`
      // powers the bilingual listings; the long-form fields are the documented
      // extension point for full case-study translation.
      excerpt_es: z.string().optional(),
      challenge_es: z.string().optional(),
      strategy_es: z.string().optional(),
      production_es: z.string().optional(),
      result_es: z.string().optional(),
      deliverables_es: z.array(z.string()).optional(),

      // Vertical social cutdowns (9:16). Optional → render only when present
      // (honesty). Each is a YouTube/Shorts id + a local poster still, shown as
      // a click-to-play lite-embed like the main film.
      verticals: z
        .array(
          z.object({
            youtubeId: z.string(),
            poster: image(),
            caption: z.string().optional(),
            caption_es: z.string().optional(),
          })
        )
        .optional(),

      gallery: z.array(image()).optional(),
      featured: z.boolean().default(false),
      tags: z.array(z.string()).optional(),
    }),
});

/**
 * posts — the Journal / field-notes collection (SEO + voice). One markdown file
 * per post in src/content/posts/. Body is freeform markdown; frontmatter drives
 * the listing, meta tags, and RSS feed.
 *
 * Honesty: these read as craft/approach essays in the first-person voice, never
 * outcome claims. Drafts (`draft: true`) are excluded from the build.
 */
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(), // one line for the card + <meta description>
      // Optional Spanish title/description (EN fallback when absent). The post
      // body stays English this pass.
      title_es: z.string().optional(),
      description_es: z.string().optional(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image().optional(),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects, posts };

/** Display metadata for each category — single source for labels/filters. */
export const CATEGORY_META = {
  'brand-content': { label: 'Brand Content', order: 1 },
  'race-coverage': { label: 'Race Coverage', order: 2 },
  'athlete-story': { label: 'Athlete Stories', order: 3 },
} as const;

export type CategoryKey = keyof typeof CATEGORY_META;
