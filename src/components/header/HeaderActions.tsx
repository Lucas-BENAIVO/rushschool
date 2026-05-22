import Link from "next/link";
import { BagIcon } from "@/components/icons/BagIcon";
import { SearchIcon } from "@/components/icons/SearchIcon";
import { HeaderButton } from "@/components/header/HeaderButton";
import { ROUTES } from "@/lib/routes";

export function HeaderActions() {
  return (
    <div className="flex shrink-0 items-center gap-4 sm:gap-5">
      <Link
        href={ROUTES.recherche}
        className="text-[var(--kba-charcoal)] transition-colors hover:text-[var(--kba-primary)]"
        aria-label="Rechercher"
      >
        <SearchIcon />
      </Link>

      <Link
        href={ROUTES.panier}
        className="relative text-[var(--kba-charcoal)] transition-colors hover:text-[var(--kba-primary)]"
        aria-label="Panier, 0 article"
      >
        <BagIcon />
        <span
          className="absolute -right-2 -top-2 flex h-[18px] min-w-[18px] items-center justify-center rounded-full px-1 text-[10px] font-bold leading-none text-white"
          style={{ backgroundColor: "var(--kba-badge)" }}
        >
          0
        </span>
      </Link>

      <div className="hidden sm:block">
        <HeaderButton href={ROUTES.reserverAppel} label="Réserver un appel" />
      </div>
    </div>
  );
}
