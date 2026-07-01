import Link from "next/link";

import type { NavItem } from "@/config/navigation";
import { Text } from "@/components/typography";

export type NavigationLinkProps = NavItem & {
  /** When true, applies active styles and `aria-current="page"`. */
  isActive?: boolean;
};

const linkClassName =
  "inline-flex rounded-ask18-sm px-ask18-xs py-ask18-xs focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ask18-focus-ring";

/**
 * Accessible navigation link with active-state support.
 */
export function NavigationLink({
  label,
  href,
  isActive = false,
}: NavigationLinkProps) {
  return (
    <Link
      href={href}
      className={linkClassName}
      aria-current={isActive ? "page" : undefined}
    >
      <Text
        as="span"
        variant={isActive ? "default" : "muted"}
        className={isActive ? "font-medium" : undefined}
      >
        {label}
      </Text>
    </Link>
  );
}
