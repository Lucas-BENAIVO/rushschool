import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Financement",
};

export default function FinancementPage() {
  return (
    <PageShell
      title="Financement"
      description="Options de financement — contenu à venir."
    />
  );
}
