import type { Metadata } from "next";
import { BoutiqueCatalogSection } from "@/components/boutique";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { boutiqueCatalogBreadcrumbs } from "@/lib/breadcrumbs";
import { BOUTIQUE_IMAGES } from "@/lib/boutique-images";

export const metadata: Metadata = {
  title: "Boutique",
  description:
    "Kits, lampes UV et accessoires professionnels pour prothésiste ongulaire et extensions de cils.",
};

export default function BoutiquePage() {
  return (
    <main className="flex-1">
      <BreadcrumbBar items={boutiqueCatalogBreadcrumbs()} tone="showcase" />
      <BoutiqueCatalogSection images={BOUTIQUE_IMAGES} />
    </main>
  );
}
