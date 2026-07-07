"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { primaryNavigation } from "@/config/navigation";

import {
  mobileMenuButtonClassName,
  mobileMenuPanelClassName,
  mobileNavListClassName,
} from "./header-styles";
import { NavigationLinkActive } from "./NavigationLinkActive";

const menuId = "mobile-navigation-menu";

function MobileNavigationMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="shrink-0 md:hidden">
      <button
        type="button"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls={menuId}
        className={mobileMenuButtonClassName}
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? "Close" : "Menu"}
      </button>

      {isOpen ? (
        <nav
          id={menuId}
          aria-label="Main"
          className={mobileMenuPanelClassName}
        >
          <ul className={mobileNavListClassName}>
            {primaryNavigation.map((item) => (
              <li key={item.href}>
                <NavigationLinkActive
                  {...item}
                  density="menu"
                  onNavigate={() => setIsOpen(false)}
                />
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </div>
  );
}

/**
 * Mobile navigation with an accessible open/close menu panel.
 */
export function MobileNavigation() {
  const pathname = usePathname();

  return <MobileNavigationMenu key={pathname} />;
}
