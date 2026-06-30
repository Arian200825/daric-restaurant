import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { Container } from "./Container";

/** Section — vertical rhythm + anchor target for the single-page nav. */
export function Section({
  id,
  className,
  containerClassName,
  contained = true,
  children,
}: {
  id?: string;
  className?: string;
  containerClassName?: string;
  contained?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-20 py-20 sm:py-28 lg:py-32", className)}
    >
      {contained ? (
        <Container className={containerClassName}>{children}</Container>
      ) : (
        children
      )}
    </section>
  );
}
