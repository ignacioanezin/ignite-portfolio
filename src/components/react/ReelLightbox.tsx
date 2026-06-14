import { useEffect, useRef, useState } from 'react';

interface Props {
  vimeoId: string;
  label?: string;
}

/**
 * ReelLightbox — the hero "Play reel" control + a modal that plays the full
 * Vimeo reel WITH sound on user action (autoplay-with-sound is blocked by
 * browsers, so sound only ever starts here). Only mounted when a reel id
 * exists. One of the four sanctioned React islands.
 */
export default function ReelLightbox({ vimeoId, label = 'Play reel' }: Props) {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  // Sound on, autoplay on open. ?autoplay=1 needs a user gesture — the click is it.
  const src = `https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0&dnt=1`;

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className="btn-ghost">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
          <path d="M4 2.5v11l9-5.5z" />
        </svg>
        {label}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Showreel"
          onClick={(e) => e.target === e.currentTarget && setOpen(false)}
        >
          <button
            ref={closeRef}
            type="button"
            aria-label="Close reel"
            onClick={() => setOpen(false)}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full text-paper transition-opacity hover:opacity-70"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
          <div className="aspect-video w-full max-w-5xl overflow-hidden rounded-lg bg-black shadow-2xl">
            <iframe
              src={src}
              title="Showreel"
              className="h-full w-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
