import {
  footerNavigation,
  primaryNavigation,
} from "@/config/navigation";

import {
  footerLinkItemClassName,
  footerLinkListClassName,
  footerNavColumnClassName,
} from "./footer-styles";
import { NavigationLink } from "./NavigationLink";

/**
 * Footer navigation driven by centralized configuration.
 * Renders primary and legal link groups from `config/navigation.ts`.
 */
export function FooterNavigation() {
  return (
    <nav aria-label="Footer" className={footerNavColumnClassName}>
      <ul className={footerLinkListClassName}>
        {primaryNavigation.map((item) => (
          <li key={item.href} className={footerLinkItemClassName}>
            <NavigationLink {...item} />
          </li>
        ))}
      </ul>

      <ul className={footerLinkListClassName}>
        {footerNavigation.map((item) => (
          <li key={item.href} className={footerLinkItemClassName}>
            <NavigationLink {...item} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
