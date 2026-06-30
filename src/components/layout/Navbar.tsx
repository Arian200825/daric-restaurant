"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { config } from "@/config/restaurant.config";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { LanguageSwitcher } from "./LanguageSwitcher";

/** Reserve CTA target — external provider URL, or the on-page section. */
function reserveHref() {
  const r = config.reservations;
  if (r.provider !== "internal" && r.url) return r.url;
  return "#reservations";
}

/** Navbar — transparent over the hero, solid on scroll. Config-driven anchors. */
export function Navbar() {
  const { l, t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const navItems = config.sections
    .filter((s) => s.enabled && s.inNav)
    .map((s) => ({
      id: s.id,
      href: `#${s.id}`,
      label: l(s.navLabel ?? s.id),
    }));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled || open
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent"
      )}
    >
      <nav
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8"
        aria-label="Primary"
      >
        <a
          href="#hero"
          className="font-display text-2xl tracking-tight text-foreground"
          aria-label={`${config.brand.name} — home`}
        >
          {config.brand.name}
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className="text-xs uppercase tracking-[0.18em] text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <LanguageSwitcher className="hidden sm:flex" />
          <Button href={reserveHref()} size="sm" className="hidden sm:inline-flex">
            {t("reserve")}
          </Button>
          <button
            type="button"
            aria-label={open ? t("closeMenu") : t("openMenu")}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius)] border border-border text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border bg-background lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-sm uppercase tracking-[0.15em] text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="flex items-center justify-between pt-3">
                <LanguageSwitcher />
                <Button href={reserveHref()} size="sm" onClick={() => setOpen(false)}>
                  {t("reserve")}
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
