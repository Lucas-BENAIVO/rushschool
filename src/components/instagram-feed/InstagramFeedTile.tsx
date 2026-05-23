import Image from "next/image";
import Link from "next/link";
import { INSTAGRAM_PROFILE_URL } from "@/lib/instagram-feed-data";
import type { ImageSource } from "@/types/images";

type InstagramFeedTileProps = {
  alt: string;
  imageFile: string;
  src?: ImageSource;
};

export function InstagramFeedTile({
  alt,
  imageFile,
  src,
}: InstagramFeedTileProps) {
  return (
    <Link
      href={INSTAGRAM_PROFILE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative aspect-square w-[88px] shrink-0 overflow-hidden rounded-[10px] bg-gradient-to-br from-[#f3e4e2] to-[#e8d4d2] sm:w-[100px] lg:w-auto lg:min-w-0 lg:flex-1"
      aria-label={`Voir sur Instagram — ${alt}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
          sizes="(max-width: 1024px) 88px, 140px"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center px-1.5 text-center text-[9px] leading-tight text-[var(--kba-muted)] sm:text-[10px]">
          {imageFile}
        </div>
      )}
    </Link>
  );
}
