"use client";

import { config } from "@/config/restaurant.config";
import { useI18n } from "@/lib/i18n";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

/** Location — map, address, hours, and a directions link. */
export function Location() {
  const { l, t } = useI18n();
  const { contact, hours } = config;
  const addr = contact.address;

  const directionsQuery = encodeURIComponent(
    `${addr.street}, ${addr.city} ${addr.postalCode ?? ""}, ${addr.country}`
  );
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${directionsQuery}`;

  return (
    <Section id="location" className="bg-surface">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="flex flex-col gap-5">
          <Eyebrow>{t("findUs")}</Eyebrow>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl">Visit us</h2>

          <address className="not-italic text-muted">
            <p className="text-lg text-foreground">{addr.street}</p>
            <p>
              {addr.city}
              {addr.region ? `, ${addr.region}` : ""} {addr.postalCode}
            </p>
            <p>{addr.country}</p>
          </address>

          <dl className="flex flex-col gap-2 border-t border-border pt-6 text-sm">
            <dt className="text-xs uppercase tracking-luxe text-primary">
              {t("hours")}
            </dt>
            {hours.map((h, i) => (
              <div key={i} className="flex justify-between gap-4">
                <dd className="text-muted">{l(h.days)}</dd>
                <dd className="text-foreground/80">{l(h.hours)}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-2 flex flex-wrap gap-3">
            <Button href={directionsUrl} variant="outline" size="sm">
              {t("getDirections")}
            </Button>
            <Button
              href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`}
              variant="ghost"
              size="sm"
            >
              {t("callUs")}
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="min-h-[320px] overflow-hidden rounded-[var(--radius)] border border-border">
          {contact.mapEmbedUrl ? (
            <iframe
              title={`Map to ${config.brand.name}`}
              src={contact.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[320px] w-full grayscale-[0.3]"
            />
          ) : (
            <div className="flex h-full min-h-[320px] items-center justify-center bg-background text-sm text-muted">
              Add a map embed URL in the config.
            </div>
          )}
        </Reveal>
      </div>
    </Section>
  );
}
