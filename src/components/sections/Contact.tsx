"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Mail, Phone, MapPin } from "lucide-react";
import { config } from "@/config/restaurant.config";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const fieldClass =
  "w-full rounded-[var(--radius)] border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted/60 focus-visible:border-primary focus-visible:outline-none";
const labelClass = "mb-1.5 block text-xs uppercase tracking-[0.12em] text-muted";

/** Contact — general enquiry form + direct contact details. */
export function Contact() {
  const { t } = useI18n();
  const { contact } = config;
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");
    // Demo mode — wire to an endpoint or email service per client.
    await new Promise((r) => setTimeout(r, 600));
    setStatus("success");
    form.reset();
  }

  return (
    <Section id="contact">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="flex flex-col gap-6">
          <Eyebrow>{t("contact.title")}</Eyebrow>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl">
            We&apos;d love to hear from you
          </h2>
          <ul className="flex flex-col gap-4 text-sm">
            <li className="flex items-center gap-3 text-muted">
              <Phone className="h-5 w-5 text-primary" strokeWidth={1.5} />
              <a href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`} className="hover:text-foreground">
                {contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-3 text-muted">
              <Mail className="h-5 w-5 text-primary" strokeWidth={1.5} />
              <a href={`mailto:${contact.email}`} className="hover:text-foreground">
                {contact.email}
              </a>
            </li>
            <li className="flex items-center gap-3 text-muted">
              <MapPin className="h-5 w-5 text-primary" strokeWidth={1.5} />
              {contact.address.street}, {contact.address.city}
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          {status === "success" ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 rounded-[var(--radius)] border border-border bg-surface p-10 text-center">
              <CheckCircle2 className="h-12 w-12 text-primary" strokeWidth={1.5} />
              <h3 className="text-2xl">{t("contact.successTitle")}</h3>
              <p className="max-w-xs text-sm text-muted">{t("contact.successBody")}</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="c-name" className={labelClass}>{t("form.name")}</label>
                  <input id="c-name" name="name" required className={fieldClass} />
                </div>
                <div>
                  <label htmlFor="c-email" className={labelClass}>{t("form.email")}</label>
                  <input id="c-email" name="email" type="email" required className={fieldClass} />
                </div>
              </div>
              <div>
                <label htmlFor="c-message" className={labelClass}>{t("form.message")}</label>
                <textarea id="c-message" name="message" rows={5} required className={cn(fieldClass, "resize-none")} />
              </div>
              <Button type="submit" size="lg" disabled={status === "submitting"} className="mt-2 self-start">
                {status === "submitting" ? (
                  <><Loader2 className="h-4 w-4 animate-spin" />{t("form.submitting")}</>
                ) : (
                  t("form.send")
                )}
              </Button>
            </form>
          )}
        </Reveal>
      </div>
    </Section>
  );
}
