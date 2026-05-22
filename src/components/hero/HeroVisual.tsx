import { HeroImage } from "@/components/hero/HeroImage";
import { HeroPromoCard } from "@/components/hero/HeroPromoCard";
import { HeroStatBadges } from "@/components/hero/HeroStatBadges";
import type { ImageSource } from "@/types/images";

type HeroVisualProps = {
  imageSrc?: ImageSource;
  promoImageSrc?: ImageSource;
};

export function HeroVisual({ imageSrc, promoImageSrc }: HeroVisualProps) {
  return (
    <div className="relative flex items-center justify-center pt-4 pb-2 sm:pt-6 sm:pb-3 lg:pt-8 lg:pb-4">
      <div className="relative w-full max-w-md lg:max-w-none">
        <HeroImage src={imageSrc} />
        <HeroStatBadges />
        <HeroPromoCard imageSrc={promoImageSrc} />
      </div>
    </div>
  );
}
