import Link from "next/link";
import { AddToCartButton } from "@/components/cart/AddToCartButton";
import type { BoutiqueProduct } from "@/lib/boutique-data";
import { productToCartLine } from "@/lib/cart";
import { ROUTES } from "@/lib/routes";

type BoutiqueProductAsideProps = {
  product: BoutiqueProduct;
};

export function BoutiqueProductAside({ product }: BoutiqueProductAsideProps) {
  return (
    <aside className="flex flex-col gap-5 lg:sticky lg:top-24">
      <div className="rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_4px_24px_rgba(0,0,0,0.05)] sm:p-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--kba-muted)]">
          Prix
        </p>
        <p className="mt-2 font-serif text-3xl font-semibold text-[var(--kba-charcoal)]">
          {product.price}
        </p>
        <p className="mt-2 text-[13px] text-[var(--kba-muted)]">
          {product.subtitle}
        </p>
        <AddToCartButton item={productToCartLine(product)} />
        <p className="mt-4 text-center text-[12px] text-[var(--kba-muted)]">
          Livraison et retrait —{" "}
          <Link
            href={ROUTES.contact}
            className="font-medium text-[var(--kba-primary)] underline-offset-2 hover:underline"
          >
            nous contacter
          </Link>
        </p>
      </div>
    </aside>
  );
}
