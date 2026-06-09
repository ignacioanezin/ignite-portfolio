import type { APIContext } from 'astro';
import { SITE } from '@/lib/site';

// Dynamic robots.txt tied to SITE.indexable. While in preview (indexable:false)
// we Disallow everything so the sample content never gets crawled; once flipped
// to public we allow all and advertise the sitemap.
export function GET(context: APIContext) {
  const origin = context.site?.href.replace(/\/$/, '') ?? SITE.url;
  const body = SITE.indexable
    ? `User-agent: *
Allow: /

Sitemap: ${origin}/sitemap-index.xml
`
    : `# Preview build — not for indexing.
User-agent: *
Disallow: /
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
