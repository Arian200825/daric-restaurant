import type { Locale, LocalizedString } from "@/config/types";
import { config } from "@/config/restaurant.config";

/**
 * Resolve a LocalizedString to a plain string for the given locale.
 *
 *   localize("Welcome", "fr")                      → "Welcome"
 *   localize({ en: "Welcome", fr: "Bienvenue" }, "fr") → "Bienvenue"
 *
 * Falls back to the default locale, then to the first available value, so a
 * partially-translated site never renders blank.
 */
export function localize(value: LocalizedString, locale: Locale): string {
  if (typeof value === "string") return value;

  return (
    value[locale] ??
    value[config.i18n.defaultLocale] ??
    Object.values(value)[0] ??
    ""
  );
}
