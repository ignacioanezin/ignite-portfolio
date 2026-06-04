// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

import { SITE } from './src/lib/site.ts';

// https://astro.build/config
export default defineConfig({
  site: SITE.url,
  // Static output is fine for v1 (per brief). The Vercel adapter still gives us
  // image optimization + clean deploys.
  output: 'static',
  adapter: vercel({
    webAnalytics: { enabled: false },
  }),
  integrations: [react(), sitemap()],
  // Smooth, native cross-page transitions (the "slow camera move" feel).
  // Astro's <ClientRouter /> is opt-in per layout; see BaseLayout.astro.
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    // Allow remote optimization only from trusted hosts if ever needed.
    domains: [],
  },
});
