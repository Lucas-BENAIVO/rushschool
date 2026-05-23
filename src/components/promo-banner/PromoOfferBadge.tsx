import { PROMO_OFFER_BADGE } from "@/lib/promo-banner-data";

type PromoOfferBadgeProps = {
  className?: string;
};

export function PromoOfferBadge({ className = "" }: PromoOfferBadgeProps) {
  const { line1, amount, line3 } = PROMO_OFFER_BADGE;

  return (
    <div
      className={`flex h-[88px] w-[88px] shrink-0 flex-col items-center justify-center gap-0.5 rounded-full border border-[var(--kba-primary)]/30 bg-white px-2 text-center shadow-[0_6px_20px_rgba(0,0,0,0.1)] sm:h-[96px] sm:w-[96px] lg:h-[100px] lg:w-[100px] ${className}`.trim()}
      aria-label={`${line1} ${amount} ${line3}`}
    >
      <span className="max-w-[76px] text-[8px] font-semibold uppercase leading-tight tracking-[0.08em] text-[var(--kba-muted)] sm:max-w-[84px] sm:text-[9px]">
        {line1}
      </span>
      <span className="font-serif text-base font-semibold leading-none text-[var(--kba-charcoal)] sm:text-lg">
        {amount}
      </span>
      <span className="max-w-[76px] text-[8px] font-semibold uppercase leading-tight tracking-[0.08em] text-[var(--kba-muted)] sm:max-w-[84px] sm:text-[9px]">
        {line3}
      </span>
    </div>
  );
}
