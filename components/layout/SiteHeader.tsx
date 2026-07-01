import { HeaderContainer } from "./HeaderContainer";

import { headerClassName } from "./header-styles";

/**
 * Site-wide header with sticky positioning and a subtle frosted surface.
 * Reserved slot for a future announcement bar above the container.
 */
export function SiteHeader() {
  return (
    <header className={headerClassName}>
      {/* Future: announcement bar */}
      <HeaderContainer />
    </header>
  );
}
