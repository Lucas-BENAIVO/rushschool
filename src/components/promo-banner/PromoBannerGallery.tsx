import { PromoBannerImage } from "@/components/promo-banner/PromoBannerImage";
import { PROMO_GALLERY_IMAGES } from "@/lib/promo-banner-data";
import type { ImageSource } from "@/types/images";

export type PromoGalleryImagesMap = Partial<
  Record<(typeof PROMO_GALLERY_IMAGES)[number]["id"], ImageSource>
>;

type PromoBannerGalleryProps = {
  images?: PromoGalleryImagesMap;
};

export function PromoBannerGallery({ images = {} }: PromoBannerGalleryProps) {
  return (
    <div className="flex w-full max-w-[min(100%,420px)] items-center justify-start gap-2 sm:max-w-[460px] sm:gap-2.5 lg:max-w-[500px]">
      {PROMO_GALLERY_IMAGES.map((item) => (
        <PromoBannerImage
          key={item.id}
          alt={item.alt}
          imageFile={item.imageFile}
          layout={item.layout}
          src={images[item.id]}
        />
      ))}
    </div>
  );
}
