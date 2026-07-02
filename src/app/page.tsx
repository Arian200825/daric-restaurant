import { config } from "@/config/restaurant.config";
import { sectionRegistry } from "@/components/sections/registry";
import { DaricPromo } from "@/components/sections/DaricPromo";

/**
 * Home — assembles the single-page site from config.sections (order + enabled),
 * then the Daric sales CTA (this demo doubles as a lead-gen asset).
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
      <DaricPromo />
    </>
  );
}
