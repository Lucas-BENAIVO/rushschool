import { PromoBannerFeatureItem } from "@/components/promo-banner/PromoBannerFeatureItem";
import { PROMO_BANNER_FEATURES } from "@/lib/promo-banner-data";

export function PromoBannerFeatures() {
  return (
    <ul className="flex flex-wrap gap-2 sm:gap-3">
      {PROMO_BANNER_FEATURES.map((feature) => (
        <PromoBannerFeatureItem
          key={feature.id}
          label={feature.label}
          icon={feature.icon}
        />
      ))}
    </ul>
  );
}
