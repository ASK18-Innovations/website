import Link from "next/link";

import { routes } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { BrandLockup } from "@/components/brand";
import { Container } from "@/components/primitives";

import { MainNavigation } from "./MainNavigation";
import { MobileNavigation } from "./MobileNavigation";

/**
 * Aligns brand lockup and navigation within the site header.
 */
export function HeaderContainer() {
  return (
    <Container>
      <div
        className="flex items-center justify-between"
        style={{
          paddingBlock: "var(--ask18-space-md)",
          gap: "var(--ask18-space-lg)",
        }}
      >
        <Link
          href={routes.home}
          className="rounded-ask18-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ask18-focus-ring"
          aria-label={`${siteConfig.name} home`}
        >
          <BrandLockup showTagline={false} nameSize={5} />
        </Link>

        <MainNavigation />
        <MobileNavigation />
      </div>
    </Container>
  );
}
