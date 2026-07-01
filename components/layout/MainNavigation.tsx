import { primaryNavigation } from "@/config/navigation";

import { NavigationLink } from "./NavigationLink";

/**
 * Desktop primary navigation driven by centralized configuration.
 */
export function MainNavigation() {
  return (
    <nav aria-label="Main" className="hidden md:block">
      <ul
        className="flex items-center"
        style={{ gap: "var(--ask18-space-xl)" }}
      >
        {primaryNavigation.map((item) => (
          <li key={item.href}>
            <NavigationLink {...item} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
