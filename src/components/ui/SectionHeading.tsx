import { cn } from "@/lib/utils";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

/**
 * SectionHeading — eyebrow + display title (+ optional intro). Expects already
 * localized strings (sections resolve content before passing them in).
 */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "flex max-w-2xl flex-col gap-4",
        align === "center" && "mx-auto items-center text-center",
        className
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="text-balance text-3xl sm:text-4xl lg:text-5xl">{title}</h2>
      {intro && (
        <p className="text-pretty leading-relaxed text-muted sm:text-lg">
          {intro}
        </p>
      )}
    </Reveal>
  );
}
