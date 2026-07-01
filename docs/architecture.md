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
- Full page-level `Metadata` assembly is deferred; use `lib/seo` building blocks when that milestone begins.

## Conventions

- Import shared modules via the `@/` path alias (maps to the repository root).
- Design tokens live in `styles/` and are documented in `docs/design-system.md`.
- Long-form copy lives in `content/`; structural values live in `config/`.

## Current State

The homepage (`app/page.tsx`) remains the default Next.js starter page. Configuration architecture is in place; layout shell and page routes are not yet implemented.
