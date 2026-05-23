import Link from "next/link";
import { CloseIcon } from "@/components/icons/CloseIcon";
import { CART_PAGE_COPY } from "@/lib/cart-page-data";
import { ROUTES } from "@/lib/routes";

export function CartPageToolbar() {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-[var(--kba-charcoal)]/8 pb-5 pt-1 sm:pb-6">
      <Link
        href={CART_PAGE_COPY.backHref}
        className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.14em] text-[var(--kba-muted)] transition-colors hover:text-[var(--kba-charcoal)]"
      >
        <span aria-hidden>←</span>
        {CART_PAGE_COPY.backLabel}
      </Link>
      <Link
        href={ROUTES.boutique}
        className="text-[var(--kba-muted)] transition-colors hover:text-[var(--kba-charcoal)]"
        aria-label="Fermer le panier"
      >
        <CloseIcon />
      </Link>
    </div>
  );
}
