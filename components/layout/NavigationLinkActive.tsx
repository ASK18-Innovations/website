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

/**
 * Client wrapper that resolves the active route for navigation links.
 */
export function NavigationLinkActive(props: NavItem) {
  const pathname = usePathname();

  return (
    <NavigationLink {...props} isActive={isActivePath(pathname, props.href)} />
  );
}
