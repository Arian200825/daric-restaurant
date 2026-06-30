"use client";

import { content } from "@/content/site-content";
import { useI18n } from "@/lib/i18n";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Media } from "@/components/ui/Media";
import { Button } from "@/components/ui/Button";

/** Events — upcoming experiences as image cards. */
export function Events() {
  const { l } = useI18n();
  const events = content.events;

  return (
    <Section id="events">
      <SectionHeading eyebrow={l(events.eyebrow)} title={l(events.title)} />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {events.items.map((ev, i) => (
          <Reveal
            as="article"
            key={i}
            delay={i * 0.08}
            className="group flex flex-col overflow-hidden rounded-[var(--radius)] border border-border bg-surface"
          >
            <Media
              src={ev.image}
              alt={l(ev.title)}
              gradient={["#4a3722", "#15110d"]}
              className="aspect-[3/2]"
              imgClassName="transition-transform duration-700 group-hover:scale-105"
            />
            <div className="flex flex-1 flex-col gap-3 p-6">
              <p className="text-xs uppercase tracking-[0.15em] text-primary">
                {l(ev.date)}
              </p>
              <h3 className="font-display text-2xl">{l(ev.title)}</h3>
              <p className="flex-1 text-sm leading-relaxed text-muted">
                {l(ev.description)}
              </p>
              {ev.cta && (
                <Button href={ev.cta.href} variant="ghost" size="sm" className="self-start px-0">
                  {l(ev.cta.label)}
                </Button>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
