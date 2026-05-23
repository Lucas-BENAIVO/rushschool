import { PromoBannerGallery } from "@/components/promo-banner/PromoBannerGallery";
import type { PromoGalleryImagesMap } from "@/components/promo-banner/PromoBannerGallery";
import { PromoOfferBadge } from "@/components/promo-banner/PromoOfferBadge";

type PromoBannerVisualsProps = {
  images?: PromoGalleryImagesMap;
};

export function PromoBannerVisuals({ images }: PromoBannerVisualsProps) {
  return (
    <div className="w-full lg:flex lg:items-center lg:gap-5 xl:gap-6">
      <div className="relative w-full sm:pb-12 lg:max-w-[500px] lg:flex-1 lg:pb-0">
        <PromoBannerGallery images={images} className="max-w-none" />

        <div className="absolute -bottom-1 right-0 z-10 hidden sm:block lg:hidden">
          <PromoOfferBadge />
        </div>
      </div>

      <div className="hidden shrink-0 lg:flex lg:items-center">
        <PromoOfferBadge />
      </div>
    </div>
  );
}
