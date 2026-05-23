import { PROMO_OFFER_BADGE } from "@/lib/promo-banner-data";

export function PromoOfferBadge() {
  const { line1, amount, line3 } = PROMO_OFFER_BADGE;

  return (
    <div
      className="flex h-[100px] w-[100px] shrink-0 flex-col items-center justify-center gap-0.5 rounded-full border border-[var(--kba-primary)]/25 bg-white px-2 text-center shadow-[0_4px_16px_rgba(0,0,0,0.07)] sm:h-[104px] sm:w-[104px]"
      aria-label={`${line1} ${amount} ${line3}`}
    >
      <span className="max-w-[88px] text-[9px] font-semibold uppercase leading-tight tracking-[0.08em] text-[var(--kba-muted)]">
        {line1}
      </span>
      <span className="font-serif text-lg font-semibold leading-none text-[var(--kba-charcoal)]">
        {amount}
      </span>
      <span className="max-w-[88px] text-[9px] font-semibold uppercase leading-tight tracking-[0.08em] text-[var(--kba-muted)]">
        {line3}
      </span>
    </div>
  );
}
