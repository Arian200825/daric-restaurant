"use client";

import { content } from "@/content/site-content";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Media } from "@/components/ui/Media";

// Editorial spans for visual rhythm (loops if there are more images).
const SPANS = [
  "sm:col-span-2 sm:row-span-2",
  "",
  "",
  "",
  "sm:col-span-2",
  "",
];

/** Gallery — mosaic of imagery with gradient fallbacks. */
export function Gallery() {
  const { l } = useI18n();
  const gallery = content.gallery;

  return (
    <Section id="gallery">
      <SectionHeading eyebrow={l(gallery.eyebrow)} title={l(gallery.title)} />

      <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:grid-cols-3">
        {gallery.images.map((img, i) => (
          <Reveal
            as="figure"
            key={i}
            delay={(i % 4) * 0.05}
            className={cn(
              "group relative overflow-hidden rounded-[var(--radius)]",
              SPANS[i % SPANS.length]
            )}
          >
            <Media
              src={img.src}
              alt={l(img.alt)}
              gradient={img.gradient}
              className="h-full w-full"
              imgClassName="transition-transform duration-700 group-hover:scale-105"
            />
            <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/80 to-transparent p-4 text-xs uppercase tracking-[0.12em] text-foreground/0 transition-colors duration-300 group-hover:text-foreground/90">
              {l(img.alt)}
            </figcaption>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
