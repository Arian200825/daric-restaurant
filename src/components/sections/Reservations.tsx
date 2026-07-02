"use client";

import { useEffect, useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { config } from "@/config/restaurant.config";
import { useI18n } from "@/lib/i18n";
import { partySizes, timeSlots } from "@/lib/reservations";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const fieldClass =
  "w-full rounded-[var(--radius)] border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted/60 focus-visible:border-primary focus-visible:outline-none";
const labelClass = "mb-1.5 block text-xs uppercase tracking-[0.12em] text-muted";

const PROVIDER_NAMES: Record<string, string> = {
  opentable: "OpenTable",
  resy: "Resy",
  sevenrooms: "SevenRooms",
  link: "our booking partner",
};

/** Internal booking form — POSTs to config.reservations.endpoint, or demos. */
function ReservationForm() {
  const { t } = useI18n();
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [range, setRange] = useState<{ min: string; max: string }>({ min: "", max: "" });

  // Compute the allowed date range on the client. Deferred to an effect so the
  // "today" boundary reflects the visitor's current date (not build time) and
  // to avoid an SSR/CSR hydration mismatch on the date input.
  useEffect(() => {
    const today = new Date();
    const max = new Date();
    max.setDate(today.getDate() + config.reservations.advanceDays);
    const iso = (d: Date) => d.toISOString().split("T")[0];
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setRange({ min: iso(today), max: iso(max) });
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("submitting");

    if (config.reservations.endpoint) {
      try {
        await fetch(config.reservations.endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...data, source: "restaurant" }),
        });
      } catch {
        /* fall through to success UI; wire real error handling per client */
      }
    } else {
      // Demo mode: simulate a short request.
      await new Promise((r) => setTimeout(r, 600));
    }
    setStatus("success");
    form.reset();
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-[var(--radius)] border border-border bg-background p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-primary" strokeWidth={1.5} />
        <h3 className="text-2xl">{t("form.successTitle")}</h3>
        <p className="max-w-xs text-sm text-muted">{t("form.successBody")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="r-name" className={labelClass}>{t("form.name")}</label>
          <input id="r-name" name="name" required className={fieldClass} />
        </div>
        <div>
          <label htmlFor="r-phone" className={labelClass}>{t("form.phone")}</label>
          <input id="r-phone" name="phone" type="tel" className={fieldClass} />
        </div>
      </div>

      <div>
        <label htmlFor="r-email" className={labelClass}>{t("form.email")}</label>
        <input id="r-email" name="email" type="email" required className={fieldClass} />
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label htmlFor="r-date" className={labelClass}>{t("form.date")}</label>
          <input
            id="r-date"
            name="date"
            type="date"
            required
            min={range.min}
            max={range.max}
            className={cn(fieldClass, "[color-scheme:dark]")}
          />
        </div>
        <div>
          <label htmlFor="r-time" className={labelClass}>{t("form.time")}</label>
          <select id="r-time" name="time" required defaultValue="" className={fieldClass}>
            <option value="" disabled>—</option>
            {timeSlots().map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="r-guests" className={labelClass}>{t("form.guests")}</label>
          <select id="r-guests" name="guests" required defaultValue="2" className={fieldClass}>
            {partySizes().map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="r-notes" className={labelClass}>{t("form.notes")}</label>
        <textarea id="r-notes" name="notes" rows={3} className={cn(fieldClass, "resize-none")} />
      </div>

      <Button type="submit" size="lg" disabled={status === "submitting"} className="mt-2">
        {status === "submitting" ? (
          <><Loader2 className="h-4 w-4 animate-spin" />{t("form.submitting")}</>
        ) : (
          t("form.submit")
        )}
      </Button>
    </form>
  );
}

/** External provider CTA (OpenTable/Resy/SevenRooms/link). */
function ProviderCTA() {
  const { t } = useI18n();
  const { provider, url } = config.reservations;
  const name = PROVIDER_NAMES[provider] ?? "our booking partner";

  return (
    <div className="flex flex-col items-center gap-5 rounded-[var(--radius)] border border-border bg-background p-10 text-center">
      <p className="text-muted">
        Reservations for {config.brand.name} are handled through {name}.
      </p>
      <Button href={url || "#"} size="lg">
        {t("bookTable")}
      </Button>
    </div>
  );
}

/** Reservations — switches UI based on the configured provider. */
export function Reservations() {
  const { l } = useI18n();
  const isInternal = config.reservations.provider === "internal";

  return (
    <Section id="reservations" className="bg-surface">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="flex flex-col gap-5">
          <Eyebrow>Reservations</Eyebrow>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl">
            Reserve your table
          </h2>
          <p className="text-pretty leading-relaxed text-muted">
            {l(config.brand.description)}
          </p>
          <dl className="mt-2 flex flex-col gap-2 border-t border-border pt-6 text-sm">
            {config.hours.map((h, i) => (
              <div key={i} className="flex justify-between gap-4">
                <dt className="text-muted">{l(h.days)}</dt>
                <dd className="text-foreground/80">{l(h.hours)}</dd>
              </div>
            ))}
          </dl>
          <a
            href={`tel:${config.contact.phone.replace(/[^+\d]/g, "")}`}
            className="text-sm text-primary hover:underline"
          >
            {config.contact.phone}
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          {isInternal ? <ReservationForm /> : <ProviderCTA />}
        </Reveal>
      </div>
    </Section>
  );
}
