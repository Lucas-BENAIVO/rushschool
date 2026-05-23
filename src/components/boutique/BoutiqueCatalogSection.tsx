import { Suspense } from "react";
import { BoutiqueCatalogClient } from "@/components/boutique/BoutiqueCatalogClient";
import { BoutiquePageHeader } from "@/components/boutique/BoutiquePageHeader";
import { FormationsTrustBar } from "@/components/formations/FormationsTrustBar";
import type { ShopImagesMap } from "@/components/showcase/shop/ShopProductGrid";

type BoutiqueCatalogSectionProps = {
  images?: ShopImagesMap;
};

function BoutiqueCatalogFallback() {
  return (
    <div className="mt-8 h-32 animate-pulse rounded-xl bg-[var(--kba-charcoal)]/5 sm:mt-10" />
  );
}

export function BoutiqueCatalogSection({ images }: BoutiqueCatalogSectionProps) {
  return (
    <section
      className="w-full pb-10 pt-4 sm:pb-12 sm:pt-5 lg:pb-14 lg:pt-6"
      style={{ backgroundColor: "var(--kba-showcase-bg)" }}
      aria-label="Catalogue boutique"
    >
      <div className="mx-auto max-w-[var(--kba-container-max)] px-5 sm:px-8">
        <BoutiquePageHeader />
        <div className="mt-8">
          <Suspense fallback={<BoutiqueCatalogFallback />}>
            <BoutiqueCatalogClient images={images} />
          </Suspense>
        </div>
        <FormationsTrustBar />
      </div>
    </section>
  );
}
