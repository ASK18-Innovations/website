import { primaryNavigation } from "@/config/navigation";

import { desktopNavListClassName } from "./header-styles";
import { NavigationLinkActive } from "./NavigationLinkActive";

/**
 * Desktop primary navigation driven by centralized configuration.
 */
export function MainNavigation() {
  return (
    <nav aria-label="Main" className="hidden md:block">
      <ul className={desktopNavListClassName}>
        {primaryNavigation.map((item) => (
          <li key={item.href}>
            <NavigationLinkActive {...item} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
