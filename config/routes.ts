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
  legal: {
    privacy: "/legal/privacy",
    terms: "/legal/terms",
  },
} as const;

export type Routes = typeof routes;
