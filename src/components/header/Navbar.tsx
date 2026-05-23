import { HeaderActions } from "@/components/header/HeaderActions";
import { Logo } from "@/components/header/Logo";
import { MobileMenuWrapper } from "@/components/header/MobileMenuWrapper";
import { NavMenu } from "@/components/header/NavMenu";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/[0.06] bg-white shadow-[0_1px_0_rgba(0,0,0,0.04)]">
      <div className="relative mx-auto flex h-[var(--kba-nav-height)] max-w-[var(--kba-container-max)] items-center px-5 sm:px-8">
        <div className="z-10 shrink-0 lg:hidden">
          <MobileMenuWrapper />
        </div>

        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:hidden">
          <div className="pointer-events-auto">
            <Logo />
          </div>
        </div>

        <div className="hidden shrink-0 lg:block">
          <Logo />
        </div>

        <div className="hidden flex-1 items-center justify-center lg:flex">
          <NavMenu />
        </div>

        <div className="z-10 ml-auto flex shrink-0 items-center gap-2 sm:gap-3">
          <HeaderActions />
        </div>
      </div>
    </header>
  );
}
