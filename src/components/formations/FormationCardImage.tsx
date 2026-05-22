import Image from "next/image";
import type { ImageSource } from "@/types/images";

type FormationCardImageProps = {
  src?: ImageSource;
  alt: string;
  imageFile: string;
};

export function FormationCardImage({
  src,
  alt,
  imageFile,
}: FormationCardImageProps) {
  return (
    <div className="relative aspect-[5/3] w-full overflow-hidden rounded-t-xl bg-gradient-to-br from-[#f3e4e2] to-[#e8d4d2]">
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 20vw"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 px-3 text-center">
          <span className="text-[11px] font-medium text-[var(--kba-muted)]">
            Image à venir
          </span>
          <span className="font-mono text-[10px] text-[var(--kba-muted)]/80">
            {imageFile}
          </span>
        </div>
      )}
    </div>
  );
}
