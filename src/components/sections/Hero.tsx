"use client";

import { motion } from "framer-motion";
import { config } from "@/config/restaurant.config";
import { content } from "@/content/site-content";
import { useI18n } from "@/lib/i18n";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Button } from "@/components/ui/Button";
import { Media } from "@/components/ui/Media";

/** Hero — full-viewport opener. Background image with gradient fallback. */
export function Hero() {
  const { l, t } = useI18n();
  const hero = content.hero;
  const reserve =
    config.reservations.provider !== "internal" && config.reservations.url
      ? config.reservations.url
      : "#reservations";

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <Media
        src={hero.backgroundImage}
        alt=""
        gradient={["#2a1f14", "#0c0a09"]}
        eager
        className="absolute inset-0 -z-10"
      />
      {/* Legibility overlay */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-background/70 via-background/40 to-background"
        aria-hidden
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="mx-auto flex max-w-3xl flex-col items-center px-5 text-center"
      >
        <motion.span
          variants={staggerItem}
          className="text-xs uppercase tracking-luxe text-primary"
        >
          {l(hero.eyebrow)}
        </motion.span>

        <motion.h1
          variants={staggerItem}
          className="mt-6 text-balance text-5xl leading-[1.05] sm:text-6xl lg:text-7xl"
        >
          {l(hero.headline)}
        </motion.h1>

        <motion.p
          variants={staggerItem}
          className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg"
        >
          {l(hero.subheadline)}
        </motion.p>

        <motion.div
          variants={staggerItem}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Button href={reserve} size="lg">
            {t("reserve")}
          </Button>
          <Button href="#menu" size="lg" variant="outline">
            {t("viewMenu")}
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-8 left-1/2 h-10 w-px -translate-x-1/2 rule-gold opacity-60"
        aria-hidden
      />
    </section>
  );
}
