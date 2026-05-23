import { FormationsPageHeader } from "@/components/formations/catalog/FormationsPageHeader";
import {
  FormationsGrid,
  type FormationImagesMap,
} from "@/components/formations/FormationsGrid";
import { FormationsTrustBar } from "@/components/formations/FormationsTrustBar";

type FormationsCatalogSectionProps = {
  images?: FormationImagesMap;
};

export function FormationsCatalogSection({
  images,
}: FormationsCatalogSectionProps) {
  return (
    <section
      className="w-full pb-10 pt-4 sm:pb-12 sm:pt-5 lg:pb-14 lg:pt-6"
      style={{ backgroundColor: "var(--kba-hero-bg)" }}
      aria-label="Catalogue des formations"
    >
      <div className="mx-auto max-w-[var(--kba-container-max)] px-5 sm:px-8">
        <FormationsPageHeader />
        <div className="mt-10 sm:mt-12">
          <FormationsGrid images={images} layout="grid" />
        </div>
        <FormationsTrustBar />
      </div>
    </section>
  );
}
