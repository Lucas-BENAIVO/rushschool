import Image from "next/image";
import { FormationCardBadge } from "@/components/formations/FormationCardBadge";
import type { FormationCardData } from "@/lib/formations-data";
import type { ImageSource } from "@/types/images";

type FormationDetailHeroProps = {
  formation: FormationCardData;
  imageSrc?: ImageSource;
};

export function FormationDetailHero({
  formation,
  imageSrc,
}: FormationDetailHeroProps) {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-center lg:gap-10">
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-gradient-to-br from-[#f3e4e2] to-[#e8d4d2] lg:aspect-[5/4]">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={formation.title}
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-[12px] text-[var(--kba-muted)]">
            {formation.imageFile}
          </div>
        )}
        {formation.badge === "best-seller" && <FormationCardBadge />}
      </div>

      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--kba-primary)]">
          {formation.subtitle}
        </p>
        <h1 className="mt-2 font-serif text-3xl font-medium leading-tight tracking-tight text-[var(--kba-charcoal)] sm:text-4xl">
          {formation.title}
        </h1>
        <p className="mt-4 font-serif text-3xl font-semibold text-[var(--kba-charcoal)]">
          {formation.price}
        </p>
        <p className="mt-4 text-[15px] leading-relaxed text-[var(--kba-muted)] sm:text-base">
          {formation.description}
        </p>
      </div>
    </div>
  );
}
