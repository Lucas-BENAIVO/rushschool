"use client";

import Link from "next/link";
import { CartItemsSection } from "@/components/cart/CartItemsSection";
import { CartPageToolbar } from "@/components/cart/CartPageToolbar";
import { CartSummaryPanel } from "@/components/cart/CartSummaryPanel";
import { useCart } from "@/context/CartContext";
import { CART_PAGE_COPY } from "@/lib/cart-page-data";
import { ROUTES } from "@/lib/routes";

export function CartPageContent() {
  const { items, isReady } = useCart();

  if (!isReady) {
    return (
      <div className="min-h-[50vh] animate-pulse bg-white">
        <div className="mx-auto h-full max-w-[var(--kba-container-max)] p-8">
          <div className="h-8 w-48 rounded bg-[var(--kba-charcoal)]/5" />
          <div className="mt-10 h-64 rounded bg-[var(--kba-charcoal)]/5" />
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-[50vh] bg-white">
        <div className="mx-auto max-w-[var(--kba-container-max)] px-5 pb-8 pt-8 sm:px-8 sm:pt-10">
          <CartPageToolbar />
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <h1 className="font-serif text-3xl font-medium text-[var(--kba-charcoal)]">
              {CART_PAGE_COPY.emptyTitle}
            </h1>
            <p className="mt-3 max-w-sm text-[15px] text-[var(--kba-muted)]">
              {CART_PAGE_COPY.emptyDescription}
            </p>
            <Link
              href={ROUTES.boutique}
              className="mt-8 inline-flex h-12 items-center justify-center bg-[var(--kba-charcoal)] px-8 text-[12px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-black"
            >
              {CART_PAGE_COPY.emptyCta}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-var(--kba-nav-height)-var(--kba-banner-height))] bg-white pt-4 sm:pt-6 lg:min-h-[calc(100vh-var(--kba-nav-height))] lg:pt-8 lg:pb-10">
      <div className="mx-auto flex h-full max-w-[1400px] flex-col lg:flex-row lg:items-stretch">
        <div className="flex min-w-0 flex-1 flex-col px-5 pb-6 pt-4 sm:px-8 sm:pt-6 lg:px-10 lg:pb-10 lg:pt-6">
          <CartPageToolbar />
          <CartItemsSection />
        </div>
        <CartSummaryPanel />
      </div>
    </div>
  );
}
