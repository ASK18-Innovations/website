# Architecture

This document describes the repository layout for the ASK18 Innovations corporate website.

## Overview

The project is a [Next.js](https://nextjs.org) App Router application. Application routes live under `app/`. Shared code, configuration, and content are organized at the repository root for clarity and reuse.

## Directory Structure

```
app/              Next.js routes, layouts, and page entry points
components/       React UI organized by responsibility
  brand/          Logos, wordmarks, and brand-specific assets
  layout/         Shell components (header, footer, page wrappers)
  primitives/     Low-level building blocks
  sections/       Page-level content sections
  typography/     Text components and heading styles
  ui/             Interactive UI elements
config/           Site-wide configuration (single source of truth)
content/          Markdown or structured content by domain
  company/        About, team, careers copy
  products/       Product descriptions and metadata
  legal/          Privacy, terms, and compliance content
docs/             Internal documentation
lib/              Shared utilities and helpers
  constants/      Re-exports of centralized configuration
  seo/            SEO helper utilities (building blocks only)
  utils/          General-purpose utilities
styles/           Design tokens and global CSS
tests/            Automated test suites (placeholders)
```

## Centralized Configuration

All site-wide values live in `config/`. This layer is the **single source of truth** for identity, routing, navigation, and SEO defaults.

| Module | Responsibility |
|--------|----------------|
| `config/site.ts` | Company name, tagline, URL, email, social links, copyright, language, locale |
| `config/routes.ts` | Every public route path |
| `config/navigation.ts` | Header and footer navigation data (labels + route references) |
| `config/seo.ts` | Default title, description, keywords, robots, Open Graph, Twitter, author metadata |
| `config/index.ts` | Barrel export for the entire configuration layer |

### Why centralized configuration exists

- **Consistency:** Company name, URLs, and contact details appear in one place — footer, metadata, and structured data cannot drift apart.
- **Maintainability:** Rebranding, domain changes, or new social profiles require a single edit.
- **Type safety:** `as const` objects with exported TypeScript types catch invalid references at compile time.
- **No magic strings:** Pages, components, and helpers import paths and labels from config rather than embedding literals.

### How future pages should consume configuration

1. **Route paths** — import from `@/config/routes` (or `@/lib/constants`):

   ```typescript
   import { routes } from "@/config/routes";
   // href={routes.company.about}
   ```

2. **Navigation data** — import from `@/config/navigation` when building header/footer components:

   ```typescript
   import { primaryNavigation } from "@/config/navigation";
   ```

3. **Site identity and contact** — import from `@/config/site`:

   ```typescript
   import { siteConfig } from "@/config/site";
   // siteConfig.name, siteConfig.email, siteConfig.social.linkedin
   ```

4. **SEO defaults** — import from `@/config/seo` for layout metadata and `@/lib/seo` for building blocks:

   ```typescript
   import { seoConfig } from "@/config/seo";
   import { resolvePageTitle, resolveAbsoluteUrl } from "@/lib/seo";
   ```

5. **Convenience re-exports** — `@/lib/constants` mirrors all config exports for components that need multiple values:

   ```typescript
   import { siteConfig, routes, primaryNavigation, seoConfig } from "@/lib/constants";
   ```

### Rules

- Never hardcode company name, email, social URLs, or route paths in pages or components.
- Navigation arrays must reference `routes` — never duplicate path strings in `navigation.ts`.
- SEO descriptions and titles must derive from `seoConfig` and `siteConfig`.
- External URLs exist only in `config/site.ts` (social links, base URL).
- Page metadata extends root defaults via `createPageMetadata()` from `@/lib/seo`.

## Application Shell

Every route is wrapped by the root layout (`app/layout.tsx`), which delegates structure to layout primitives in `components/layout/`.

### Layout hierarchy

```
html (lang from siteConfig, font variables, font-sans)
└── body (token typography, background, flex column)
    └── AppShell (flex column, skip link, future header/footer slots)
        └── {page content}
```

Future pages compose their content with optional layout primitives:

```
AppShell (in root layout — automatic)
└── PageContainer (max width + horizontal padding)
    └── MainContent (#main-content landmark)
        └── page sections
```

The starter homepage (`app/page.tsx`) is unchanged and manages its own `<main>` until it is rebuilt. New pages should use `MainContent` once and avoid nested `<main>` elements.

### Components

| Component | Responsibility |
|-----------|----------------|
| `AppShell` | Top-level wrapper; skip-to-content link; future `SiteHeader` / `SiteFooter` mount points |
| `PageContainer` | Token-based max width (`--ask18-container-*`) and horizontal padding |
| `MainContent` | Semantic `<main id="main-content">` landmark for accessibility |

All layout components are **Server Components** with no client-side JavaScript.

### Future Header/Footer integration

`AppShell` reserves two comment-marked slots:

1. **Before `{children}`** — site header / navigation
2. **After `{children}`** — site footer

When `SiteHeader` and `SiteFooter` are built, they import navigation from `@/config/navigation` and identity from `@/config/site`. No changes to `app/layout.tsx` are required beyond what already wraps children in `AppShell`.

### Container strategy

- **Single source of width:** Container sizes map to CSS variables in `styles/tokens.css` (`--ask18-container-sm` through `--ask18-container-content`).
- **Default page width:** `PageContainer` with `size="content"` uses `--ask18-container-content` (72rem).
- **Prose width:** `size="prose"` for long-form content (`--ask18-container-prose`, 42rem).
- **Horizontal padding:** `--ask18-container-padding-x` — never hardcode page gutters in individual pages.
- **Usage:** Import `PageContainer` and `MainContent` in route pages, not in the root layout, so special layouts (e.g. full-bleed hero) remain possible.

### Accessibility

- `html` `lang` attribute driven by `siteConfig.language`
- Skip-to-content link in `AppShell` targets `#main-content` on pages using `MainContent`
- One `<main>` landmark per page
- Focus ring styles use `--ask18-focus-ring` token

## Conventions

- Import shared modules via the `@/` path alias (maps to the repository root).
- Design tokens live in `styles/` and are documented in `docs/design-system.md`.
- Long-form copy lives in `content/`; structural values live in `config/`.

## Current State

The root layout wraps all routes in `AppShell` with centralized metadata and token-based typography. Layout primitives (`PageContainer`, `MainContent`) are ready for new pages. The starter homepage retains its existing markup until replaced.
