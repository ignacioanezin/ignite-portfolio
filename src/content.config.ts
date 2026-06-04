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

      // Case-study body.
      challenge: z.string(), // the client's problem
      strategy: z.string(), // the creative approach
      production: z.string(), // how it was shot (embedded angle lives here)
      deliverables: z.array(z.string()), // the asset ecosystem
      result: z.string().optional(), // outcome — only if real/true

      gallery: z.array(image()).optional(),
      featured: z.boolean().default(false),
      tags: z.array(z.string()).optional(),
    }),
});

export const collections = { projects };

/** Display metadata for each category — single source for labels/filters. */
export const CATEGORY_META = {
  'brand-content': { label: 'Brand Content', order: 1 },
  'race-coverage': { label: 'Race Coverage', order: 2 },
  'athlete-story': { label: 'Athlete Stories', order: 3 },
} as const;

export type CategoryKey = keyof typeof CATEGORY_META;
