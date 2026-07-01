import Link from "next/link";

import type { NavItem } from "@/config/navigation";

import {
  navLinkActiveClassName,
  navLinkBaseClassName,
  navLinkInactiveClassName,
} from "./header-styles";

export type NavigationLinkProps = NavItem & {
  /** When true, applies active styles and `aria-current="page"`. */
  isActive?: boolean;
  /** Called after navigation interaction (e.g. close mobile menu). */
  onNavigate?: () => void;
};

/**
 * Accessible navigation link with hover, focus, and active-state support.
 */
export function NavigationLink({
  label,
  href,
  isActive = false,
  onNavigate,
}: NavigationLinkProps) {
  return (
    <Link
      href={href}
      className={`${navLinkBaseClassName} ${
        isActive ? navLinkActiveClassName : navLinkInactiveClassName
      }`}
      aria-current={isActive ? "page" : undefined}
      onClick={onNavigate}
    >
      {label}
    </Link>
  );
}
