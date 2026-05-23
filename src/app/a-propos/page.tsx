import type { Metadata } from "next";
import { AProposSection } from "@/components/a-propos";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { aProposBreadcrumbs } from "@/lib/breadcrumbs";
import { A_PROPOS_IMAGES } from "@/lib/a-propos-images";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez K Beauty Academy : formations pratiques en prothésie ongulaire et extensions de cils, avec un accompagnement de proximité.",
};

export default function AProposPage() {
  return (
    <main className="flex-1">
      <BreadcrumbBar items={aProposBreadcrumbs()} />
      <AProposSection images={A_PROPOS_IMAGES} />
    </main>
  );
}
