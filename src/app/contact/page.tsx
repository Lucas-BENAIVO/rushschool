import type { Metadata } from "next";
import { ContactSection } from "@/components/contact";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { contactBreadcrumbs } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez K Beauty Academy : formulaire, téléphone, e-mail et réservation d'appel découverte.",
};

export default function ContactPage() {
  return (
    <main className="flex-1">
      <BreadcrumbBar items={contactBreadcrumbs()} />
      <ContactSection />
    </main>
  );
}
