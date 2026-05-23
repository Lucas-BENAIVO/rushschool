import Link from "next/link";
import { CartLink } from "@/components/header/CartLink";
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

      <CartLink />

      <div className="hidden sm:block">
        <HeaderButton href={ROUTES.reserverAppel} label="Réserver un appel" />
      </div>
    </div>
  );
}
