import Link from "next/link";
import { SHOP_CONTENT } from "@/lib/showcase-data";

export function ShopViewAllButton() {
  const { ctaLabel, ctaHref } = SHOP_CONTENT;

  return (
    <div className="flex justify-center lg:justify-center">
      <Link
        href={ctaHref}
        className="inline-flex h-9 items-center justify-center rounded-lg border border-[var(--kba-charcoal)]/20 bg-white px-5 text-[12px] font-semibold text-[var(--kba-charcoal)] transition-colors hover:border-[var(--kba-primary)] hover:text-[var(--kba-primary)] sm:text-[13px]"
      >
        {ctaLabel}
      </Link>
    </div>
  );
}
