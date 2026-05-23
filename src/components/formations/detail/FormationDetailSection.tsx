import { FormationDetailAside } from "@/components/formations/detail/FormationDetailAside";
import { FormationDetailFeatures } from "@/components/formations/detail/FormationDetailFeatures";
import { FormationDetailHero } from "@/components/formations/detail/FormationDetailHero";
import { FormationsTrustBar } from "@/components/formations/FormationsTrustBar";
import type { FormationCardData } from "@/lib/formations-data";
import type { ImageSource } from "@/types/images";

type FormationDetailSectionProps = {
  formation: FormationCardData;
  imageSrc?: ImageSource;
};

export function FormationDetailSection({
  formation,
  imageSrc,
}: FormationDetailSectionProps) {
  return (
    <article className="w-full pb-8 pt-4 sm:pb-10 sm:pt-5 lg:pb-12 lg:pt-6">
      <div className="mx-auto max-w-[var(--kba-container-max)] px-5 sm:px-8">
        <FormationDetailHero formation={formation} imageSrc={imageSrc} />

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8">
            <FormationDetailFeatures formation={formation} />
          </div>
          <div className="lg:col-span-4">
            <FormationDetailAside formation={formation} />
          </div>
        </div>

        <div
          className="mt-12 rounded-2xl px-4 py-6 sm:px-6"
          style={{ backgroundColor: "var(--kba-showcase-bg)" }}
        >
          <FormationsTrustBar />
        </div>
      </div>
    </article>
  );
}
