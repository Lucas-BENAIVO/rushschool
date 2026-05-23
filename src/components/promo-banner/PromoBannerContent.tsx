import { PromoBannerCTA } from "@/components/promo-banner/PromoBannerCTA";
import { PromoBannerEyebrow } from "@/components/promo-banner/PromoBannerEyebrow";
import { PromoBannerFeatures } from "@/components/promo-banner/PromoBannerFeatures";
import { PromoBannerNote } from "@/components/promo-banner/PromoBannerNote";
import { PromoBannerPricing } from "@/components/promo-banner/PromoBannerPricing";
import { PromoBannerTitle } from "@/components/promo-banner/PromoBannerTitle";
import { PROMO_BANNER_CONTENT } from "@/lib/promo-banner-data";

export function PromoBannerContent() {
  const { eyebrow, title, price, oldPrice, ctaLabel, ctaHref, note } =
    PROMO_BANNER_CONTENT;

  return (
    <div className="flex flex-col gap-2">
      <PromoBannerEyebrow>{eyebrow}</PromoBannerEyebrow>
      <PromoBannerTitle>{title}</PromoBannerTitle>
      <PromoBannerPricing price={price} oldPrice={oldPrice} />
      <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-2.5">
        <PromoBannerCTA href={ctaHref} label={ctaLabel} />
        <PromoBannerFeatures />
      </div>
      <PromoBannerNote>{note}</PromoBannerNote>
    </div>
  );
}
