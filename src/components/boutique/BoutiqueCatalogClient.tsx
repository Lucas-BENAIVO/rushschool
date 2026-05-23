"use client";

import { useCallback, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { BoutiqueCategoryLinks } from "@/components/boutique/BoutiqueCategoryLinks";
import { BoutiqueProductsGrid } from "@/components/boutique/BoutiqueProductsGrid";
import {
  BOUTIQUE_ALL_CATEGORY,
  getBoutiqueProductsByCategoryFilter,
  isBoutiqueCategoryFilter,
} from "@/lib/boutique-data";
import type { BoutiqueCategoryFilter } from "@/lib/boutique-data";
import type { ShopImagesMap } from "@/components/showcase/shop/ShopProductGrid";
import { ROUTES } from "@/lib/routes";

type BoutiqueCatalogClientProps = {
  images?: ShopImagesMap;
};

function readCategoryFromSearchParams(
  value: string | null,
): BoutiqueCategoryFilter {
  if (value && isBoutiqueCategoryFilter(value)) {
    return value;
  }

  return BOUTIQUE_ALL_CATEGORY;
}

export function BoutiqueCatalogClient({ images }: BoutiqueCatalogClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const activeCategory = useMemo(
    () => readCategoryFromSearchParams(categoryParam),
    [categoryParam],
  );

  const filteredProducts = useMemo(
    () => getBoutiqueProductsByCategoryFilter(activeCategory),
    [activeCategory],
  );

  const handleCategoryChange = useCallback(
    (category: BoutiqueCategoryFilter) => {
      const nextUrl =
        category === BOUTIQUE_ALL_CATEGORY
          ? ROUTES.boutique
          : `${ROUTES.boutique}?category=${category}`;

      router.replace(nextUrl, { scroll: false });
    },
    [router],
  );

  return (
    <>
      <BoutiqueCategoryLinks
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />
      <div className="mt-8 sm:mt-10">
        {filteredProducts.length > 0 ? (
          <BoutiqueProductsGrid products={filteredProducts} images={images} />
        ) : (
          <p className="text-[14px] text-[var(--kba-muted)]">
            Aucun produit dans cette catégorie pour le moment.
          </p>
        )}
      </div>
    </>
  );
}
