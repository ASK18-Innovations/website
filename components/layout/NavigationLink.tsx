import Link from "next/link";

import type { NavItem } from "@/config/navigation";

import {
  mobileNavLinkClassName,
  navLinkActiveClassName,
  navLinkBaseClassName,
  navLinkInactiveClassName,
} from "./header-styles";

export type NavigationLinkDensity = "default" | "menu";

export type NavigationLinkProps = NavItem & {
  /** When true, applies active styles and `aria-current="page"`. */
  isActive?: boolean;
  /** Called after navigation interaction (e.g. close mobile menu). */
  onNavigate?: () => void;
  /** `menu` applies full-width touch-friendly styles for the mobile panel. */
  density?: NavigationLinkDensity;
};

/**
 * Accessible navigation link with hover, focus, and active-state support.
 */
export function NavigationLink({
  label,
  href,
  isActive = false,
  onNavigate,
  density = "default",
}: NavigationLinkProps) {
  const baseClassName =
    density === "menu" ? mobileNavLinkClassName : navLinkBaseClassName;

  return (
    <Link
      href={href}
      className={`${baseClassName} ${
        isActive ? navLinkActiveClassName : navLinkInactiveClassName
      }`}
      aria-current={isActive ? "page" : undefined}
      onClick={onNavigate}
    >
      {label}
    </Link>
  );
}
