import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Panier | K Beauty Academy",
};

export default function PanierPage() {
  return (
    <PageShell
      title="Panier"
      description="Votre panier est vide pour le moment."
    />
  );
}
