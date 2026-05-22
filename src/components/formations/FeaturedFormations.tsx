import { FormationsGrid, type FormationImagesMap } from "@/components/formations/FormationsGrid";
import { FormationsSectionHeader } from "@/components/formations/FormationsSectionHeader";
import { FormationsTrustBar } from "@/components/formations/FormationsTrustBar";

type FeaturedFormationsProps = {
  images?: FormationImagesMap;
};

export function FeaturedFormations({ images }: FeaturedFormationsProps) {
  return (
    <section
      className="w-full pt-6 pb-8 sm:pt-8 sm:pb-10 lg:pt-10 lg:pb-12"
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
