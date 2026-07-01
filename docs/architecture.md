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
config/           Site-wide configuration (routes, navigation, SEO)
content/          Markdown or structured content by domain
  company/        About, team, careers copy
  products/       Product descriptions and metadata
  legal/          Privacy, terms, and compliance content
docs/             Internal documentation
lib/              Shared utilities and helpers
  constants/      Re-exports and app-level constants
  seo/            Metadata and SEO helpers
  utils/          General-purpose utilities
styles/           Design tokens and global CSS (not yet wired to app)
tests/            Automated test suites (placeholders)
```

## Conventions

- Import shared modules via the `@/` path alias (maps to the repository root).
- Keep route definitions in `config/routes.ts`; navigation arrays reference those paths.
- Page metadata should use `lib/seo/metadata.ts` helpers backed by `config/seo.ts`.
- Do not add visual components until the design system is defined in `docs/design-system.md`.

## Current State

The homepage (`app/page.tsx`) remains the default Next.js starter page. No layout shell or section components are implemented yet.
