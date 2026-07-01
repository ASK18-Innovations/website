import { Container } from "@/components/primitives";

import { HeaderBrand } from "./HeaderBrand";
import { headerInnerClassName } from "./header-styles";
import { MainNavigation } from "./MainNavigation";
import { MobileNavigation } from "./MobileNavigation";

/**
 * Aligns brand and navigation within the site header.
 */
export function HeaderContainer() {
  return (
    <Container>
      <div className={headerInnerClassName}>
        <HeaderBrand />
        <MainNavigation />
        <MobileNavigation />
      </div>
    </Container>
  );
}
