import { useState } from 'react';
import ReelLightbox from './ReelLightbox';

interface Props {
  vimeoId: string;
}

/**
 * ReelStage — the reel-mode hero stage. A full-bleed muted autoplay loop with:
 *  - an Unmute/Mute toggle (sound on a user gesture — autoplay-with-sound is
 *    blocked, so we start muted and swap the iframe src on click), and
 *  - a "Play reel" control that opens the full reel with sound in a lightbox.
 *
 * The poster fallback lives behind this in HeroReel.astro, so first paint /
 * reduced-data / reduced-motion all show a finished frame.
 */
export default function ReelStage({ vimeoId }: Props) {
  const [muted, setMuted] = useState(true);

  const loopSrc =
    `https://player.vimeo.com/video/${vimeoId}` +
    `?autoplay=1&loop=1&controls=0&playsinline=1&background=0&dnt=1` +
    `&title=0&byline=0&portrait=0&muted=${muted ? 1 : 0}`;

  return (
    <div className="absolute inset-0">
      <iframe
        // Remount on mute change so the gesture-initiated src actually reloads.
        key={muted ? 'muted' : 'unmuted'}
        src={loopSrc}
        title="Showreel (looping)"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2"
        allow="autoplay; fullscreen"
        tabIndex={-1}
        aria-hidden="true"
      />

      {/* Controls — bottom-right, over the cinematic grade. */}
      <div className="absolute bottom-6 right-[var(--spacing-gutter)] z-20 flex items-center gap-3">
        <button
          type="button"
          onClick={() => setMuted((m) => !m)}
          aria-pressed={!muted}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-bone/40 text-bone backdrop-blur-sm transition-colors hover:border-bone"
          aria-label={muted ? 'Unmute reel' : 'Mute reel'}
        >
          {muted ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <path d="M4 9v6h4l5 4V5L8 9H4z" strokeLinejoin="round" />
              <path d="M17 9l4 6M21 9l-4 6" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <path d="M4 9v6h4l5 4V5L8 9H4z" strokeLinejoin="round" />
              <path d="M16 9a4 4 0 010 6M18.5 7a7 7 0 010 10" strokeLinecap="round" />
            </svg>
          )}
        </button>

        {/* The button + modal for full-sound playback. */}
        <div className="[&_.btn-ghost]:border-bone/40 [&_.btn-ghost]:text-bone hover:[&_.btn-ghost]:bg-bone hover:[&_.btn-ghost]:text-ink">
          <ReelLightbox vimeoId={vimeoId} />
        </div>
      </div>
    </div>
  );
}
