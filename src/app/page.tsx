import { config } from "@/config/restaurant.config";
import { sectionRegistry } from "@/components/sections/registry";

/**
 * Home — assembles the single-page site from config.sections (order + enabled).
 * Reorder or disable sections in restaurant.config.ts; this renders them.
 */
export default function Home() {
  return (
    <>
      {config.sections
        .filter((s) => s.enabled)
        .map((s) => {
          const SectionComponent = sectionRegistry[s.id];
          return SectionComponent ? <SectionComponent key={s.id} /> : null;
        })}
    </>
  );
}
