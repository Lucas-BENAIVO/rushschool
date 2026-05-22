import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Avis élèves | K Beauty Academy",
  description: "Témoignages et résultats de nos élèves.",
};

export default function AvisElevesPage() {
  return (
    <PageShell
      title="Avis élèves"
      description="Témoignages et avant / après — contenu à venir."
    />
  );
}
