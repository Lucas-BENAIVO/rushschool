import { BoutiqueProductAside } from "@/components/boutique/detail/BoutiqueProductAside";
import { BoutiqueProductFeatures } from "@/components/boutique/detail/BoutiqueProductFeatures";
import { BoutiqueProductHero } from "@/components/boutique/detail/BoutiqueProductHero";
import { FormationsTrustBar } from "@/components/formations/FormationsTrustBar";
import type { BoutiqueProduct } from "@/lib/boutique-data";
import type { ImageSource } from "@/types/images";

type BoutiqueProductDetailSectionProps = {
  product: BoutiqueProduct;
  imageSrc?: ImageSource;
};

export function BoutiqueProductDetailSection({
  product,
  imageSrc,
}: BoutiqueProductDetailSectionProps) {
  return (
    <article className="w-full pb-8 pt-4 sm:pb-10 sm:pt-5 lg:pb-12 lg:pt-6">
      <div className="mx-auto max-w-[var(--kba-container-max)] px-5 sm:px-8">
        <BoutiqueProductHero product={product} imageSrc={imageSrc} />

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8">
            <BoutiqueProductFeatures product={product} />
          </div>
          <div className="lg:col-span-4">
            <BoutiqueProductAside product={product} />
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
