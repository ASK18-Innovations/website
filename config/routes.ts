/**
 * Central route registry for all public pages.
 * Future app routes must import paths from here — no hardcoded URL strings in pages.
 */
export const routes = {
  home: "/",
  company: {
    about: "/company/about",
    team: "/company/team",
    careers: "/company/careers",
    contact: "/company/contact",
  },
  products: {
    index: "/products",
  },
  services: {
    index: "/services",
  },
  legal: {
    privacy: "/legal/privacy",
    terms: "/legal/terms",
  },
} as const;

export type Routes = typeof routes;

/** Flattened union of every public route path. */
export type RoutePath =
  | (typeof routes)["home"]
  | (typeof routes.company)[keyof typeof routes.company]
  | (typeof routes.products)[keyof typeof routes.products]
  | (typeof routes.services)[keyof typeof routes.services]
  | (typeof routes.legal)[keyof typeof routes.legal];
