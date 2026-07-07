import Link from "next/link";

import { routes } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { BrandLogo, BrandName } from "@/components/brand";

import { brandLinkClassName } from "./header-styles";

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
      <span className="flex items-center gap-ask18-sm">
        <BrandLogo decorative />
        <BrandName size={6} />
      </span>
    </Link>
  );
}
