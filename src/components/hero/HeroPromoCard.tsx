import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons/ArrowRightIcon";
import { HERO_PROMO_CARD } from "@/lib/hero-data";

type HeroPromoCardProps = {
  /** Miniature optionnelle — ex. /images/hero/promo-thumb.jpg */
  imageSrc?: string;
};

export function HeroPromoCard({ imageSrc }: HeroPromoCardProps) {
  const { title, subtitle, price, href, imageAlt } = HERO_PROMO_CARD;

  return (
    <Link
      href={href}
      className="absolute bottom-4 left-4 right-4 z-20 flex items-center gap-3 rounded-xl border border-white/60 bg-white/85 p-3 shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-md transition-shadow hover:shadow-[0_12px_36px_rgba(0,0,0,0.12)] sm:left-auto sm:right-6 sm:max-w-[280px]"
    >
      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-gradient-to-br from-[#f3e4e2] to-[#e8d4d2]">
        {imageSrc ? (
          <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-[9px] font-medium uppercase tracking-wide text-[var(--kba-muted)]">
            Photo
          </div>
        )}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[var(--kba-muted)]">
          {title}
        </p>
        <p className="mt-0.5 text-[11px] font-medium text-[var(--kba-charcoal)]">
          {subtitle}
        </p>
        <p className="mt-1 font-serif text-xl font-semibold text-[var(--kba-charcoal)]">
          {price}
        </p>
      </div>
      <ArrowRightIcon className="shrink-0 text-[var(--kba-charcoal)]" />
    </Link>
  );
}
