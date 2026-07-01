import {
  footerNavigation,
  primaryNavigation,
} from "@/config/navigation";

import { NavigationLink } from "./NavigationLink";

/**
 * Footer navigation driven by centralized configuration.
 * Renders primary and legal link groups from `config/navigation.ts`.
 */
export function FooterNavigation() {
  return (
    <nav aria-label="Footer">
      <div
        className="flex flex-col sm:flex-row sm:flex-wrap"
        style={{ gap: "var(--ask18-space-2xl)" }}
      >
        <ul
          className="flex flex-wrap items-center"
          style={{ gap: "var(--ask18-space-lg)" }}
        >
          {primaryNavigation.map((item) => (
            <li key={item.href}>
              <NavigationLink {...item} />
            </li>
          ))}
        </ul>

        <ul
          className="flex flex-wrap items-center"
          style={{ gap: "var(--ask18-space-lg)" }}
        >
          {footerNavigation.map((item) => (
            <li key={item.href}>
              <NavigationLink {...item} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
