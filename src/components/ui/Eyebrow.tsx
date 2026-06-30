import { cn } from "@/lib/utils";

/** Eyebrow — gold, letter-spaced uppercase label above headings. */
export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 text-xs uppercase tracking-luxe text-primary",
        className
      )}
    >
      <span className="h-px w-6 bg-primary/60" aria-hidden />
      {children}
    </span>
  );
}
