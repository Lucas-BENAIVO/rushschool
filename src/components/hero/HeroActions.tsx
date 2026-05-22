import { HeroButton } from "@/components/hero/HeroButton";
import { ROUTES } from "@/lib/routes";

export function HeroActions() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
      <HeroButton
        href={ROUTES.formations}
        label="Voir nos formations"
        variant="primary"
      />
      <HeroButton
        href={ROUTES.reserverAppel}
        label="Réserver un appel"
        variant="secondary"
      />
    </div>
  );
}
