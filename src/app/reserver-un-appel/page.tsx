import type { Metadata } from "next";
import { ReserverAppelSection } from "@/components/reserver-appel";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { reserverAppelBreadcrumbs } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: "Réserver un appel",
  description:
    "Réservez votre appel découverte gratuit de 15 minutes avec K Beauty Academy.",
};

export default function ReserverAppelPage() {
  return (
    <main className="flex-1">
      <BreadcrumbBar items={reserverAppelBreadcrumbs()} />
      <ReserverAppelSection />
    </main>
  );
}
