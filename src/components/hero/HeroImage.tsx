import Image from "next/image";
import type { ImageSource } from "@/types/images";

type HeroImageProps = {
  src?: ImageSource;
  alt?: string;
};

export function HeroImage({
  src,
  alt = "Experte prothésiste ongulaire et extensions de cils",
}: HeroImageProps) {
  return (
    <div className="relative h-[min(340px,58vh)] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#f3e4e2] via-[#f8ebe9] to-[#edd8d6] shadow-[0_16px_40px_rgba(196,137,137,0.12)] sm:h-[380px] lg:h-[420px]">
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-6 text-center">
          <span className="font-serif text-lg text-[var(--kba-charcoal)]/70">
            Image hero
          </span>
          <span className="text-[13px] text-[var(--kba-muted)]">
            Ajoutez votre photo dans{" "}
            <code className="rounded bg-white/50 px-1.5 py-0.5 text-[12px]">
              src/assets/
            </code>
          </span>
        </div>
      )}
    </div>
  );
}
