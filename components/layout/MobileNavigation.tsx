import { primaryNavigation } from "@/config/navigation";

import {
  desktopNavListClassName,
  mobileMenuButtonClassName,
} from "./header-styles";
import { NavigationLinkActive } from "./NavigationLinkActive";

/**
 * Mobile navigation — compact menu control with accessible link targets.
 * Drawer interaction is deferred to a later milestone.
 */
export function MobileNavigation() {
  return (
    <div className="flex items-center gap-ask18-sm md:hidden">
      <nav aria-label="Mobile primary" className="sr-only">
        <ul className={desktopNavListClassName}>
          {primaryNavigation.map((item) => (
            <li key={item.href}>
              <NavigationLinkActive {...item} />
            </li>
          ))}
        </ul>
      </nav>

      <button
        type="button"
        aria-label="Open menu"
        aria-expanded="false"
        aria-controls="mobile-navigation-menu"
        className={mobileMenuButtonClassName}
      >
        Menu
      </button>

      <div id="mobile-navigation-menu" aria-hidden="true" className="sr-only">
        <ul>
          {primaryNavigation.map((item) => (
            <li key={item.href}>{item.label}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
