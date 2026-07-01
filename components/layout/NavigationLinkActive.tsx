"use client";

import type { NavItem } from "@/config/navigation";
import { usePathname } from "next/navigation";

import { NavigationLink } from "./NavigationLink";

function isActivePath(pathname: string, href: NavItem["href"]): boolean {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export type NavigationLinkActiveProps = NavItem & {
  onNavigate?: () => void;
};

/**
 * Client wrapper that resolves the active route for navigation links.
 */
export function NavigationLinkActive({
  onNavigate,
  ...item
}: NavigationLinkActiveProps) {
  const pathname = usePathname();

  return (
    <NavigationLink
      {...item}
      isActive={isActivePath(pathname, item.href)}
      onNavigate={onNavigate}
    />
  );
}
