# Daric — Restaurant Master Template

A luxury, fully **content-driven** fine-dining website template by Daric.
Clone it, edit one config file plus the content, drop in images, and ship a
bespoke restaurant site in an afternoon.

**Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion.
Mobile-first, SEO-optimized (metadata + `Restaurant` JSON-LD), accessible, and
fast (statically generated, lazy media, font-swap).

**Sections:** Hero · Story · Chef · Signature Dishes · Interactive Menu · Gallery ·
Reservations · Reviews · Events · Location · Contact — each toggleable and
reorderable from config.

---

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Customizing for a client (the 4 steps)

Everything a client needs lives in **two folders** — no component edits.

### 1. `src/config/restaurant.config.ts` — the control panel
The single source of truth for the brand. Edit:
- **brand** — name, tagline, description, optional logo
- **contact** — phone, email, address, Google Maps embed URL
- **hours** — opening hours rows
- **socials** — links (shown in nav/footer)
- **theme.colors** — the entire palette (injected as CSS variables → recolors the
  whole site). `theme.radius` controls corner roundness.
- **reservations.provider** — `"internal"` (built-in form) · `"opentable"` ·
  `"resy"` · `"sevenrooms"` · `"link"` (+ `url` / `endpoint`)
- **i18n** — `defaultLocale` + `locales`
- **sections** — order, `enabled`, and `inNav` for each section
- **seo** — keywords + OG image

### 2. `src/content/site-content.ts` — the words
All section copy: hero, story, chef, **menu (categories, items, prices, tags)**,
gallery, reviews, events. Replace the placeholder ("Lumière") content with the
client's.

### 3. `/public/images` — the pictures
Drop in files and reference them by path in config/content (e.g.
`backgroundImage: "/images/hero.jpg"`). **Until an image exists, an elegant
gradient placeholder renders automatically** — so the site always looks finished.

### 4. Fonts (optional) — `src/lib/fonts.ts`
Swap the two `next/font/google` families for any pairing. Only the active fonts
are bundled (keeps Lighthouse high).

That's it. Re-run `npm run build` and deploy.

---

## How the architecture works (for maintainers)

| System | File | What it does |
| ------ | ---- | ------------ |
| **Theme injection** | `lib/theme.ts` | Config colors → CSS variables on `:root`. |
| **Localization** | `lib/localize.ts`, `lib/i18n.tsx` | `LocalizedString` = `"text"` *or* `{ en, fr, … }`; `localize()` resolves it. UI strings in `content/dictionary.ts`; `<LanguageSwitcher>` toggles. |
| **Section registry** | `components/sections/registry.ts` | Maps `SectionId` → component; the page renders from `config.sections`. |
| **Reservation providers** | `components/sections/Reservations.tsx`, `lib/reservations.ts` | One component, swappable booking backend. |
| **Graceful media** | `components/ui/Media.tsx` | Real image when present, branded gradient fallback otherwise. |

### Adding a new language
1. Add the code to `config.i18n.locales`.
2. Add a dictionary entry in `src/content/dictionary.ts`.
3. (Optional) Translate content fields using the `{ en, fr, … }` map form.

### Adding a new section
1. Create the component in `src/components/sections`.
2. Add it to `SectionId` (`config/types.ts`) and `sectionRegistry`.
3. Add an entry to `config.sections`.

### Wiring reservations / forms to a real backend
The internal reservation form and contact form POST to an endpoint when set
(`config.reservations.endpoint`), otherwise run in demo mode. Point them at a
serverless function, Formspree, or a Supabase table per client.

## Scripts
- `npm run dev` — dev server
- `npm run build` — production build
- `npm run start` — serve the build
- `npm run lint` — lint
