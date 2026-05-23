import { AvisElevesCta } from "@/components/avis-eleves/AvisElevesCta";
import { AvisElevesPageHeader } from "@/components/avis-eleves/AvisElevesPageHeader";
import { AvisElevesResults } from "@/components/avis-eleves/AvisElevesResults";
import { AvisElevesReviewsGrid } from "@/components/avis-eleves/AvisElevesReviewsGrid";
import { AvisElevesSummary } from "@/components/avis-eleves/AvisElevesSummary";
import type { ImageSource } from "@/types/images";

type AvisElevesSectionProps = {
  images: {
    before: ImageSource;
    after: ImageSource;
  };
};

export function AvisElevesSection({ images }: AvisElevesSectionProps) {
  return (
    <section
      className="w-full pb-10 pt-4 sm:pb-14 sm:pt-5"
      style={{ backgroundColor: "var(--kba-hero-bg)" }}
      aria-label="Avis des élèves K Beauty Academy"
    >
      <div className="mx-auto max-w-[var(--kba-container-max)] px-5 sm:px-8">
        <AvisElevesPageHeader />

        <div className="mt-10 sm:mt-12">
          <AvisElevesSummary />
        </div>

        <div className="mt-12 sm:mt-14">
          <AvisElevesResults images={images} />
        </div>

        <div className="mt-12 sm:mt-14">
          <AvisElevesReviewsGrid />
        </div>

        <div className="mt-12 sm:mt-14">
          <AvisElevesCta />
        </div>
      </div>
    </section>
  );
}
