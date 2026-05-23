type PromoBannerTitleProps = {
  children: string;
};

export function PromoBannerTitle({ children }: PromoBannerTitleProps) {
  return (
    <h2
      id="promo-banner-title"
      className="font-serif text-lg font-medium leading-snug tracking-tight text-[var(--kba-charcoal)] sm:text-xl"
    >
      {children}
    </h2>
  );
}
