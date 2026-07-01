import { routes } from "./routes";

export type NavItem = {
  label: string;
  href: string;
};

export const primaryNavigation: NavItem[] = [
  { label: "About", href: routes.company.about },
  { label: "Products", href: routes.products.index },
  { label: "Careers", href: routes.company.careers },
  { label: "Contact", href: routes.company.contact },
];

export const footerNavigation: NavItem[] = [
  { label: "Privacy Policy", href: routes.legal.privacy },
  { label: "Terms of Service", href: routes.legal.terms },
];
