import { ResultsFooter } from "@/components/showcase/results/ResultsFooter";
import { ResultsHeader } from "@/components/showcase/results/ResultsHeader";
import type { ResultsImages } from "@/components/showcase/results/ResultsColumn";
import { ShopHeader } from "@/components/showcase/shop/ShopHeader";
import type { ShopImagesMap } from "@/components/showcase/shop/ShopProductGrid";
import { ShopViewAllButton } from "@/components/showcase/shop/ShopViewAllButton";
import { ShowcaseVisualRow } from "@/components/showcase/ShowcaseVisualRow";
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
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch lg:gap-6 xl:gap-8">
          <div className="flex flex-col gap-5 lg:col-span-9 lg:min-h-0">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-9 lg:gap-4">
              <div className="lg:col-span-4">
                <ResultsHeader />
              </div>
              <div className="lg:col-span-5">
                <ShopHeader />
              </div>
            </div>

            <ShowcaseVisualRow
              resultsImages={resultsImages}
              shopImages={shopImages}
            />

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-9 lg:items-center lg:gap-4">
              <div className="lg:col-span-4">
                <ResultsFooter />
              </div>
              <div className="lg:col-span-5">
                <ShopViewAllButton />
              </div>
            </div>
          </div>

          <div className="flex lg:col-span-3">
            <WhyUsColumn />
          </div>
        </div>
      </div>
    </section>
  );
}
