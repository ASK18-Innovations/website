# ASK18 Innovations — Corporate Website

Official corporate website for [ASK18 Innovations](https://ask18innovations.com).

## Purpose

This repository contains the production Next.js application for the ASK18 Innovations public web presence. It provides a centralized configuration layer, design system foundations, metadata architecture, and reusable layout components. Page content and marketing sections are built incrementally on top of this foundation.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| Language | TypeScript |
| UI | React 19 (Server Components by default) |
| Styling | Tailwind CSS 4, CSS design tokens |
| Fonts | Geist Sans & Geist Mono via `next/font` |
| Linting | ESLint (`eslint-config-next`) |

## Development

### Prerequisites

- Node.js 20+
- npm

### Commands

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev

# Production build
npm run build

# Run production server locally
npm run start

# Lint
npm run lint
```

### Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Recommended | Canonical site URL for SEO and absolute links |

Defaults to `https://ask18innovations.com` when unset. See `docs/deployment.md` for production setup.

## Branch Workflow

1. Create a feature branch from the main integration branch.
2. Keep changes focused — configuration, components, or pages per milestone.
3. Run `npm run lint` and `npm run build` before opening a pull request.
4. Use preview deployments to verify changes before merging to production.

Do not commit secrets, placeholder logos, or framework starter assets.

## Deployment

The application targets [Vercel](https://vercel.com) or any Node.js host that supports Next.js 16.

1. Connect the repository to the hosting provider.
2. Set `NEXT_PUBLIC_SITE_URL` to the production domain.
3. Deploy from the production branch.

Full checklist and hosting notes: [`docs/deployment.md`](docs/deployment.md).

## Architecture Overview

```
app/           Next.js routes, metadata, robots, sitemap
components/    UI organized by responsibility
  brand/       Text-based brand identity (logo asset deferred)
  layout/      App shell, header, navigation, page wrappers
  primitives/  Container, Section, Stack, Grid, Divider
  typography/  Heading, Text, Lead, Caption, Code
config/        Single source of truth (site, routes, navigation, SEO)
content/       Markdown and structured copy (by domain)
docs/          Architecture, design system, SEO, deployment
lib/           Constants re-exports, SEO helpers, utilities
public/        Static assets (brand, favicons, icons, images, og)
styles/        Design tokens and typography foundations
```

### Key conventions

- **Configuration:** Import site identity, routes, and navigation from `@/config` — never hardcode company values in pages or components.
- **Metadata:** Root defaults in `app/metadata.ts`; page overrides via `createPageMetadata()` from `@/lib/seo`.
- **Layout:** All routes wrap in `AppShell` with `SiteHeader`; new pages compose `MainContent`, `Container`, and primitives.
- **Design tokens:** Colors, spacing, and typography live in `styles/` and are documented in [`docs/design-system.md`](docs/design-system.md).

Detailed architecture: [`docs/architecture.md`](docs/architecture.md).

## Documentation

| Document | Description |
|----------|-------------|
| [`docs/architecture.md`](docs/architecture.md) | Repository layout, config layer, app shell |
| [`docs/design-system.md`](docs/design-system.md) | Tokens, primitives, typography, brand components |
| [`docs/seo.md`](docs/seo.md) | Metadata flow, sitemap, robots, canonical URLs |
| [`docs/deployment.md`](docs/deployment.md) | Build, environment, hosting |

## Current State

Foundation milestones are complete: configuration, design tokens, metadata, root layout, layout primitives, typography, brand components, public asset structure, and site header. The starter homepage (`app/page.tsx`) remains until the ASK18 homepage is implemented.
