import { ResultsColumn, type ResultsImages } from "@/components/showcase/results/ResultsColumn";
import { ShopColumn, type ShopImagesMap } from "@/components/showcase/shop/ShopColumn";
import { WhyUsColumn } from "@/components/showcase/why-us/WhyUsColumn";

type ShowcaseSectionProps = {
  resultsImages?: ResultsImages;
  shopImages?: ShopImagesMap;
};

export function ShowcaseSection({
  resultsImages,
  shopImages,
}: ShowcaseSectionProps) {
  return (
    <section
      className="w-full py-10 sm:py-12 lg:py-14"
      style={{ backgroundColor: "var(--kba-showcase-bg)" }}
      aria-label="Résultats, boutique et avantages"
    >
      <div className="mx-auto max-w-[var(--kba-container-max)] px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start lg:gap-6 xl:gap-8">
          <div className="lg:col-span-4">
            <ResultsColumn images={resultsImages} />
          </div>
          <div className="lg:col-span-5">
            <ShopColumn images={shopImages} />
          </div>
          <div className="lg:col-span-3">
            <WhyUsColumn />
          </div>
        </div>
      </div>
    </section>
  );
}
