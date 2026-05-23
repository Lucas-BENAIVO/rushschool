import { PromoBannerContent } from "@/components/promo-banner/PromoBannerContent";
import {
  PromoBannerGallery,
  type PromoGalleryImagesMap,
} from "@/components/promo-banner/PromoBannerGallery";
import { PromoOfferBadge } from "@/components/promo-banner/PromoOfferBadge";

type PromoBannerProps = {
  galleryImages?: PromoGalleryImagesMap;
};

export function PromoBanner({ galleryImages }: PromoBannerProps) {
  return (
    <section
      id="offre"
      className="w-full py-6 sm:py-8"
      style={{ backgroundColor: "var(--kba-promo-bg)" }}
      aria-labelledby="promo-banner-title"
    >
      <div className="mx-auto max-w-[var(--kba-container-max)] px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-4 lg:grid-cols-12 lg:gap-4">
          <div className="lg:col-span-5">
            <PromoBannerContent />
          </div>

          <div className="lg:col-span-7">
            <div className="flex flex-col items-start gap-4 sm:gap-5 lg:flex-row lg:items-center lg:gap-6">
              <PromoBannerGallery images={galleryImages} />
              <PromoOfferBadge />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
