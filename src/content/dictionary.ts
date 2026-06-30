import type { Locale } from "@/config/types";

/**
 * UI string dictionaries — fixed interface text (buttons, labels, form fields)
 * per locale. Section *content* lives in src/content/*; this is only chrome.
 *
 * To add a language: add its code to config.i18n.locales and add an entry here.
 */

export type DictKey =
  | "reserve"
  | "viewMenu"
  | "bookTable"
  | "callUs"
  | "getDirections"
  | "openMenu"
  | "closeMenu"
  | "language"
  | "allItems"
  | "form.name"
  | "form.email"
  | "form.phone"
  | "form.date"
  | "form.time"
  | "form.guests"
  | "form.message"
  | "form.notes"
  | "form.submit"
  | "form.send"
  | "form.submitting"
  | "form.successTitle"
  | "form.successBody"
  | "form.required"
  | "contact.title"
  | "contact.successTitle"
  | "contact.successBody"
  | "hours"
  | "findUs"
  | "guestsCount";

type Dictionary = Record<DictKey, string>;

const en: Dictionary = {
  reserve: "Reserve a table",
  viewMenu: "View the menu",
  bookTable: "Book a table",
  callUs: "Call us",
  getDirections: "Get directions",
  openMenu: "Open menu",
  closeMenu: "Close menu",
  language: "Language",
  allItems: "All",
  "form.name": "Full name",
  "form.email": "Email",
  "form.phone": "Phone",
  "form.date": "Date",
  "form.time": "Time",
  "form.guests": "Guests",
  "form.message": "Message",
  "form.notes": "Special requests",
  "form.submit": "Request reservation",
  "form.send": "Send message",
  "form.submitting": "Sending…",
  "form.successTitle": "Reservation requested",
  "form.successBody":
    "Thank you — we'll confirm your table by email shortly.",
  "form.required": "This field is required.",
  "contact.title": "Get in touch",
  "contact.successTitle": "Message sent",
  "contact.successBody": "Thank you — we'll be in touch shortly.",
  hours: "Opening hours",
  findUs: "Find us",
  guestsCount: "guests",
};

const fr: Dictionary = {
  reserve: "Réserver une table",
  viewMenu: "Voir le menu",
  bookTable: "Réserver",
  callUs: "Appelez-nous",
  getDirections: "Itinéraire",
  openMenu: "Ouvrir le menu",
  closeMenu: "Fermer le menu",
  language: "Langue",
  allItems: "Tout",
  "form.name": "Nom complet",
  "form.email": "E-mail",
  "form.phone": "Téléphone",
  "form.date": "Date",
  "form.time": "Heure",
  "form.guests": "Convives",
  "form.message": "Message",
  "form.notes": "Demandes spéciales",
  "form.submit": "Demander une réservation",
  "form.send": "Envoyer le message",
  "form.submitting": "Envoi…",
  "form.successTitle": "Réservation demandée",
  "form.successBody":
    "Merci — nous confirmerons votre table par e-mail sous peu.",
  "form.required": "Ce champ est obligatoire.",
  "contact.title": "Nous contacter",
  "contact.successTitle": "Message envoyé",
  "contact.successBody": "Merci — nous vous répondrons sous peu.",
  hours: "Horaires d'ouverture",
  findUs: "Nous trouver",
  guestsCount: "convives",
};

export const dictionaries: Record<Locale, Dictionary> = { en, fr };
