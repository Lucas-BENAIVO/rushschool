import Image from "next/image";
import { A_PROPOS_INTRO } from "@/lib/a-propos-data";
import type { ImageSource } from "@/types/images";

type AProposIntroProps = {
  imageSrc: ImageSource;
};

export function AProposIntro({ imageSrc }: AProposIntroProps) {
  const { eyebrow, title, paragraphs } = A_PROPOS_INTRO;

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center lg:gap-10">
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-gradient-to-br from-[#f3e4e2] to-[#e8d4d2] lg:aspect-[5/4]">
        <Image
          src={imageSrc}
          alt="Salle de formation K Beauty Academy"
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--kba-primary)]">
          {eyebrow}
        </p>
        <h2 className="mt-2 font-serif text-2xl font-medium leading-tight tracking-tight text-[var(--kba-charcoal)] sm:text-3xl">
          {title}
        </h2>
        <div className="mt-5 flex flex-col gap-4">
          {paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 32)}
              className="text-[15px] leading-relaxed text-[var(--kba-muted)] sm:text-base"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
