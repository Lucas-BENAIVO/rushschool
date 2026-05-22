import { FormationCardBadge } from "@/components/formations/FormationCardBadge";
import { FormationCardButton } from "@/components/formations/FormationCardButton";
import { FormationCardFeatures } from "@/components/formations/FormationCardFeatures";
import { FormationCardImage } from "@/components/formations/FormationCardImage";
import type { FormationCardData } from "@/lib/formations-data";
import type { ImageSource } from "@/types/images";

type FormationCardProps = {
  formation: FormationCardData;
  imageSrc?: ImageSource;
};

export function FormationCard({ formation, imageSrc }: FormationCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
      <div className="relative">
        <FormationCardImage
          src={imageSrc}
          alt={formation.title}
          imageFile={formation.imageFile}
        />
        {formation.badge === "best-seller" && <FormationCardBadge />}
      </div>

      <div className="flex flex-col gap-2.5 p-3 sm:p-3.5">
        <div>
          <h3 className="font-serif text-base font-medium leading-snug text-[var(--kba-charcoal)]">
            {formation.title}
          </h3>
          <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-[var(--kba-muted)]">
            {formation.subtitle}
          </p>
          <p className="mt-1 text-lg font-bold text-[var(--kba-charcoal)]">
            {formation.price}
          </p>
        </div>

        <FormationCardFeatures features={formation.features} />

        <div>
          <FormationCardButton
            href={formation.href}
            label={formation.ctaLabel}
            variant={formation.buttonVariant}
            outlineTextPrimary={formation.outlineTextPrimary}
          />
        </div>
      </div>
    </article>
  );
}
