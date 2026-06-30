"use client";

import { content } from "@/content/site-content";
import { useI18n } from "@/lib/i18n";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Media } from "@/components/ui/Media";

/** Chef — profile of the executive chef with a pull quote. */
export function Chef() {
  const { l } = useI18n();
  const chef = content.chef;

  return (
    <Section id="chef" className="bg-surface">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal delay={0.1} className="order-2 flex flex-col gap-5 lg:order-1">
          <Eyebrow>{l(chef.eyebrow)}</Eyebrow>
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl">{chef.name}</h2>
            <p className="mt-1 text-sm uppercase tracking-[0.18em] text-primary">
              {l(chef.role)}
            </p>
          </div>
          {chef.bio.map((p, i) => (
            <p key={i} className="text-pretty leading-relaxed text-muted">
              {l(p)}
            </p>
          ))}
          {chef.quote && (
            <blockquote className="mt-2 border-l-2 border-primary pl-5 font-display text-xl italic text-foreground sm:text-2xl">
              {l(chef.quote)}
            </blockquote>
          )}
        </Reveal>

        <Reveal className="order-1 lg:order-2">
          <Media
            src={chef.image}
            alt={chef.name}
            gradient={["#5a3f22", "#0c0a09"]}
            className="aspect-[4/5] rounded-[var(--radius)]"
          />
        </Reveal>
      </div>
    </Section>
  );
}
