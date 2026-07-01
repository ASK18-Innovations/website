# Deployment

Placeholder documentation for deploying the ASK18 Innovations website.

## Build

```bash
npm install
npm run build
npm run start
```

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Recommended | Canonical site URL for SEO and absolute links |

Set `NEXT_PUBLIC_SITE_URL` in production (e.g. `https://ask18innovations.com`). Defaults to that URL when unset.

## Hosting

The app targets [Vercel](https://vercel.com) or any Node.js host that supports Next.js 16.

### Vercel (recommended)

1. Connect the repository to Vercel.
2. Set `NEXT_PUBLIC_SITE_URL` to the production domain.
3. Deploy; preview deployments use branch URLs automatically.

## Pre-deploy Checklist

- [ ] `npm run lint` passes
- [ ] `npm run build` passes
- [ ] `NEXT_PUBLIC_SITE_URL` is set for production
- [ ] Legal and company content is reviewed
