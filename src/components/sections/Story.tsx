"use client";

import { content } from "@/content/site-content";
import { useI18n } from "@/lib/i18n";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Media } from "@/components/ui/Media";

/** Story — brand narrative with supporting stats and an image. */
export function Story() {
  const { l } = useI18n();
  const story = content.story;

  return (
    <Section id="story">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <Media
            src={story.image}
            alt={l(story.title)}
            gradient={["#4a3722", "#15110d"]}
            className="aspect-[4/5] rounded-[var(--radius)]"
          />
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col gap-5">
          <Eyebrow>{l(story.eyebrow)}</Eyebrow>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl">{l(story.title)}</h2>
          {story.paragraphs.map((p, i) => (
            <p key={i} className="text-pretty leading-relaxed text-muted">
              {l(p)}
            </p>
          ))}

          {story.stats && story.stats.length > 0 && (
            <dl className="mt-4 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {story.stats.map((s, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <dt className="order-2 text-xs uppercase tracking-[0.12em] text-muted">
                    {l(s.label)}
                  </dt>
                  <dd className="order-1 font-display text-4xl text-primary">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </Reveal>
      </div>
    </Section>
  );
}
