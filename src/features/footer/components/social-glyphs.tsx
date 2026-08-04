/**
 * Brand glyphs for the footer's social row.
 *
 * lucide-react v1 removed brand marks, and pulling `simple-icons` in for four
 * glyphs is not worth the dependency, so these are hand-built on a 24px grid.
 * Each one inherits `currentColor` and needs no fill/stroke props from callers.
 */

type GlyphProps = { className?: string };

export function LinkedInGlyph({ className }: GlyphProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      fill="currentColor"
      className={className}
    >
      <circle cx="5.1" cy="4.6" r="1.9" />
      <path d="M3.5 8.4h3.2V20H3.5z" />
      <path d="M10 8.4h3.1v1.6a4.2 4.2 0 0 1 3.6-1.9c2.8 0 4.3 1.8 4.3 5V20h-3.2v-6.2c0-1.7-.7-2.7-2.2-2.7-1.5 0-2.4 1-2.4 2.8V20H10z" />
    </svg>
  );
}

export function XGlyph({ className }: GlyphProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      fill="currentColor"
      className={className}
    >
      <path d="M17.7 3h3.2l-7 8 7.5 10h-5.6l-4.4-5.9L6.1 21H2.9l7.3-8.3L3 3h5.7l4.1 5.5zm-1.1 16h1.8L7.3 4.8H5.4z" />
    </svg>
  );
}

export function YouTubeGlyph({ className }: GlyphProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      fill="currentColor"
      className={className}
    >
      {/* Body and play head are one path with a hole, so the notch shows the
          panel behind it instead of a hard-coded background colour. */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.6 7.3a2.8 2.8 0 0 0-1.9-2C18 4.8 12 4.8 12 4.8s-6 0-7.7.5a2.8 2.8 0 0 0-1.9 2C2 9 2 12 2 12s0 3 .4 4.7a2.8 2.8 0 0 0 1.9 2c1.7.5 7.7.5 7.7.5s6 0 7.7-.5a2.8 2.8 0 0 0 1.9-2C22 15 22 12 22 12s0-3-.4-4.7ZM10.1 15.3V8.7L15.8 12z"
      />
    </svg>
  );
}

export function FacebookGlyph({ className }: GlyphProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      fill="currentColor"
      className={className}
    >
      <path d="M14.4 8.6h2.4V5.4c-.4-.06-1.7-.17-3.1-.17-3 0-4.9 1.9-4.9 5.2v2.2H6.2v3.5h2.6V21h3.5v-4.9h2.6l.4-3.5h-3v-1.9c0-1 .3-1.4 1.1-1.4z" />
    </svg>
  );
}

export const SOCIALS = [
  {
    label: "NComputing on LinkedIn",
    href: "https://www.linkedin.com/company/ncomputing",
    Glyph: LinkedInGlyph,
  },
  { label: "NComputing on X", href: "https://x.com/ncomputing", Glyph: XGlyph },
  {
    label: "NComputing on YouTube",
    href: "https://www.youtube.com/@ncomputing",
    Glyph: YouTubeGlyph,
  },
  {
    label: "NComputing on Facebook",
    href: "https://www.facebook.com/NComputing",
    Glyph: FacebookGlyph,
  },
] as const;
