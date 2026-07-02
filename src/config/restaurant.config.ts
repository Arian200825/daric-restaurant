import type { RestaurantConfig } from "./types";

/**
 * ───────────────────────────────────────────────────────────────────────────
 *  RESTAURANT MASTER TEMPLATE — control panel
 * ───────────────────────────────────────────────────────────────────────────
 *  This single file rebrands the entire site. To clone for a new client:
 *    1. Edit the values below (brand, colors, fonts, hours, reservations…).
 *    2. Replace content in src/content/* (menu, story, chef, gallery, …).
 *    3. Drop images in /public/images and reference them by path.
 *  No component code needs to change. See README → "Customizing for a client".
 *
 *  Placeholder brand: "Lumière" — a luxury fine-dining concept.
 */

export const config: RestaurantConfig = {
  brand: {
    name: "Lumière",
    tagline: "Modern French fine dining.",
    description:
      "Lumière is a Michelin-inspired fine-dining destination — seasonal French cuisine, an award-winning cellar, and an unforgettable room.",
    // logo: "/images/logo.svg", // optional; falls back to a wordmark
  },

  url: "https://example-restaurant.com",

  contact: {
    phone: "+1 (212) 555-0190",
    email: "reservations@lumiere.example",
    address: {
      street: "18 Lantern Street",
      city: "New York",
      region: "NY",
      postalCode: "10013",
      country: "United States",
    },
    // Google Maps → Share → Embed a map → copy the src URL:
    mapEmbedUrl:
      "https://www.google.com/maps?q=Times+Square+New+York&output=embed",
  },

  hours: [
    { days: "Tuesday – Thursday", hours: "17:30 – 22:30" },
    { days: "Friday – Saturday", hours: "17:00 – 23:30" },
    { days: "Sunday", hours: "17:00 – 21:30" },
    { days: "Monday", hours: "Closed" },
  ],

  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "TripAdvisor", href: "https://tripadvisor.com" },
  ],

  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"], // add locales here; provide a dictionary per locale
  },

  reservations: {
    provider: "internal", // "opentable" | "resy" | "sevenrooms" | "internal" | "link"
    url: "", // booking/embed URL for external providers
    endpoint: "", // POST target for the internal form; empty = demo mode
    maxPartySize: 12,
    advanceDays: 60,
  },

  // Warm fine-dining identity: deep charcoal, rich walnut brown, champagne
  // gold, warm cream — candlelit and intimate (see brand brief).
  theme: {
    colors: {
      background: "#0c0a08", // deep charcoal
      surface: "#1e1610", // rich walnut brown
      foreground: "#f5efe4", // warm cream
      muted: "#b3a48b", // warm taupe
      primary: "#cca35f", // champagne gold
      onPrimary: "#1a1206",
      accent: "#cca35f",
      border: "rgba(216, 196, 160, 0.14)", // warm gold-cream hairline
    },
    radius: 0.5,
    fonts: { display: "cormorant", body: "jost" },
  },

  // Order + visibility of sections. Reorder, or flip `enabled` to drop one.
  sections: [
    { id: "hero", enabled: true, inNav: false },
    { id: "story", enabled: true, inNav: true, navLabel: "Story" },
    { id: "chef", enabled: true, inNav: true, navLabel: "Chef" },
    { id: "signature", enabled: true, inNav: true, navLabel: "Signatures" },
    { id: "menu", enabled: true, inNav: true, navLabel: "Menu" },
    { id: "gallery", enabled: true, inNav: true, navLabel: "Gallery" },
    { id: "events", enabled: true, inNav: true, navLabel: "Events" },
    { id: "reviews", enabled: true, inNav: false },
    { id: "reservations", enabled: true, inNav: false },
    { id: "location", enabled: true, inNav: true, navLabel: "Visit" },
    { id: "contact", enabled: true, inNav: true, navLabel: "Contact" },
  ],

  seo: {
    ogImage: "/images/og.jpg",
    keywords: [
      "fine dining",
      "French restaurant",
      "Michelin",
      "tasting menu",
      "reservations",
    ],
  },
};
