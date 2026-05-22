import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Formations | K Beauty Academy",
  description: "Formations professionnelles prothésiste ongulaire et experte cils.",
};

export default function FormationsPage() {
  return (
    <PageShell
      title="Nos formations"
      description="Catalogue des formations — contenu à venir."
    />
  );
}
