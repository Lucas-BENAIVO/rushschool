"use client";

import Image from "next/image";
import Link from "next/link";
import { TrashIcon } from "@/components/icons/TrashIcon";
import { CartQuantityControl } from "@/components/cart/CartQuantityControl";
import { formatPriceEuro, getLineTotal, type CartItem } from "@/lib/cart";
import { boutiquePath } from "@/lib/routes";
import type { ImageSource } from "@/types/images";

type CartLineItemProps = {
  item: CartItem;
  imageSrc?: ImageSource;
  onUpdateQuantity: (quantity: number) => void;
  onRemove: () => void;
};

export function CartLineItem({
  item,
  imageSrc,
  onUpdateQuantity,
  onRemove,
}: CartLineItemProps) {
  const lineTotal = formatPriceEuro(getLineTotal(item));

  return (
    <li className="border-b border-[var(--kba-charcoal)]/8 py-5 last:border-b-0 md:py-6">
      {/* Mobile */}
      <div className="flex gap-4 md:hidden">
        <Link
          href={boutiquePath(item.slug)}
          className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md bg-gradient-to-br from-[#f3e4e2] to-[#e8d4d2]"
        >
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={item.title}
              fill
              className="object-cover object-center"
              sizes="80px"
            />
          ) : null}
        </Link>
        <div className="flex min-w-0 flex-1 flex-col gap-3">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <Link
                href={boutiquePath(item.slug)}
                className="font-serif text-base font-medium text-[var(--kba-charcoal)]"
              >
                {item.title}
              </Link>
              <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--kba-muted)]">
                {item.subtitle}
              </p>
            </div>
            <button
              type="button"
              onClick={onRemove}
              className="shrink-0 text-[var(--kba-muted)] transition-colors hover:text-[var(--kba-charcoal)]"
              aria-label={`Supprimer ${item.title}`}
            >
              <TrashIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="flex items-center justify-between gap-3">
            <CartQuantityControl
              quantity={item.quantity}
              onDecrease={() => onUpdateQuantity(item.quantity - 1)}
              onIncrease={() => onUpdateQuantity(item.quantity + 1)}
            />
            <p className="text-[15px] font-semibold text-[var(--kba-charcoal)]">
              {lineTotal}
            </p>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:grid md:grid-cols-[minmax(0,1fr)_160px_110px_48px] md:items-center md:gap-6">
        <div className="flex min-w-0 items-center gap-5">
          <Link
            href={boutiquePath(item.slug)}
            className="relative h-24 w-24 shrink-0 overflow-hidden rounded-md bg-gradient-to-br from-[#f3e4e2] to-[#e8d4d2]"
          >
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={item.title}
                fill
                className="object-cover object-center"
                sizes="96px"
              />
            ) : null}
          </Link>
          <div className="min-w-0">
            <Link
              href={boutiquePath(item.slug)}
              className="font-serif text-xl font-medium text-[var(--kba-charcoal)] transition-colors hover:text-[var(--kba-primary)]"
            >
              {item.title}
            </Link>
            <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--kba-muted)]">
              {item.subtitle}
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <CartQuantityControl
            quantity={item.quantity}
            onDecrease={() => onUpdateQuantity(item.quantity - 1)}
            onIncrease={() => onUpdateQuantity(item.quantity + 1)}
          />
        </div>

        <p className="text-right text-[15px] font-medium text-[var(--kba-charcoal)]">
          {lineTotal}
        </p>

        <div className="flex justify-end">
          <button
            type="button"
            onClick={onRemove}
            className="text-[var(--kba-muted)] transition-colors hover:text-[var(--kba-charcoal)]"
            aria-label={`Supprimer ${item.title}`}
          >
            <TrashIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </li>
  );
}
