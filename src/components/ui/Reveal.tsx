"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, viewportOnce } from "@/lib/animations";

/** Reveal — scroll-triggered entrance. Reduced motion handled globally in CSS. */
export function Reveal({
  children,
  className,
  variants = fadeUp,
  delay = 0,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  as?: "div" | "section" | "span" | "li" | "article" | "figure";
}) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}
