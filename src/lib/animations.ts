import type { Variants } from "framer-motion";

/**
 * Slow, elegant, cinematic motion — long, gentle reveals that let each moment
 * breathe (fine-dining pace), deliberately distinct from the agency's crisp,
 * product-focused motion. Reduced-motion safe (handled in CSS).
 */
const EASE = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.1, ease: EASE } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.2, ease: EASE } },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.08 } },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.95, ease: EASE } },
};

export const viewportOnce = { once: true, margin: "-70px" } as const;
