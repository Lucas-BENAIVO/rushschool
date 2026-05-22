import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "À propos | K Beauty Academy",
  description: "Découvrez K Beauty Academy et notre équipe.",
};

export default function AProposPage() {
  return (
    <PageShell
      title="À propos"
      description="Présentation de l'académie — contenu à venir."
    />
  );
}
