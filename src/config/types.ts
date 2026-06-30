/**
 * Restaurant Master Template — typed contracts.
 * Everything the template renders is described here. Editing content/config
 * is type-checked against these shapes.
 */

/** A locale code, e.g. "en", "tr", "fr". */
export type Locale = string;

/**
 * A string that is either a single value (one language) or a per-locale map.
 * Authors write plain strings by default and only reach for the map form when
 * they want translations: `"Welcome"` or `{ en: "Welcome", tr: "Hoş geldiniz" }`.
 */
export type LocalizedString = string | Partial<Record<Locale, string>>;

/* ----------------------------------- Theme ---------------------------------- */

export interface ThemeColors {
  background: string;
  surface: string;
  foreground: string;
  muted: string;
  primary: string;
  /** Text/icon color that sits on top of `primary`. */
  onPrimary: string;
  accent: string;
  border: string;
}

export interface ThemeConfig {
  colors: ThemeColors;
  /** Corner radius (rem) applied to cards/buttons. */
  radius: number;
  /** Keys into the font registry in lib/fonts.ts. */
  fonts: { display: string; body: string };
}

/* --------------------------------- Business --------------------------------- */

export interface BusinessHours {
  /** e.g. "Mon – Thu" */
  days: LocalizedString;
  /** e.g. "17:00 – 23:00" or "Closed" */
  hours: LocalizedString;
}

export interface Address {
  street: string;
  city: string;
  region?: string;
  postalCode?: string;
  country: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

/* ------------------------------- Reservations ------------------------------- */

export type ReservationProvider =
  | "opentable"
  | "resy"
  | "sevenrooms"
  | "internal"
  | "link";

export interface ReservationConfig {
  provider: ReservationProvider;
  /** External booking URL (link/opentable/resy/sevenrooms) or embed src. */
  url?: string;
  /** Where the internal form POSTs (optional). Empty = graceful demo mode. */
  endpoint?: string;
  maxPartySize: number;
  /** Days ahead the date picker allows. */
  advanceDays: number;
}

/* --------------------------------- Sections --------------------------------- */

export type SectionId =
  | "hero"
  | "story"
  | "chef"
  | "signature"
  | "menu"
  | "gallery"
  | "reservations"
  | "reviews"
  | "events"
  | "location"
  | "contact";

export interface SectionConfig {
  id: SectionId;
  enabled: boolean;
  /** Optional nav label override; defaults to the dictionary label. */
  navLabel?: LocalizedString;
  /** Show in the top navigation. */
  inNav?: boolean;
}

/* ------------------------------- Root config -------------------------------- */

export interface RestaurantConfig {
  brand: {
    name: string;
    tagline: LocalizedString;
    description: LocalizedString;
    /** Optional logo image path; falls back to a wordmark of `name`. */
    logo?: string;
  };
  url: string;
  contact: {
    phone: string;
    email: string;
    address: Address;
    /** Google Maps embed URL (Share → Embed). */
    mapEmbedUrl?: string;
  };
  hours: BusinessHours[];
  socials: SocialLink[];
  i18n: { defaultLocale: Locale; locales: Locale[] };
  reservations: ReservationConfig;
  theme: ThemeConfig;
  sections: SectionConfig[];
  seo: { ogImage?: string; keywords: string[] };
}

/* --------------------------------- Content ---------------------------------- */

export interface HeroContent {
  eyebrow: LocalizedString;
  headline: LocalizedString;
  subheadline: LocalizedString;
  backgroundImage?: string;
}

export interface StoryContent {
  eyebrow: LocalizedString;
  title: LocalizedString;
  paragraphs: LocalizedString[];
  image?: string;
  stats?: { value: string; label: LocalizedString }[];
}

export interface ChefContent {
  eyebrow: LocalizedString;
  name: string;
  role: LocalizedString;
  bio: LocalizedString[];
  quote?: LocalizedString;
  image?: string;
}

export interface MenuItem {
  name: LocalizedString;
  description: LocalizedString;
  /** Numeric price; formatted with config currency at render time. */
  price: number;
  /** Dietary/feature tags, e.g. "vegan", "gf", "signature". */
  tags?: string[];
  signature?: boolean;
}

export interface MenuCategory {
  id: string;
  name: LocalizedString;
  note?: LocalizedString;
  items: MenuItem[];
}

export interface MenuContent {
  eyebrow: LocalizedString;
  title: LocalizedString;
  currency: { code: string; symbol: string };
  categories: MenuCategory[];
}

export interface SignatureDish {
  name: LocalizedString;
  description: LocalizedString;
  /** Optional price; formatted with the menu currency symbol. */
  price?: number;
  /** Short accolade, e.g. "Chef's signature" / "Guest favourite". */
  tag?: LocalizedString;
  image?: string;
  gradient?: [string, string];
}

export interface SignatureDishesContent {
  eyebrow: LocalizedString;
  title: LocalizedString;
  intro?: LocalizedString;
  dishes: SignatureDish[];
}

export interface GalleryImage {
  src?: string;
  alt: LocalizedString;
  /** Gradient placeholder stops used when `src` is absent. */
  gradient?: [string, string];
}

export interface GalleryContent {
  eyebrow: LocalizedString;
  title: LocalizedString;
  images: GalleryImage[];
}

export interface Review {
  quote: LocalizedString;
  author: string;
  source?: string;
  rating?: number;
}

export interface ReviewsContent {
  eyebrow: LocalizedString;
  title: LocalizedString;
  items: Review[];
}

export interface EventItem {
  title: LocalizedString;
  date: LocalizedString;
  description: LocalizedString;
  image?: string;
  cta?: { label: LocalizedString; href: string };
}

export interface EventsContent {
  eyebrow: LocalizedString;
  title: LocalizedString;
  items: EventItem[];
}

/** All section content for the site, in one object. */
export interface SiteContent {
  hero: HeroContent;
  story: StoryContent;
  chef: ChefContent;
  signatureDishes: SignatureDishesContent;
  menu: MenuContent;
  gallery: GalleryContent;
  reviews: ReviewsContent;
  events: EventsContent;
}
