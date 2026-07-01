import Link from "next/link";

import { routes } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { BrandName } from "@/components/brand";

import { brandLinkClassName } from "./header-styles";

/**
 * Header brand area — text-only today, structured for a future official logo.
 *
 * Future integration:
 * ```tsx
 * <BrandLogo aria-hidden="true" />
 * <BrandName size={6} />
 * ```
 */
export function HeaderBrand() {
  return (
    <Link
      href={routes.home}
      className={brandLinkClassName}
      aria-label={`${siteConfig.name} home`}
    >
      <span className="flex items-center gap-ask18-sm">
        {/* Future: <BrandLogo /> */}
        <BrandName size={6} />
      </span>
    </Link>
  );
}
