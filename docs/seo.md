# SEO & Metadata

Production metadata architecture for the ASK18 Innovations corporate website. All values originate from centralized configuration — nothing is hardcoded in pages.

## Configuration Sources

| Module | Role |
|--------|------|
| `config/site.ts` | Company name, tagline, canonical base URL, locale, contact |
| `config/seo.ts` | Title template, description, keywords, robots, Open Graph, Twitter, author fields |
| `config/routes.ts` | Public route paths for canonical URLs and sitemap entries |
| `app/metadata.ts` | Default Next.js `Metadata` object consumed by the root layout |
| `lib/seo/` | Building-block helpers and page-level metadata factory |

## Metadata Flow

```
config/site.ts ──┐
                 ├──► config/seo.ts ──► app/metadata.ts ──► app/layout.tsx (export metadata)
config/routes.ts ┘                              │
                                                ├──► app/robots.ts
                                                ├──► app/sitemap.ts
                                                └──► lib/seo/metadata.ts (future page overrides)
```

1. **Root defaults** — `app/layout.tsx` re-exports `defaultMetadata` from `app/metadata.ts`. Every route inherits title template, description, robots, Open Graph, and Twitter defaults automatically.
2. **Page overrides** — Future route segments export partial metadata via `createPageMetadata()` from `@/lib/seo`. Next.js deep-merges page metadata with layout defaults.
3. **No duplication** — Strings, URLs, and author fields are defined once in `config/` and composed at the app layer.

### Root metadata (`app/metadata.ts`)

Provides the default `Metadata` object:

- Title default and `%s | ASK18 Innovations` template
- Description, keywords, authors, creator, publisher
- `metadataBase` for relative URL resolution
- Robots directives
- `applicationName` and `category`
- Open Graph and Twitter defaults (site-wide, no page-specific values yet)

### Future page metadata

```typescript
import { createPageMetadata } from "@/lib/seo";
import { routes } from "@/config/routes";

export const metadata = createPageMetadata({
  title: "About",
  path: routes.company.about,
});
```

`createPageMetadata` merges overrides with `seoConfig` and sets canonical Open Graph URLs via `resolveAbsoluteUrl`.

## Sitemap Generation

**File:** `app/sitemap.ts`

Next.js serves `/sitemap.xml` automatically from this convention file.

**Route registry:** `lib/seo/sitemap-routes.ts`

```typescript
export const sitemapRoutes = [routes.home];
```

To index a new page, add its path from `@/config/routes`:

```typescript
export const sitemapRoutes = [
  routes.home,
  routes.company.about,
  routes.products.index,
] as const satisfies readonly RoutePath[];
```

URLs are built with `resolveAbsoluteUrl()` — never hardcode the domain. Priority and change frequency are assigned in `app/sitemap.ts`.

## Robots Generation

**File:** `app/robots.ts`

Generates `/robots.txt` from `seoConfig.robots`:

- `allow` or `disallow` based on `index` / `follow` flags
- `sitemap` pointing to `{siteUrl}/sitemap.xml`
- `host` from `siteConfig.url`

Update crawl policy in `config/seo.ts` only — not in `robots.ts`.

## Canonical URL Strategy

- **Base URL:** `siteConfig.url` (overridable via `NEXT_PUBLIC_SITE_URL`).
- **Resolution:** `resolveAbsoluteUrl(path)` in `lib/seo/urls.ts` builds absolute URLs from route paths.
- **Root layout:** `metadataBase` in `app/metadata.ts` ensures relative paths in metadata resolve correctly.
- **Future pages:** `createPageMetadata({ path })` sets `alternates.canonical` and Open Graph `url` for the given route.
- **Rule:** Import paths from `@/config/routes`; never embed path or domain strings in pages.

## Open Graph Strategy

Default Open Graph configuration lives in `config/seo.ts` and is applied site-wide in `app/metadata.ts`:

| Field | Source |
|-------|--------|
| `type` | `seoConfig.openGraph.type` (`website`) |
| `locale` | `siteConfig.locale` |
| `siteName` | `siteConfig.name` |
| `url` | `siteConfig.url` (home); per-page via `createPageMetadata` |
| `title` / `description` | `seoConfig` defaults; overridable per page |

**Default OG image (future):** Add `public/og-image.png` (1200×630) and uncomment `openGraph.images` in `app/metadata.ts`. Page-specific images can be passed through `createPageMetadata` when that milestone begins.

## Twitter Metadata Strategy

Centralized defaults in `app/metadata.ts`:

- `card`: `summary_large_image` (from `seoConfig.twitter`)
- `title`, `description`: site defaults; inherited by pages unless overridden
- `creator`: `seoConfig.creator`

Twitter image tags will align with Open Graph images once brand assets are added.

## Favicon Strategy

Assets are not yet committed. When brand files are ready, use Next.js App Router conventions:

| Asset | Location | Purpose |
|-------|----------|---------|
| Favicon | `app/favicon.ico` | Browser tab icon (auto-served) |
| App icon | `app/icon.png` | 32×32 PNG |
| Apple touch icon | `app/apple-icon.png` | iOS home screen |
| Optional | `metadata.icons` in `app/metadata.ts` | Explicit icon manifest |

See the comment block at the top of `app/metadata.ts` for implementation notes.

## Future Structured Data Strategy

Structured data (JSON-LD) is not yet implemented. Planned approach:

1. **Organization schema** — name, url, logo, `sameAs` social links from `config/site.ts`
2. **WebSite schema** — on the homepage with `url` from `siteConfig`
3. **BreadcrumbList** — per inner page using `config/routes` and `config/navigation`
4. **Implementation location** — `lib/seo/structured-data.ts` helpers consumed by page layouts or route segments
5. **No inline JSON-LD in components** — generate from configuration to prevent drift

## Checklist

- [x] Default metadata (`app/metadata.ts`)
- [x] Sitemap (`app/sitemap.ts`)
- [x] Robots (`app/robots.ts`)
- [x] Open Graph defaults
- [x] Twitter defaults
- [ ] Default OG image asset
- [ ] Favicon and app icon assets
- [ ] JSON-LD structured data
- [ ] Per-page OG images for major routes

## Content

Long-form copy lives under `content/`. Use clear headings and descriptive link text. Structural SEO values (titles, paths, descriptions) always come from `config/` and `lib/seo/`.
