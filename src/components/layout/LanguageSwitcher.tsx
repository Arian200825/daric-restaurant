"use client";

import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/** LanguageSwitcher — compact locale toggle. Hidden when only one locale. */
export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, locales, t } = useI18n();
  if (locales.length < 2) return null;

  return (
    <div
      className={cn("flex items-center gap-1 text-xs", className)}
      role="group"
      aria-label={t("language")}
    >
      {locales.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          aria-pressed={locale === code}
          className={cn(
            "rounded-[var(--radius)] px-2 py-1 uppercase tracking-[0.15em] transition-colors",
            locale === code
              ? "text-primary"
              : "text-muted hover:text-foreground"
          )}
        >
          {code}
        </button>
      ))}
    </div>
  );
}
