import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Contact | K Beauty Academy",
  description: "Contactez-nous ou réservez un appel découverte.",
};

export default function ContactPage() {
  return (
    <PageShell
      title="Contact"
      description="Formulaire et réservation d'appel — contenu à venir."
    />
  );
}
