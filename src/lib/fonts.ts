import {
  Bricolage_Grotesque,
  DM_Sans,
  Inter,
  Lora,
} from "next/font/google";

/**
 * Stripe ships `sohne-var` (Söhne, Klim Type Foundry) — a licensed family that
 * cannot be self-hosted without a purchase. Inter is the closest freely
 * licensable neo-grotesque; the fallback stack mirrors Stripe's own.
 *
 * To switch to Söhne later, swap this for `next/font/local` — nothing else in
 * the app references a font family directly.
 */
export const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  fallback: ["Helvetica Neue", "Arial", "sans-serif"],
});

/**
 * Typeface of the landing-page sections (headline, body copy, buttons).
 *
 * `opsz` must be requested explicitly — next/font ships only the `wght` axis by
 * default, which pins optical size to 14 and renders large headings ~9% wider
 * than the reference. With the axis included, "The database your" measures
 * 476px at 60px/500, matching the reference to within half a pixel.
 */
export const fontDisplay = DM_Sans({
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
  fallback: ["Helvetica Neue", "Arial", "sans-serif"],
});

/** Display pairing used only by the reference-led support section. */
export const fontSupportHeading = Lora({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

export const fontSupportSans = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: "variable",
  axes: ["opsz", "wdth"],
  display: "swap",
  fallback: ["Helvetica Neue", "Arial", "sans-serif"],
});
