import { PromoBannerImage } from "@/components/promo-banner/PromoBannerImage";
import { PROMO_GALLERY_IMAGES } from "@/lib/promo-banner-data";
import type { ImageSource } from "@/types/images";

export type PromoGalleryImagesMap = Partial<
  Record<(typeof PROMO_GALLERY_IMAGES)[number]["id"], ImageSource>
>;

type PromoBannerGalleryProps = {
  images?: PromoGalleryImagesMap;
  className?: string;
};

export function PromoBannerGallery({
  images = {},
  className = "",
}: PromoBannerGalleryProps) {
  return (
    <div
      className={`flex w-full items-center justify-start gap-2 sm:gap-2.5 ${className}`.trim()}
    >
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
