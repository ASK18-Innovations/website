import { HeaderContainer } from "./HeaderContainer";

/**
 * Site-wide header with sticky positioning.
 * Reserved slot for a future announcement bar above the container.
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-ask18-bg-primary">
      {/* Future: announcement bar */}
      <HeaderContainer />
    </header>
  );
}
