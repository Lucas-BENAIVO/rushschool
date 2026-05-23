"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import type { CartLineInput } from "@/lib/cart";

type AddToCartButtonProps = {
  item: CartLineInput;
  className?: string;
  children?: React.ReactNode;
};

export function AddToCartButton({
  item,
  className,
  children = "Ajouter au panier",
}: AddToCartButtonProps) {
  const { addItem } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  return (
    <button
      type="button"
      onClick={() => {
        addItem(item);
        setJustAdded(true);
        window.setTimeout(() => setJustAdded(false), 1600);
      }}
      className={
        className ??
        "mt-5 flex h-11 w-full items-center justify-center rounded-lg bg-[var(--kba-charcoal)] text-[13px] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-black"
      }
    >
      {justAdded ? "Ajouté au panier ✓" : children}
    </button>
  );
}
