import { FormationsGrid, type FormationImagesMap } from "@/components/formations/FormationsGrid";
import { FormationsSectionHeader } from "@/components/formations/FormationsSectionHeader";
import { FormationsTrustBar } from "@/components/formations/FormationsTrustBar";

type FeaturedFormationsProps = {
  images?: FormationImagesMap;
};

export function FeaturedFormations({ images }: FeaturedFormationsProps) {
  return (
    <section
      className="w-full py-12 sm:py-16 lg:py-20"
      style={{ backgroundColor: "var(--kba-formations-bg)" }}
      aria-labelledby="formations-phares-title"
    >
      <div className="mx-auto max-w-[var(--kba-container-max)] px-5 sm:px-8">
        <FormationsSectionHeader />
        <div className="mt-8 sm:mt-10">
          <FormationsGrid images={images} />
        </div>
        <FormationsTrustBar />
      </div>
    </section>
  );
}
