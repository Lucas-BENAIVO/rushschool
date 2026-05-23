type PromoBannerPricingProps = {
  price: string;
  oldPrice: string;
};

export function PromoBannerPricing({ price, oldPrice }: PromoBannerPricingProps) {
  return (
    <p className="flex flex-wrap items-baseline gap-2">
      <span className="font-serif text-xl font-semibold text-[var(--kba-charcoal)] sm:text-2xl">
        {price}
      </span>
      <span className="text-xs text-[var(--kba-muted)]">
        au lieu de{" "}
        <span className="line-through decoration-[var(--kba-primary)]/60">
          {oldPrice}
        </span>
      </span>
    </p>
  );
}
