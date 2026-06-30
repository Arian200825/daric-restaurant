"use client";

import { useMemo, useState } from "react";
import { Star } from "lucide-react";
import { content } from "@/content/site-content";
import { useI18n } from "@/lib/i18n";
import { cn, formatPrice } from "@/lib/utils";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

/** Human labels for dietary/feature tags. Unknown tags are capitalized. */
const TAG_LABELS: Record<string, string> = {
  gf: "Gluten-free",
  vegetarian: "Vegetarian",
  vegan: "Vegan",
};

function tagLabel(tag: string) {
  return TAG_LABELS[tag] ?? tag[0].toUpperCase() + tag.slice(1);
}

/**
 * Menu — interactive: filter by category and by dietary tags. Fully driven by
 * content/site-content.ts (categories, items, prices, tags).
 */
export function Menu() {
  const { l, t } = useI18n();
  const menu = content.menu;
  const [activeCat, setActiveCat] = useState<string>("all");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  // Dietary tags available across the menu (excludes the "signature" marker).
  const dietaryTags = useMemo(() => {
    const set = new Set<string>();
    menu.categories.forEach((c) =>
      c.items.forEach((i) =>
        (i.tags ?? []).forEach((tag) => set.add(tag))
      )
    );
    return [...set];
  }, [menu.categories]);

  const visibleCategories = menu.categories
    .filter((c) => activeCat === "all" || c.id === activeCat)
    .map((c) => ({
      ...c,
      items: c.items.filter(
        (i) => !activeTag || (i.tags ?? []).includes(activeTag)
      ),
    }))
    .filter((c) => c.items.length > 0);

  return (
    <Section id="menu">
      <SectionHeading eyebrow={l(menu.eyebrow)} title={l(menu.title)} />

      {/* Category tabs */}
      <Reveal className="mt-10 flex flex-wrap items-center justify-center gap-2">
        {[{ id: "all", name: t("allItems") }, ...menu.categories.map((c) => ({ id: c.id, name: l(c.name) }))].map(
          (c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setActiveCat(c.id)}
              aria-pressed={activeCat === c.id}
              className={cn(
                "rounded-[var(--radius)] px-4 py-2 text-xs uppercase tracking-[0.15em] transition-colors",
                activeCat === c.id
                  ? "bg-primary text-on-primary"
                  : "border border-border text-muted hover:text-foreground"
              )}
            >
              {c.name}
            </button>
          )
        )}
      </Reveal>

      {/* Dietary filters */}
      {dietaryTags.length > 0 && (
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          {dietaryTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag((cur) => (cur === tag ? null : tag))}
              aria-pressed={activeTag === tag}
              className={cn(
                "rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.12em] transition-colors",
                activeTag === tag
                  ? "border-primary text-primary"
                  : "border-border text-muted hover:text-foreground"
              )}
            >
              {tagLabel(tag)}
            </button>
          ))}
        </div>
      )}

      {/* Menu list */}
      <div className="mx-auto mt-12 flex max-w-3xl flex-col gap-12">
        {visibleCategories.map((cat) => (
          <Reveal key={cat.id} className="flex flex-col gap-6">
            <h3 className="text-center font-display text-2xl text-primary sm:text-3xl">
              {l(cat.name)}
            </h3>
            <ul className="flex flex-col divide-y divide-border">
              {cat.items.map((item, i) => (
                <li key={i} className="flex items-baseline gap-4 py-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-lg text-foreground">{l(item.name)}</h4>
                      {item.signature && (
                        <Star
                          className="h-3.5 w-3.5 fill-primary text-primary"
                          strokeWidth={0}
                          aria-label="Signature dish"
                        />
                      )}
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {l(item.description)}
                    </p>
                    {item.tags && item.tags.length > 0 && (
                      <ul className="mt-2 flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <li
                            key={tag}
                            className="rounded-full border border-border px-2 py-0.5 text-[10px] uppercase tracking-[0.1em] text-muted"
                          >
                            {tagLabel(tag)}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  {/* Dotted leader + price */}
                  <span
                    className="hidden h-px flex-1 translate-y-[-3px] border-b border-dotted border-border sm:block"
                    aria-hidden
                  />
                  <span className="font-display text-xl text-foreground">
                    {formatPrice(item.price, menu.currency.symbol)}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
