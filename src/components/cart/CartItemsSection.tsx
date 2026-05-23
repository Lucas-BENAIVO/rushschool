"use client";

import { CartLineItem } from "@/components/cart/CartLineItem";
import { useCart } from "@/context/CartContext";
import { getCartItemCount } from "@/lib/cart";
import { CART_PAGE_COPY } from "@/lib/cart-page-data";
import { BOUTIQUE_IMAGES } from "@/lib/boutique-images";

function itemCountLabel(count: number) {
  if (count === 0) {
    return "0 article";
  }

  if (count === 1) {
    return "1 article";
  }

  return `${count} articles`;
}

export function CartItemsSection() {
  const { items, updateQuantity, removeItem } = useCart();
  const count = getCartItemCount(items);

  return (
    <section className="flex flex-1 flex-col">
      <div className="flex flex-wrap items-end justify-between gap-3 border-b border-[var(--kba-charcoal)]/8 pb-6 pt-8 sm:pt-10">
        <h1 className="font-serif text-3xl font-medium tracking-tight text-[var(--kba-charcoal)] sm:text-4xl lg:text-[2.5rem]">
          {CART_PAGE_COPY.title}
        </h1>
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--kba-muted)]">
          {itemCountLabel(count)}
        </p>
      </div>

      <div className="hidden border-b border-[var(--kba-charcoal)]/8 py-3 md:grid md:grid-cols-[minmax(0,1fr)_140px_100px_48px] md:gap-6 lg:grid-cols-[minmax(0,1fr)_160px_110px_48px]">
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--kba-muted)]">
          Article
        </span>
        <span className="text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--kba-muted)]">
          Quantité
        </span>
        <span className="text-right text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--kba-muted)]">
          Prix
        </span>
        <span className="sr-only">Retirer</span>
      </div>

      <ul>
        {items.map((item) => (
          <CartLineItem
            key={item.productId}
            item={item}
            imageSrc={BOUTIQUE_IMAGES[item.productId]}
            onUpdateQuantity={(quantity) => updateQuantity(item.productId, quantity)}
            onRemove={() => removeItem(item.productId)}
          />
        ))}
      </ul>

      <p className="mt-6 text-[12px] text-[var(--kba-muted)] sm:text-[13px]">
        {CART_PAGE_COPY.shippingNote}
      </p>
    </section>
  );
}
