import Image from "next/image";
import type { ImageSource } from "@/types/images";

type AProposFounderProps = {
  imageSrc: ImageSource;
};

export function AProposFounder({ imageSrc }: AProposFounderProps) {
  return (
    <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-10">
      <div className="order-2 lg:order-1">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--kba-primary)]">
          L&apos;équipe
        </p>
        <h2 className="mt-2 font-serif text-2xl font-medium tracking-tight text-[var(--kba-charcoal)] sm:text-3xl">
          Des formatrices au plus près du terrain
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-[var(--kba-muted)] sm:text-base">
          Nos formateurs cumulent l&apos;expérience en cabine et la passion de
          transmettre. Ils vous accompagnent pas à pas, corrigent vos gestes et
          partagent les bonnes pratiques pour un lancement serein.
        </p>
        <p className="mt-4 text-[15px] leading-relaxed text-[var(--kba-muted)] sm:text-base">
          Chez K Beauty Academy, chaque élève compte : nous adaptons nos conseils
          à votre niveau et à votre projet professionnel.
        </p>
      </div>

      <div className="relative order-1 aspect-[4/5] max-h-[420px] overflow-hidden rounded-2xl bg-gradient-to-br from-[#f3e4e2] to-[#e8d4d2] lg:order-2 lg:max-h-none lg:aspect-[4/5]">
        <Image
          src={imageSrc}
          alt="Formatrice K Beauty Academy"
          fill
          className="object-cover object-top"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}
