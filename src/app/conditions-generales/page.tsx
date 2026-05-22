import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Conditions générales",
};

export default function ConditionsGeneralesPage() {
  return (
    <PageShell
      title="Conditions générales"
      description="Mentions légales et CGV — contenu à venir."
    />
  );
}
