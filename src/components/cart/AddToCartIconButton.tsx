"use client";

import { CartIcon } from "@/components/icons/CartIcon";
import { useCart } from "@/context/CartContext";
import type { CartLineInput } from "@/lib/cart";

type AddToCartIconButtonProps = {
  item: CartLineInput;
  label: string;
};

export function AddToCartIconButton({ item, label }: AddToCartIconButtonProps) {
  const { addItem } = useCart();

  return (
    <button
      type="button"
      onClick={() => addItem(item)}
      className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--kba-charcoal)]/15 text-[var(--kba-charcoal)] transition-colors hover:border-[var(--kba-primary)] hover:text-[var(--kba-primary)]"
      aria-label={label}
    >
      <CartIcon />
    </button>
  );
}
