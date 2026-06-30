"use client";

import { config } from "@/config/restaurant.config";
import { content } from "@/content/site-content";
import { useI18n } from "@/lib/i18n";
import { cn, formatPrice } from "@/lib/utils";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Media } from "@/components/ui/Media";
import { Button } from "@/components/ui/Button";

/**
 * SignatureDishes — an editorial showcase of the restaurant's hero dishes.
 * Built to entice (big imagery, accolades) and convert (a reservation CTA).
 * Content-driven: see content.signatureDishes.
 */
export function SignatureDishes() {
  const { l, t } = useI18n();
  const sig = content.signatureDishes;
  const symbol = content.menu.currency.symbol;
  const reserve =
    config.reservations.provider !== "internal" && config.reservations.url
      ? config.reservations.url
      : "#reservations";

  return (
    <Section id="signature">
      <SectionHeading
        eyebrow={l(sig.eyebrow)}
        title={l(sig.title)}
        intro={sig.intro ? l(sig.intro) : undefined}
      />

      <div className="mt-16 flex flex-col gap-16 sm:gap-24">
        {sig.dishes.map((dish, i) => {
          const imageRight = i % 2 === 1;
          return (
            <div
              key={i}
              className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
            >
              <Reveal className={cn(imageRight && "lg:order-2")}>
                <Media
                  src={dish.image}
                  alt={l(dish.name)}
                  gradient={dish.gradient}
                  className="aspect-[5/4] rounded-[var(--radius)]"
                  imgClassName="transition-transform duration-700 hover:scale-105"
                />
              </Reveal>

              <Reveal
                delay={0.1}
                className={cn(
                  "flex flex-col gap-4",
                  imageRight && "lg:order-1"
                )}
              >
                {dish.tag && (
                  <span className="text-xs uppercase tracking-luxe text-primary">
                    {l(dish.tag)}
                  </span>
                )}
                <h3 className="font-display text-3xl sm:text-4xl">
                  {l(dish.name)}
                </h3>
                <p className="text-pretty leading-relaxed text-muted">
                  {l(dish.description)}
                </p>
                {typeof dish.price === "number" && (
                  <p className="font-display text-2xl text-foreground">
                    {formatPrice(dish.price, symbol)}
                  </p>
                )}
              </Reveal>
            </div>
          );
        })}
      </div>

      {/* Conversion CTA after the showcase */}
      <Reveal className="mt-16 flex flex-col items-center gap-4 text-center">
        <p className="font-display text-2xl text-foreground sm:text-3xl">
          Taste them for yourself.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href={reserve} size="lg">
            {t("reserve")}
          </Button>
          <Button href="#menu" size="lg" variant="outline">
            {t("viewMenu")}
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
