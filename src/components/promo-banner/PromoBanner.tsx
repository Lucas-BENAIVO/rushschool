import { PromoBannerContent } from "@/components/promo-banner/PromoBannerContent";
import type { PromoGalleryImagesMap } from "@/components/promo-banner/PromoBannerGallery";
import { PromoBannerVisuals } from "@/components/promo-banner/PromoBannerVisuals";

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
        <div className="grid grid-cols-1 items-start gap-5 sm:gap-6 lg:grid-cols-12 lg:items-center lg:gap-4">
          <div className="lg:col-span-5">
            <PromoBannerContent />
          </div>

          <div className="lg:col-span-7">
            <PromoBannerVisuals images={galleryImages} />
          </div>
        </div>
      </div>
    </section>
  );
}
