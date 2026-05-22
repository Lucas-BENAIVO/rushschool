import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Blog | K Beauty Academy",
  description: "Conseils, actualités et inspiration nail art.",
};

export default function BlogPage() {
  return (
    <PageShell
      title="Blog"
      description="Articles et actualités — contenu à venir."
    />
  );
}
