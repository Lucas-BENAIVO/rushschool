type PromoBannerEyebrowProps = {
  children: string;
};

export function PromoBannerEyebrow({ children }: PromoBannerEyebrowProps) {
  return (
    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--kba-charcoal)]">
      {children}
    </p>
  );
}
