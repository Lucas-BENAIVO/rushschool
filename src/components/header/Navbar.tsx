import { HeaderActions } from "@/components/header/HeaderActions";
import { Logo } from "@/components/header/Logo";
import { NavMenu } from "@/components/header/NavMenu";
import { MenuIcon } from "@/components/icons/MenuIcon";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/[0.06] bg-white shadow-[0_1px_0_rgba(0,0,0,0.04)]">
      <div className="mx-auto flex h-[var(--kba-nav-height)] max-w-[var(--kba-container-max)] items-center justify-between gap-4 px-5 sm:gap-6 sm:px-8">
        <Logo />

        <div className="hidden flex-1 items-center justify-center lg:flex">
          <NavMenu />
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center text-[var(--kba-charcoal)] transition-colors hover:text-[var(--kba-primary)] lg:hidden"
            aria-label="Ouvrir le menu"
          >
            <MenuIcon />
          </button>
          <HeaderActions />
        </div>
      </div>
    </header>
  );
}
