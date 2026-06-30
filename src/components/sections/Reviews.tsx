"use client";

import { Star } from "lucide-react";
import { content } from "@/content/site-content";
import { useI18n } from "@/lib/i18n";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

/** Reviews — press + guest acclaim as cards. */
export function Reviews() {
  const { l } = useI18n();
  const reviews = content.reviews;

  return (
    <Section id="reviews" className="bg-surface">
      <SectionHeading eyebrow={l(reviews.eyebrow)} title={l(reviews.title)} />

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {reviews.items.map((r, i) => (
          <Reveal
            as="article"
            key={i}
            delay={i * 0.08}
            className="flex flex-col gap-5 rounded-[var(--radius)] border border-border bg-background p-7"
          >
            {r.rating && (
              <div className="flex gap-1" aria-label={`${r.rating} out of 5`}>
                {Array.from({ length: r.rating }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-primary text-primary" strokeWidth={0} />
                ))}
              </div>
            )}
            <blockquote className="flex-1 font-display text-xl italic leading-snug text-foreground">
              {l(r.quote)}
            </blockquote>
            <footer className="text-sm">
              <p className="text-foreground">{r.author}</p>
              {r.source && (
                <p className="text-xs uppercase tracking-[0.12em] text-muted">
                  {r.source}
                </p>
              )}
            </footer>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
