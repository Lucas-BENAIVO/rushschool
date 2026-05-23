"use client";

import Image from "next/image";
import Link from "next/link";
import { AddToCartIconButton } from "@/components/cart/AddToCartIconButton";
import type { CartLineInput } from "@/lib/cart";
import type { ImageSource } from "@/types/images";

type ShopProductCardProps = {
  title: string;
  subtitle: string;
  price: string;
  href: string;
  imageFile: string;
  imageSrc?: ImageSource;
  cartItem: CartLineInput;
  priority?: boolean;
};

export function ShopProductCard({
  title,
  subtitle,
  price,
  href,
  imageFile,
  imageSrc,
  cartItem,
  priority = false,
}: ShopProductCardProps) {
  return (
    <article className="flex h-full w-full flex-col overflow-hidden rounded-xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
      <div
        className={`relative aspect-[4/3] w-full overflow-hidden ${
          imageSrc
            ? "bg-white"
            : "bg-gradient-to-br from-[#f3e4e2] to-[#e8d4d2]"
        }`}
      >
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={title}
            fill
            priority={priority}
            className="object-cover object-center"
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 280px"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center px-2 text-center text-[10px] text-[var(--kba-muted)]">
            {imageFile}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-1 p-3">
        <h3 className="line-clamp-3 min-h-[3.25rem] text-[13px] font-semibold leading-snug text-[var(--kba-charcoal)]">
          <Link
            href={href}
            className="transition-colors hover:text-[var(--kba-primary)]"
          >
            {title}
          </Link>
        </h3>
        <p className="text-[10px] uppercase tracking-wide text-[var(--kba-muted)]">
          {subtitle}
        </p>
        <div className="mt-auto flex items-end justify-between pt-2">
          <p className="text-base font-bold text-[var(--kba-charcoal)]">{price}</p>
          <AddToCartIconButton
            item={cartItem}
            label={`Ajouter ${title} au panier`}
          />
        </div>
      </div>
    </article>
  );
}
