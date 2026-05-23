import { BeforeAfterSlider } from "@/components/showcase/results/BeforeAfterSlider";
import { ShopProductGrid, type ShopImagesMap } from "@/components/showcase/shop/ShopProductGrid";
import { RESULTS_CONTENT } from "@/lib/showcase-data";
import type { ResultsImages } from "@/components/showcase/results/ResultsColumn";

type ShowcaseVisualRowProps = {
  resultsImages?: ResultsImages;
  shopImages?: ShopImagesMap;
};

export function ShowcaseVisualRow({
  resultsImages,
  shopImages,
}: ShowcaseVisualRowProps) {
  const { beforeImageFile, afterImageFile } = RESULTS_CONTENT;

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-9 lg:items-stretch lg:gap-4">
      <div className="min-w-0 lg:col-span-4">
        <BeforeAfterSlider
          beforeSrc={resultsImages?.before}
          afterSrc={resultsImages?.after}
          beforeImageFile={beforeImageFile}
          afterImageFile={afterImageFile}
          fillHeight
        />
      </div>

      <div className="min-w-0 lg:col-span-5">
        <ShopProductGrid images={shopImages} />
      </div>
    </div>
  );
}
