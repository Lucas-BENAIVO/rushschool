import { HeroImage } from "@/components/hero/HeroImage";
import { HeroPromoCard } from "@/components/hero/HeroPromoCard";
import { HeroStatBadges } from "@/components/hero/HeroStatBadges";

type HeroVisualProps = {
  /** Image principale — ex. /images/hero/portrait.jpg */
  imageSrc?: string;
  /** Miniature carte promo */
  promoImageSrc?: string;
};

export function HeroVisual({ imageSrc, promoImageSrc }: HeroVisualProps) {
  return (
    <div className="relative flex items-center justify-center py-8 sm:py-10 lg:py-12">
      <div className="relative w-full max-w-md lg:max-w-none">
        <HeroImage src={imageSrc} />
        <HeroStatBadges />
        <HeroPromoCard imageSrc={promoImageSrc} />
      </div>
    </div>
  );
}
