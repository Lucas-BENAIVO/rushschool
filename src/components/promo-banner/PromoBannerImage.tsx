import Image from "next/image";
import type { PromoGalleryLayout } from "@/lib/promo-banner-data";
import type { ImageSource } from "@/types/images";

type PromoBannerImageProps = {
  alt: string;
  imageFile: string;
  layout: PromoGalleryLayout;
  src?: ImageSource;
};

const LAYOUT_CLASSES: Record<PromoGalleryLayout, string> = {
  wide: "h-[112px] min-w-0 flex-[1.85] sm:h-[124px] lg:h-[136px]",
  tall: "h-[112px] min-w-0 flex-1 sm:h-[124px] lg:h-[136px]",
};

export function PromoBannerImage({
  alt,
  imageFile,
  layout,
  src,
}: PromoBannerImageProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#f3e4e2] to-[#e8d4d2] ${LAYOUT_CLASSES[layout]}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-center"
          sizes={
            layout === "wide"
              ? "(max-width: 1024px) 45vw, 280px"
              : "(max-width: 1024px) 22vw, 140px"
          }
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center px-2 text-center text-[10px] text-[var(--kba-muted)]">
          {imageFile}
        </div>
      )}
    </div>
  );
}
