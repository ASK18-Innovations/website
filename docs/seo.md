# SEO

Placeholder documentation for search and social metadata on the ASK18 Innovations website.

## Configuration

| File | Role |
|------|------|
| `config/site.ts` | Site name, description, canonical URL, locale |
| `config/seo.ts` | Default title template, Open Graph, Twitter card defaults |
| `lib/seo/metadata.ts` | `createPageMetadata()` helper for per-page Metadata |

## Usage

Pages should export metadata via Next.js `Metadata` API:

```typescript
import { createPageMetadata } from "@/lib/seo/metadata";
import { routes } from "@/config/routes";

export const metadata = createPageMetadata({
  title: "About",
  path: routes.company.about,
});
```

Root layout metadata will be updated when the homepage is replaced.

## Checklist (Future)

- [ ] Sitemap (`app/sitemap.ts`)
- [ ] Robots (`app/robots.ts`)
- [ ] Structured data (Organization, WebSite)
- [ ] Open Graph images per major page
- [ ] Canonical URLs on all public routes

## Content

Long-form copy lives under `content/` and should use clear headings and descriptive link text for crawlability.
