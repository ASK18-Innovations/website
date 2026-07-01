import { primaryNavigation } from "@/config/navigation";
import { Text } from "@/components/typography";

/**
 * Mobile navigation placeholder — menu button and static item list.
 * Drawer interaction and animations are deferred to a later milestone.
 */
export function MobileNavigation() {
  return (
    <nav aria-label="Mobile" className="md:hidden">
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded="false"
        aria-controls="mobile-navigation-menu"
        className="rounded-ask18-sm px-ask18-sm py-ask18-xs focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ask18-focus-ring"
        style={{
          background: "transparent",
          border: "none",
          cursor: "default",
        }}
      >
        <Text as="span" variant="default">
          Menu
        </Text>
      </button>

      <div id="mobile-navigation-menu" aria-hidden="true" className="sr-only">
        <ul>
          {primaryNavigation.map((item) => (
            <li key={item.href}>
              <Text as="span">{item.label}</Text>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
