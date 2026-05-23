import { ROUTES } from "@/lib/routes";
import { FOOTER_SOCIAL_LINKS } from "@/lib/footer-links";

export const CONTACT_HEADER = {
  eyebrow: "K Beauty Academy",
  title: "Contact",
  description:
    "Une question sur nos formations, la boutique ou le financement ? Écrivez-nous ou réservez un appel découverte.",
} as const;

export const CONTACT_INFO = {
  phone: {
    label: "Téléphone",
    display: "06 12 34 56 78",
    href: "tel:+33612345678",
  },
  email: {
    label: "E-mail",
    display: "contact@kbeautyacademy.fr",
    href: "mailto:contact@kbeautyacademy.fr",
  },
  address: {
    label: "Adresse",
    lines: ["12 rue de la Beauté", "75011 Paris, France"],
  },
  hours: {
    label: "Horaires",
    value: "Lun. – Sam. · 9h – 19h",
    note: "Réponse sous 24 h ouvrées",
  },
} as const;

export const CONTACT_SUBJECTS = [
  { value: "formation", label: "Formation" },
  { value: "appel", label: "Réserver un appel découverte" },
  { value: "boutique", label: "Boutique / commande" },
  { value: "financement", label: "Financement" },
  { value: "autre", label: "Autre demande" },
] as const;

export const CONTACT_FORM_COPY = {
  title: "Envoyer un message",
  description:
    "Remplissez le formulaire ci-dessous : nous reviendrons vers vous rapidement.",
  nameLabel: "Nom complet",
  namePlaceholder: "Votre nom",
  emailLabel: "E-mail",
  emailPlaceholder: "vous@exemple.fr",
  phoneLabel: "Téléphone (optionnel)",
  phonePlaceholder: "06 00 00 00 00",
  subjectLabel: "Sujet",
  messageLabel: "Message",
  messagePlaceholder: "Décrivez votre projet ou votre question…",
  submitLabel: "Envoyer le message",
  successTitle: "Message envoyé",
  successMessage:
    "Merci pour votre message. Notre équipe vous répondra dans les meilleurs délais.",
} as const;

export const CONTACT_ASIDE = {
  calloutTitle: "Réserver un appel découverte",
  calloutDescription:
    "15 minutes pour faire le point sur votre projet et trouver la formation adaptée.",
  calloutCta: "Réserver en ligne",
  calloutHref: ROUTES.reserverAppel,
} as const;

export const CONTACT_QUICK_LINKS = [
  { label: "Voir nos formations", href: ROUTES.formations },
  { label: "Questions fréquentes", href: ROUTES.faq },
  { label: "Options de financement", href: ROUTES.financement },
] as const;

export const CONTACT_SOCIAL = FOOTER_SOCIAL_LINKS;
