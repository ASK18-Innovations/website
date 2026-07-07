import Link from "next/link";

import { routes } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { BrandLogo, BrandName } from "@/components/brand";

import { brandLinkClassName, brandLockupClassName, brandNameClassName } from "./header-styles";

/**
 * Header brand area — official symbol with company name.
 */
export function HeaderBrand() {
  return (
    <Link
      href={routes.home}
      className={brandLinkClassName}
      aria-label={`${siteConfig.name} home`}
    >
      <span className={brandLockupClassName}>
        <BrandLogo decorative className="shrink-0" />
        <BrandName size={6} className={brandNameClassName} />
      </span>
    </Link>
  );
}
