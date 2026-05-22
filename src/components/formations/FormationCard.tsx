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
    <article className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
      <div className="relative">
        <FormationCardImage
          src={imageSrc}
          alt={formation.title}
          imageFile={formation.imageFile}
        />
        {formation.badge === "best-seller" && <FormationCardBadge />}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-4 sm:p-5">
        <div>
          <h3 className="font-serif text-lg font-medium leading-snug text-[var(--kba-charcoal)]">
            {formation.title}
          </h3>
          <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--kba-muted)]">
            {formation.subtitle}
          </p>
          <p className="mt-2 text-xl font-bold text-[var(--kba-charcoal)]">
            {formation.price}
          </p>
        </div>

        <FormationCardFeatures features={formation.features} />

        <div className="mt-auto pt-1">
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
