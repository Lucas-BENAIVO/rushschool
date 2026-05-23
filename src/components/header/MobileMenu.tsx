"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { CloseIcon } from "@/components/icons/CloseIcon";
import { MenuIcon } from "@/components/icons/MenuIcon";
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
        className={`relative z-[70] inline-flex h-10 w-10 items-center justify-center text-[var(--kba-charcoal)] transition-colors hover:text-[var(--kba-primary)] lg:hidden ${
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
            className="mobile-menu-overlay fixed inset-0 z-[55] bg-black/50 lg:hidden"
            aria-label="Fermer le menu"
            onClick={close}
          />

          <aside
            id="mobile-nav-panel"
            className="mobile-menu-drawer fixed inset-y-0 left-0 z-[60] flex w-[min(85vw,320px)] flex-col bg-white lg:hidden"
            aria-label="Navigation mobile"
          >
            <div className="flex h-14 shrink-0 items-center justify-between border-b border-[var(--kba-primary)]/15 px-6">
              <span className="font-serif text-xl font-medium text-[var(--kba-charcoal)]">
                Menu
              </span>
              <button
                type="button"
                className="inline-flex items-center justify-center text-[var(--kba-charcoal)]"
                aria-label="Fermer le menu"
                onClick={close}
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-6 pb-8">
              <ul className="divide-y divide-[var(--kba-primary)]/12">
                {NAV_ITEMS.map((item) => {
                  const active = isNavItemActive(pathname, item.href);

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`relative flex min-h-[52px] items-center justify-between py-3 text-[13px] tracking-wide transition-colors ${
                          active
                            ? "font-semibold text-[var(--kba-primary)] before:absolute before:inset-y-3 before:-left-6 before:w-[2px] before:rounded-full before:bg-[var(--kba-primary)] before:content-['']"
                            : "font-medium text-[var(--kba-charcoal)] hover:text-[var(--kba-primary)]"
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
          </aside>
        </>
      ) : null}
    </>
  );
}
