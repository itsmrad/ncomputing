"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

import { NAV_ITEMS, navTriggerId } from "../config/nav-config";
import { useNavMenu } from "../hooks/use-nav-menu";
import { NavActions } from "./nav-actions";
import { NavLogo } from "./nav-logo";
import { NavMegaPanel } from "./nav-mega-panel";
import { NavMobilePanel, NavMobileToggle } from "./nav-mobile";
import { NavTrigger } from "./nav-trigger";

export function SiteNavbar() {
  const { activeId, openMenu, closeMenu, closeMenuNow } = useNavMenu();
  const [isPointerOver, setIsPointerOver] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const closeMobileMenu = () => setIsMobileOpen(false);

  const isMenuOpen = activeId !== null;
  // Stripe reveals the white card as soon as the pointer touches the bar.
  const isCardVisible = isMenuOpen || isPointerOver || isMobileOpen;

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="px-4 sm:px-6">
        <div
          className="relative mx-auto max-w-[1120px]"
          onPointerEnter={() => setIsPointerOver(true)}
          onPointerLeave={() => {
            setIsPointerOver(false);
            closeMenu();
          }}
          onKeyDown={(event) => {
            if (event.key !== "Escape") return;

            // The closed panel becomes `inert`, so focus sitting inside it
            // would be dropped on the body. Hand it back to the trigger first,
            // then close: the trigger's own onFocus reopens the menu, and the
            // close batches after it in the same event.
            if (activeId) {
              document.getElementById(navTriggerId(activeId))?.focus();
              closeMenuNow();
            }
            closeMobileMenu();
          }}
        >
          <div
            aria-hidden
            className={cn(
              "shadow-nav absolute inset-0 rounded-lg bg-white transition-opacity duration-200 ease-out",
              isCardVisible ? "opacity-100" : "opacity-0",
            )}
          />

          <div className="relative flex h-[62px] items-center justify-between px-5">
            <div className="flex h-full items-center gap-7">
              <NavLogo />
              <nav aria-label="Main" className="hidden h-full lg:flex">
                {NAV_ITEMS.map((item) => (
                  <NavTrigger
                    key={item.id}
                    item={item}
                    isOpen={activeId === item.id}
                    isDimmed={isMenuOpen && activeId !== item.id}
                    onOpen={openMenu}
                    onClose={closeMenuNow}
                  />
                ))}
              </nav>
            </div>

            <NavActions className="hidden lg:flex" />
            <NavMobileToggle
              className="-mr-2 lg:hidden"
              isOpen={isMobileOpen}
              onToggle={() => setIsMobileOpen((open) => !open)}
            />
          </div>

          <NavMegaPanel
            items={NAV_ITEMS}
            activeId={activeId}
            onPointerEnter={() => openMenu(activeId)}
            onPointerLeave={closeMenu}
          />
          <NavMobilePanel
            items={NAV_ITEMS}
            isOpen={isMobileOpen}
            onNavigate={closeMobileMenu}
            className="lg:hidden"
          />
        </div>
      </div>
    </header>
  );
}
