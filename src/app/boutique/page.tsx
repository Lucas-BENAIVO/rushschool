import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Boutique | K Beauty Academy",
  description: "Matériel professionnel pour prothésiste ongulaire et extensions de cils.",
};

export default function BoutiquePage() {
  return (
    <PageShell
      title="Boutique"
      description="Kits, lampes UV et accessoires — contenu à venir."
    />
  );
}
