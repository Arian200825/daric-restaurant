"use client";

import { config } from "@/config/restaurant.config";
import { useI18n } from "@/lib/i18n";

/** Footer — brand, hours, contact, socials. All values from config. */
export function Footer() {
  const { l, t } = useI18n();
  const { brand, contact, hours, socials } = config;
  const year = "2026"; // build-time constant
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <p className="font-display text-3xl">{brand.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            {l(brand.tagline)}
          </p>
          <div className="mt-5 flex gap-4 text-xs uppercase tracking-[0.15em] text-muted">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-luxe text-primary">
            {t("hours")}
          </p>
          <ul className="mt-4 flex flex-col gap-1.5 text-sm text-muted">
            {hours.map((h, i) => (
              <li key={i} className="flex justify-between gap-4">
                <span>{l(h.days)}</span>
                <span className="text-foreground/80">{l(h.hours)}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-luxe text-primary">
            {t("findUs")}
          </p>
          <address className="mt-4 flex flex-col gap-2 text-sm not-italic text-muted">
            <span>
              {contact.address.street}
              <br />
              {contact.address.city}
              {contact.address.region ? `, ${contact.address.region}` : ""}{" "}
              {contact.address.postalCode}
            </span>
            <a
              href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`}
              className="transition-colors hover:text-primary"
            >
              {contact.phone}
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="transition-colors hover:text-primary"
            >
              {contact.email}
            </a>
          </address>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-muted sm:flex-row sm:px-8">
          <p>
            © {year} {brand.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 uppercase tracking-[0.15em]">
            <a href={`${base}/privacy/`} className="transition-colors hover:text-primary">
              Privacy
            </a>
            <a href={`${base}/terms/`} className="transition-colors hover:text-primary">
              Terms
            </a>
            <a
              href="https://arian200825.github.io/daric-agency/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary transition-opacity hover:opacity-80"
            >
              Built by Daric →
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
