"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Locale, LocalizedString } from "@/config/types";
import { config } from "@/config/restaurant.config";
import { dictionaries, type DictKey } from "@/content/dictionary";
import { localize } from "./localize";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  locales: Locale[];
  /** Translate a UI dictionary key. */
  t: (key: DictKey) => string;
  /** Resolve a LocalizedString from content. */
  l: (value: LocalizedString) => string;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);
const STORAGE_KEY = "restaurant-locale";

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(config.i18n.defaultLocale);

  // Restore a previously chosen locale on mount. Deferred to an effect on
  // purpose: reading localStorage during render would cause an SSR/CSR
  // hydration mismatch. This runs once, after mount.
  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (saved && config.i18n.locales.includes(saved)) setLocaleState(saved);
  }, []);

  // Keep <html lang> in sync for accessibility + SEO.
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const value = useMemo<LocaleContextValue>(() => {
    const dict = dictionaries[locale] ?? dictionaries[config.i18n.defaultLocale];
    return {
      locale,
      setLocale,
      locales: config.i18n.locales,
      t: (key) => dict[key] ?? key,
      l: (val) => localize(val, locale),
    };
  }, [locale, setLocale]);

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useI18n must be used within a LocaleProvider");
  return ctx;
}
