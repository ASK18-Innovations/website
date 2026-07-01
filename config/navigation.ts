import { routes } from "./routes";

/**
 * Navigation data configuration.
 * Consumed by future layout components — no UI logic belongs here.
 */
export type NavItem = {
  label: string;
  href: RoutePathFromNav;
};

/** Paths referenced by navigation items. */
type RoutePathFromNav =
  | typeof routes.home
  | typeof routes.company.about
  | typeof routes.products.index
  | typeof routes.services.index
  | typeof routes.company.contact
  | typeof routes.legal.privacy
  | typeof routes.legal.terms;

export const navigationConfig = {
  primary: [
    { label: "Home", href: routes.home },
    { label: "About", href: routes.company.about },
    { label: "Products", href: routes.products.index },
    { label: "Services", href: routes.services.index },
    { label: "Contact", href: routes.company.contact },
  ],
  footer: [
    { label: "Privacy Policy", href: routes.legal.privacy },
    { label: "Terms of Service", href: routes.legal.terms },
  ],
} as const satisfies {
  primary: readonly NavItem[];
  footer: readonly NavItem[];
};

export type NavigationConfig = typeof navigationConfig;

/** Primary header navigation items. */
export const primaryNavigation = navigationConfig.primary;

/** Footer legal navigation items. */
export const footerNavigation = navigationConfig.footer;
