import { Cormorant_Garamond, Jost } from "next/font/google";

/**
 * Font pairing for the template. Display = elegant serif, Body = clean sans.
 *
 * To change fonts for a client: swap the imports + calls below for any
 * next/font/google families (keep the `variable` names). The rest of the site
 * reads `--font-display` / `--font-body`, so nothing else changes.
 *
 * Only the active pairing is bundled, which keeps the page fast (Lighthouse).
 */
export const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"], // true italic for the elegant hero headline
  variable: "--font-display",
  display: "swap",
});

export const bodyFont = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

export const fontVariables = `${displayFont.variable} ${bodyFont.variable}`;
