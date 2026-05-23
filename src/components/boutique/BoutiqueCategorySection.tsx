import { BoutiqueCategoryHeader } from "@/components/boutique/BoutiqueCategoryHeader";
import { BoutiqueProductsGrid } from "@/components/boutique/BoutiqueProductsGrid";
import { FormationsTrustBar } from "@/components/formations/FormationsTrustBar";
import {
  getBoutiqueProductsByCategory,
  type BoutiqueCategory,
} from "@/lib/boutique-data";
import type { ShopImagesMap } from "@/components/showcase/shop/ShopProductGrid";

type BoutiqueCategorySectionProps = {
  category: BoutiqueCategory;
  images?: ShopImagesMap;
};

export function BoutiqueCategorySection({
  category,
  images,
}: BoutiqueCategorySectionProps) {
  const products = getBoutiqueProductsByCategory(category.slug);

  return (
    <section
      className="w-full pb-10 pt-4 sm:pb-12 sm:pt-5 lg:pb-14 lg:pt-6"
      style={{ backgroundColor: "var(--kba-showcase-bg)" }}
      aria-label={`Produits ${category.title}`}
    >
      <div className="mx-auto max-w-[var(--kba-container-max)] px-5 sm:px-8">
        <BoutiqueCategoryHeader category={category} />
        <div className="mt-8 sm:mt-10">
          <BoutiqueProductsGrid products={products} images={images} />
        </div>
        <FormationsTrustBar />
      </div>
    </section>
  );
}
