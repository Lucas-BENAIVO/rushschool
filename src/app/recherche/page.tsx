import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Recherche | K Beauty Academy",
};

export default function RecherchePage() {
  return (
    <PageShell
      title="Recherche"
      description="Recherchez une formation ou un produit — contenu à venir."
    />
  );
}
