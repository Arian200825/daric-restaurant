import { config } from "@/config/restaurant.config";

/**
 * Build the CSS that injects the configured theme colors as variables on :root.
 * Rendered once in the root layout, so changing config.theme recolors the
 * entire site with no component edits.
 */
export function themeCss(): string {
  const c = config.theme.colors;
  return `:root{
  --background:${c.background};
  --surface:${c.surface};
  --foreground:${c.foreground};
  --muted:${c.muted};
  --primary:${c.primary};
  --on-primary:${c.onPrimary};
  --accent:${c.accent};
  --border:${c.border};
  --radius:${config.theme.radius}rem;
}`;
}
