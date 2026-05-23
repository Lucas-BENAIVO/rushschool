"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useCart } from "@/context/CartContext";
import {
  formatPriceEuro,
  getCartSubtotal,
} from "@/lib/cart";
import {
  CART_FREE_SHIPPING_THRESHOLD,
  CART_PAGE_COPY,
} from "@/lib/cart-page-data";

export function CartSummaryPanel() {
  const { items } = useCart();
  const [promoCode, setPromoCode] = useState("");

  const subtotal = useMemo(() => getCartSubtotal(items), [items]);
  const shipping =
    subtotal >= CART_FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : 5.9;
  const total = subtotal + shipping;

  return (
    <aside
      className="flex w-full flex-col border-t border-[var(--kba-charcoal)]/8 px-5 pb-10 pt-12 sm:px-8 sm:pt-14 lg:w-[min(100%,420px)] lg:shrink-0 lg:border-l lg:border-t-0 lg:px-10 lg:pb-12 lg:pt-[5.5rem] xl:pt-24"
      style={{ backgroundColor: "var(--kba-why-us-bg)" }}
    >
      <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--kba-charcoal)]">
        {CART_PAGE_COPY.summaryTitle}
      </h2>

      <dl className="mt-8 flex flex-col gap-4 border-b border-[var(--kba-charcoal)]/10 pb-6">
        <div className="flex items-center justify-between gap-4 text-[14px]">
          <dt className="text-[var(--kba-muted)]">{CART_PAGE_COPY.subtotalLabel}</dt>
          <dd className="font-medium text-[var(--kba-charcoal)]">
            {formatPriceEuro(subtotal)}
          </dd>
        </div>
        <div className="flex items-center justify-between gap-4 text-[14px]">
          <dt className="text-[var(--kba-muted)]">{CART_PAGE_COPY.shippingLabel}</dt>
          <dd className="font-medium text-[var(--kba-charcoal)]">
            {shipping === 0 ? CART_PAGE_COPY.shippingFree : formatPriceEuro(shipping)}
          </dd>
        </div>
        <div className="flex items-center justify-between gap-4 text-[14px]">
          <dt className="text-[var(--kba-muted)]">{CART_PAGE_COPY.taxLabel}</dt>
          <dd className="font-medium text-[var(--kba-charcoal)]">—</dd>
        </div>
      </dl>

      <div className="mt-5 flex items-center justify-between gap-4 border-b border-[var(--kba-charcoal)]/10 pb-6">
        <label
          htmlFor="cart-promo"
          className="text-[13px] font-medium text-[var(--kba-charcoal)]"
        >
          {CART_PAGE_COPY.promoLabel}
        </label>
        <input
          id="cart-promo"
          type="text"
          value={promoCode}
          onChange={(event) => setPromoCode(event.target.value)}
          placeholder={CART_PAGE_COPY.promoPlaceholder}
          className="w-[min(100%,160px)] border-0 border-b border-[var(--kba-charcoal)]/20 bg-transparent pb-1 text-right text-[13px] text-[var(--kba-charcoal)] outline-none placeholder:text-[var(--kba-muted)]/50 focus:border-[var(--kba-primary)]"
        />
      </div>

      <div className="mt-6 flex items-end justify-between gap-4">
        <span className="text-[13px] font-semibold uppercase tracking-[0.12em] text-[var(--kba-charcoal)]">
          {CART_PAGE_COPY.totalLabel}
        </span>
        <span className="font-serif text-2xl font-medium text-[var(--kba-charcoal)] sm:text-3xl">
          {formatPriceEuro(total)}
        </span>
      </div>

      <Link
        href={CART_PAGE_COPY.checkoutHref}
        className="mt-8 flex h-12 w-full items-center justify-center bg-[var(--kba-charcoal)] text-[12px] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-black"
      >
        {CART_PAGE_COPY.checkoutLabel}
      </Link>

      <Link
        href={CART_PAGE_COPY.backHref}
        className="mt-4 text-center text-[13px] font-medium text-[var(--kba-muted)] transition-colors hover:text-[var(--kba-primary)]"
      >
        {CART_PAGE_COPY.continueShopping}
      </Link>
    </aside>
  );
}
