import type { Metadata } from "next";
import { AvisElevesSection } from "@/components/avis-eleves";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { avisElevesBreadcrumbs } from "@/lib/breadcrumbs";
import { AVIS_ELEVES_IMAGES } from "@/lib/avis-eleves-images";

export const metadata: Metadata = {
  title: "Avis élèves",
  description:
    "Témoignages et résultats avant/après des élèves K Beauty Academy — formations ongles et cils.",
};

export default function AvisElevesPage() {
  return (
    <main className="flex-1">
      <BreadcrumbBar items={avisElevesBreadcrumbs()} />
      <AvisElevesSection images={AVIS_ELEVES_IMAGES} />
    </main>
  );
}
