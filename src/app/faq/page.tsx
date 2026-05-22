import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "FAQ",
};

export default function FaqPage() {
  return (
    <PageShell
      title="FAQ"
      description="Questions fréquentes — contenu à venir."
    />
  );
}
