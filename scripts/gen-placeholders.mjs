/**
 * gen-placeholders.mjs — generates consistent, on-palette placeholder stills so
 * the grid + case studies render immediately. Real frames get swapped in later
 * (same paths / aspect ratios). Run: `npm run gen:placeholders`.
 *
 * Everything is rendered from an SVG gradient → JPG via sharp, so the whole set
 * shares one cinematic grade and reads as a single body of work.
 */
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

// Palette pulled from the design tokens (neutral monochrome, no accent).
const INK = '#111110';
const SUBTLE = '#cfcdc6'; // muted neutral for sub-labels (was the accent)

/** A muted duotone gradient with a faint label + grain feel. */
function poster({ w, h, from, to, label, sub }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${from}"/>
        <stop offset="0.55" stop-color="${to}"/>
        <stop offset="1" stop-color="${INK}"/>
      </linearGradient>
      <radialGradient id="v" cx="0.5" cy="0.42" r="0.78">
        <stop offset="0.6" stop-color="#000" stop-opacity="0"/>
        <stop offset="1" stop-color="#000" stop-opacity="0.32"/>
      </radialGradient>
      <filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/>
        <feColorMatrix type="saturate" values="0"/></filter>
    </defs>
    <rect width="${w}" height="${h}" fill="url(#g)"/>
    <rect width="${w}" height="${h}" fill="url(#n)" opacity="0.06"/>
    <rect width="${w}" height="${h}" fill="url(#v)"/>
    <g font-family="sans-serif" text-anchor="middle">
      <text x="${w / 2}" y="${h / 2 - 6}" fill="#f5f4f0" fill-opacity="0.92"
        font-size="${Math.round(w * 0.045)}" font-weight="700"
        letter-spacing="-1">${label}</text>
      ${sub ? `<text x="${w / 2}" y="${h / 2 + Math.round(w * 0.04)}" fill="${SUBTLE}" fill-opacity="0.9"
        font-size="${Math.round(w * 0.018)}" font-weight="500"
        letter-spacing="4">${sub.toUpperCase()}</text>` : ''}
    </g>
  </svg>`;
}

const jobs = [
  // 16:9 project thumbnails — one cohesive grade, distinct hues. Kept lighter
  // (mid-tone) so they read as contrast on the dark Featured Work section.
  { out: 'src/assets/projects/dragons-back.jpg', w: 1600, h: 900,
    from: '#9a8472', to: '#4a3d34', label: 'Dragon’s Back', sub: 'Race Coverage' },
  { out: 'src/assets/projects/altitude-line.jpg', w: 1600, h: 900,
    from: '#8a929c', to: '#3c424c', label: 'Altitude Line', sub: 'Brand Content' },
  { out: 'src/assets/projects/the-long-way.jpg', w: 1600, h: 900,
    from: '#9c8a72', to: '#463b2e', label: 'The Long Way Up', sub: 'Athlete Story' },

  // Hero poster — used as the reel-mode video fallback frame (kept neutral-dark
  // since it sits behind a video, never as page chrome).
  { out: 'src/assets/hero-poster.jpg', w: 2400, h: 1350,
    from: '#26251f', to: '#0f0f0d', label: '', sub: '' },
];

/** Light editorial OG share card (matches the new bone/ink brand). */
function ogCard(w, h) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    <rect width="${w}" height="${h}" fill="#E9E8E3"/>
    <rect x="0" y="0" width="${w}" height="${h}" fill="none" stroke="#D6D4CD" stroke-width="2"/>
    <g font-family="sans-serif">
      <text x="64" y="${h * 0.46}" fill="#111110" font-size="92" font-weight="600" letter-spacing="-3">Ignacio Anezin</text>
      <text x="68" y="${h * 0.58}" fill="#6B6B63" font-size="30" font-weight="500" letter-spacing="2">FILMMAKER · CÓRDOBA, ARGENTINA</text>
    </g>
  </svg>`;
}

for (const j of jobs) {
  const file = resolve(root, j.out);
  await mkdir(dirname(file), { recursive: true });
  await sharp(Buffer.from(poster(j)))
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(file);
  console.log('✓', j.out);
}

/* ------------------------------------------------------------------ *
 * Hero portrait — transparent B&W cutout placeholder. Swap in the real
 * cut-out PNG of Ignacio at the same path (src/assets/hero/ignacio.png).
 * A simple grayscale figure silhouette on a transparent ground.
 * ------------------------------------------------------------------ */
function portrait(w, h) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    <defs>
      <linearGradient id="f" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#2a2a27"/>
        <stop offset="0.5" stop-color="#161614"/>
        <stop offset="1" stop-color="#0b0b0a"/>
      </linearGradient>
    </defs>
    <g fill="url(#f)">
      <!-- head -->
      <ellipse cx="${w * 0.5}" cy="${h * 0.17}" rx="${w * 0.13}" ry="${h * 0.12}"/>
      <!-- neck -->
      <rect x="${w * 0.44}" y="${h * 0.25}" width="${w * 0.12}" height="${h * 0.07}"/>
      <!-- torso + shoulders + arms + legs as one bleeding mass -->
      <path d="M${w * 0.30} ${h * 0.34}
        Q${w * 0.5} ${h * 0.27} ${w * 0.70} ${h * 0.34}
        L${w * 0.74} ${h * 0.60}
        Q${w * 0.66} ${h * 0.66} ${w * 0.60} ${h * 0.62}
        L${w * 0.60} ${h}
        L${w * 0.40} ${h}
        L${w * 0.40} ${h * 0.62}
        Q${w * 0.34} ${h * 0.66} ${w * 0.26} ${h * 0.60}
        Z"/>
    </g>
  </svg>`;
}

// Light OG share card.
const ogFile = resolve(root, 'public/og/og-default.jpg');
await mkdir(dirname(ogFile), { recursive: true });
await sharp(Buffer.from(ogCard(1200, 630)))
  .jpeg({ quality: 86, mozjpeg: true })
  .toFile(ogFile);
console.log('✓', 'public/og/og-default.jpg');

const portraitFile = resolve(root, 'src/assets/hero/ignacio.png');
await mkdir(dirname(portraitFile), { recursive: true });
await sharp(Buffer.from(portrait(1200, 1600)))
  .grayscale()
  .png()
  .toFile(portraitFile);
console.log('✓', 'src/assets/hero/ignacio.png');

console.log('Done — placeholder media generated.');
