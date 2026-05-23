"use client";

import Link from "next/link";
import { BagIcon } from "@/components/icons/BagIcon";
import { useCart } from "@/context/CartContext";
import { ROUTES } from "@/lib/routes";

export function CartLink() {
  const { itemCount, bumpSignal, isReady } = useCart();
  const showBump = bumpSignal > 0;

  const displayCount = isReady ? itemCount : 0;
  const label =
    displayCount === 0
      ? "Panier, vide"
      : displayCount === 1
        ? "Panier, 1 article"
        : `Panier, ${displayCount} articles`;

  return (
    <Link
      key={bumpSignal}
      href={ROUTES.panier}
      className={`relative text-[var(--kba-charcoal)] transition-colors hover:text-[var(--kba-primary)] ${
        showBump ? "cart-link-bump" : ""
      }`}
      aria-label={label}
    >
      <BagIcon />
      <span
        className={`absolute -right-2 -top-2 flex h-[18px] min-w-[18px] items-center justify-center rounded-full px-1 text-[10px] font-bold leading-none text-white transition-transform ${
          showBump ? "cart-badge-pop" : ""
        }`}
        style={{ backgroundColor: "var(--kba-badge)" }}
        aria-hidden
      >
        {displayCount}
      </span>
    </Link>
  );
}
