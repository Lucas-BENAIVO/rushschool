import type { Metadata } from "next";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { FormationsCatalogSection } from "@/components/formations/catalog/FormationsCatalogSection";
import { formationsCatalogBreadcrumbs } from "@/lib/breadcrumbs";
import { FORMATION_IMAGES } from "@/lib/formation-images";

export const metadata: Metadata = {
  title: "Formations",
  description:
    "Formations professionnelles en prothésie ongulaire et extensions de cils — K Beauty Academy.",
};

export default function FormationsPage() {
  return (
    <main className="flex-1">
      <BreadcrumbBar items={formationsCatalogBreadcrumbs()} />
      <FormationsCatalogSection images={FORMATION_IMAGES} />
    </main>
  );
}
