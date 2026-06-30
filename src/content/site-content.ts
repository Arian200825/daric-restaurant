import type { SiteContent } from "@/config/types";

/**
 * SITE CONTENT — all section copy in one place. Replace these values for a real
 * client; no component changes needed.
 *
 * Localization: any field accepts a plain string OR a { en, fr, … } map.
 * A few fields below are localized to demonstrate the pattern — translate as
 * much or as little as you like.
 */
export const content: SiteContent = {
  hero: {
    eyebrow: { en: "Est. 2014 · New York", fr: "Depuis 2014 · New York" },
    headline: {
      en: "An evening to remember",
      fr: "Une soirée inoubliable",
    },
    subheadline: {
      en: "Seasonal French cuisine, an award-winning cellar, and a room designed for occasions that matter.",
      fr: "Cuisine française de saison, une cave primée et une salle pensée pour les grandes occasions.",
    },
    backgroundImage: "/images/hero.jpg", // drop a file here; gradient shows until then
  },

  story: {
    eyebrow: "Our story",
    title: { en: "A love letter to the table", fr: "Une ode à la table" },
    paragraphs: [
      "Lumière began with a simple belief: that a meal, given enough care, becomes a memory. For over a decade we have sourced from the same farmers, fishermen, and growers — building a kitchen rooted in season and place.",
      "Every plate is composed to be quietly extraordinary. Every service is choreographed to feel effortless. The result is a restaurant that feels at once grand and deeply personal.",
    ],
    image: "/images/story.jpg",
    stats: [
      { value: "10+", label: "Years of service" },
      { value: "2", label: "Michelin stars" },
      { value: "400", label: "Cellar selections" },
    ],
  },

  chef: {
    eyebrow: "The kitchen",
    name: "Élodie Marchand",
    role: { en: "Executive Chef", fr: "Cheffe exécutive" },
    bio: [
      "Trained in Lyon and seasoned across kitchens in Paris and San Sebastián, Chef Marchand brings a precise, produce-led philosophy to every menu.",
      "Her cooking is unmistakably French, yet unafraid — classic technique in service of flavors that surprise.",
    ],
    quote: {
      en: "“Luxury is not excess. It is the right thing, done perfectly.”",
      fr: "« Le luxe n'est pas l'excès. C'est la juste chose, parfaitement exécutée. »",
    },
    image: "/images/chef.jpg",
  },

  signatureDishes: {
    eyebrow: "Signature dishes",
    title: { en: "Dishes we're known for", fr: "Nos plats emblématiques" },
    intro: {
      en: "A few of the plates our guests return for, season after season.",
      fr: "Quelques-uns des plats pour lesquels nos hôtes reviennent, saison après saison.",
    },
    dishes: [
      {
        name: "Foie Gras au Torchon",
        description:
          "Silky torchon with brioche, sauternes gelée, and pickled cherry — a decade on the menu and never leaving.",
        price: 34,
        tag: { en: "Chef's signature", fr: "Signature du chef" },
        image: "/images/signature-1.jpg",
        gradient: ["#6b4f2a", "#15110d"],
      },
      {
        name: "Dover Sole Meunière",
        description:
          "Filleted tableside, finished in brown butter, capers, and lemon. The definition of restraint done right.",
        price: 58,
        tag: { en: "Most ordered", fr: "Le plus commandé" },
        image: "/images/signature-2.jpg",
        gradient: ["#5a3f22", "#0c0a09"],
      },
      {
        name: "Grand Marnier Soufflé",
        description:
          "Cloud-light, served for two with crème anglaise and candied orange. Order it when you sit down.",
        price: 24,
        tag: { en: "Guest favourite", fr: "Coup de cœur" },
        image: "/images/signature-3.jpg",
        gradient: ["#7a5c30", "#15110d"],
      },
    ],
  },

  menu: {
    eyebrow: "The menu",
    title: { en: "Seasonal selections", fr: "Sélections de saison" },
    currency: { code: "USD", symbol: "$" },
    categories: [
      {
        id: "starters",
        name: { en: "Hors d'Œuvres", fr: "Hors-d'œuvre" },
        items: [
          {
            name: "Oysters & Champagne Mignonette",
            description:
              "Half dozen, daily selection, shallot and Champagne vinegar.",
            price: 28,
            tags: ["gf"],
          },
          {
            name: "Foie Gras au Torchon",
            description: "Brioche, sauternes gelée, pickled cherry.",
            price: 34,
            signature: true,
          },
          {
            name: "Heirloom Beet Tartare",
            description: "Smoked crème fraîche, walnut, dill oil.",
            price: 22,
            tags: ["vegetarian", "gf"],
          },
        ],
      },
      {
        id: "mains",
        name: { en: "Entrées", fr: "Plats" },
        items: [
          {
            name: "Dover Sole Meunière",
            description: "Brown butter, capers, parsley, lemon.",
            price: 58,
            tags: ["gf"],
            signature: true,
          },
          {
            name: "Dry-Aged Duck à l'Orange",
            description: "Confit leg, bitter orange, glazed endive.",
            price: 52,
          },
          {
            name: "Wild Mushroom Risotto",
            description: "Carnaroli, aged parmesan, black truffle.",
            price: 38,
            tags: ["vegetarian"],
          },
        ],
      },
      {
        id: "desserts",
        name: { en: "Desserts", fr: "Desserts" },
        items: [
          {
            name: "Grand Marnier Soufflé",
            description: "Crème anglaise, candied orange. For two.",
            price: 24,
            tags: ["vegetarian"],
            signature: true,
          },
          {
            name: "Dark Chocolate Délice",
            description: "Hazelnut praline, fleur de sel, cocoa nib.",
            price: 19,
            tags: ["vegetarian"],
          },
        ],
      },
    ],
  },

  gallery: {
    eyebrow: "The experience",
    title: { en: "A feast for the eyes", fr: "Un régal pour les yeux" },
    images: [
      { alt: "The dining room at dusk", gradient: ["#3a2c1c", "#0c0a09"] },
      { alt: "Signature plating", gradient: ["#6b4f2a", "#15110d"] },
      { alt: "The cellar", gradient: ["#2a1f14", "#0c0a09"] },
      { alt: "Chef at the pass", gradient: ["#5a3f22", "#15110d"] },
      { alt: "Champagne service", gradient: ["#7a5c30", "#0c0a09"] },
      { alt: "Private dining", gradient: ["#3f2e1a", "#15110d"] },
    ],
  },

  reviews: {
    eyebrow: "Acclaim",
    title: { en: "What guests are saying", fr: "Ce que disent nos hôtes" },
    items: [
      {
        quote:
          "The closest thing to a perfect dinner I've had in years. Faultless from the first pour to the last bite.",
        author: "The Metropolitan Review",
        source: "Dining Critic",
        rating: 5,
      },
      {
        quote:
          "Lumière doesn't just serve food — it stages an evening. We came for an anniversary and left speechless.",
        author: "Amara R.",
        source: "Guest",
        rating: 5,
      },
      {
        quote:
          "Impeccable service, a cellar to get lost in, and a soufflé worth the trip alone.",
        author: "Gourmet Quarterly",
        source: "Feature",
        rating: 5,
      },
    ],
  },

  events: {
    eyebrow: "What's on",
    title: { en: "Events & experiences", fr: "Événements & expériences" },
    items: [
      {
        title: "Champagne & Caviar Evening",
        date: "Last Friday, monthly",
        description:
          "A five-course pairing celebrating grower Champagnes and selected caviars.",
        image: "/images/event-1.jpg",
      },
      {
        title: "Chef's Table Tasting",
        date: "By reservation",
        description:
          "Eight seats at the pass for a bespoke menu, narrated by the kitchen.",
        image: "/images/event-2.jpg",
      },
      {
        title: "Seasonal Truffle Menu",
        date: "November – February",
        description:
          "A limited menu built around the winter black truffle harvest.",
        image: "/images/event-3.jpg",
      },
    ],
  },
};
