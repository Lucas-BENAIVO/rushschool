"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { HeaderButton } from "@/components/header/HeaderButton";
import { BagIcon } from "@/components/icons/BagIcon";
import { CloseIcon } from "@/components/icons/CloseIcon";
import { MenuIcon } from "@/components/icons/MenuIcon";
import { SearchIcon } from "@/components/icons/SearchIcon";
import { ChevronDownIcon } from "@/components/icons/ChevronDownIcon";
import { NAV_ITEMS } from "@/lib/nav-items";
import { ROUTES } from "@/lib/routes";

function isNavItemActive(pathname: string, href: string) {
  if (href === ROUTES.home) return pathname === href;
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    close();
  }, [pathname, close]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, close]);

  return (
    <>
      <button
        type="button"
        className={`relative z-[70] inline-flex h-10 w-10 items-center justify-center rounded-lg border border-transparent text-[var(--kba-charcoal)] transition-all hover:border-black/[0.08] hover:bg-[var(--kba-hero-bg)] hover:text-[var(--kba-primary)] lg:hidden ${
          isOpen ? "pointer-events-none invisible" : ""
        }`}
        aria-label="Ouvrir le menu"
        aria-expanded={isOpen}
        aria-controls="mobile-nav-panel"
        onClick={() => setIsOpen(true)}
      >
        <MenuIcon />
      </button>

      {isOpen ? (
        <>
          <button
            type="button"
            className="mobile-menu-overlay fixed inset-0 z-[55] bg-black/45 backdrop-blur-[2px] lg:hidden"
            aria-label="Fermer le menu"
            onClick={close}
          />

          <aside
            id="mobile-nav-panel"
            className="mobile-menu-drawer fixed inset-y-0 right-0 z-[60] flex w-[min(88vw,300px)] flex-col bg-[var(--kba-hero-bg)] shadow-[-8px_0_32px_rgba(0,0,0,0.12)] lg:hidden"
            aria-label="Navigation mobile"
          >
            <div className="flex items-center justify-between gap-4 border-b border-black/[0.06] px-5 py-4">
              <p className="font-serif text-lg font-medium leading-none text-[var(--kba-charcoal)]">
                Menu
              </p>
              <button
                type="button"
                className="inline-flex shrink-0 items-center justify-center p-0.5 text-[var(--kba-charcoal)]"
                aria-label="Fermer le menu"
                onClick={close}
              >
                <CloseIcon className="h-[22px] w-[22px]" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-3 py-3">
              <ul className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => {
                  const active = isNavItemActive(pathname, item.href);

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`flex min-h-[48px] touch-manipulation items-center justify-between rounded-xl px-4 py-3 text-[15px] font-medium transition-colors active:scale-[0.99] ${
                          active
                            ? "bg-white text-[var(--kba-primary)] shadow-sm ring-1 ring-[var(--kba-primary)]/20"
                            : "text-[var(--kba-charcoal)] hover:bg-white/70 hover:text-[var(--kba-primary)]"
                        }`}
                        onClick={close}
                        aria-current={active ? "page" : undefined}
                      >
                        <span>{item.label}</span>
                        {"hasDropdown" in item && item.hasDropdown ? (
                          <ChevronDownIcon className="text-[var(--kba-muted)]" />
                        ) : null}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="space-y-3 border-t border-[var(--kba-primary)]/15 px-5 py-4">
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href={ROUTES.recherche}
                  className="flex min-h-[44px] touch-manipulation items-center justify-center gap-2 rounded-xl border border-black/[0.06] bg-white px-3 text-[13px] font-medium text-[var(--kba-charcoal)] transition-colors hover:border-[var(--kba-primary)]/25 hover:text-[var(--kba-primary)]"
                  onClick={close}
                >
                  <SearchIcon />
                  Rechercher
                </Link>
                <Link
                  href={ROUTES.panier}
                  className="flex min-h-[44px] touch-manipulation items-center justify-center gap-2 rounded-xl border border-black/[0.06] bg-white px-3 text-[13px] font-medium text-[var(--kba-charcoal)] transition-colors hover:border-[var(--kba-primary)]/25 hover:text-[var(--kba-primary)]"
                  onClick={close}
                >
                  <BagIcon />
                  Panier
                </Link>
              </div>

              <HeaderButton
                href={ROUTES.reserverAppel}
                label="Réserver un appel"
                className="!flex h-11 w-full justify-center text-[14px]"
              />
            </div>
          </aside>
        </>
      ) : null}
    </>
  );
}
