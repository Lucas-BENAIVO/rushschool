import { ROUTES } from "@/lib/routes";
import { CONTACT_INFO } from "@/lib/contact-data";

export const RESERVER_APPEL_HEADER = {
  eyebrow: "K Beauty Academy",
  title: "Réserver un appel",
  description:
    "Un échange gratuit de 15 minutes pour faire le point sur votre projet et identifier la formation la plus adaptée.",
} as const;

export const RESERVER_APPEL_STEPS = [
  {
    id: "form",
    title: "1. Vous remplissez le formulaire",
    description:
      "Indiquez vos coordonnées, la formation qui vous intéresse et vos disponibilités.",
  },
  {
    id: "confirm",
    title: "2. Nous vous recontactons",
    description:
      "Notre équipe vous propose un créneau par téléphone ou par e-mail sous 24 h ouvrées.",
  },
  {
    id: "call",
    title: "3. Appel découverte",
    description:
      "15 minutes pour répondre à vos questions et vous orienter vers la bonne formation.",
  },
] as const;

export const RESERVER_APPEL_BENEFITS = [
  "Conseils personnalisés selon votre niveau",
  "Présentation des formations et des tarifs",
  "Réponses sur le financement et le matériel",
  "Sans engagement",
] as const;

export const RESERVER_APPEL_FORMATION_OPTIONS = [
  { value: "prothesiste", label: "Prothésiste ongulaire" },
  { value: "cils", label: "Extensions de cils" },
  { value: "nail-art", label: "Nail art" },
  { value: "business", label: "Business & branding" },
  { value: "undecided", label: "Je ne sais pas encore" },
] as const;

export const RESERVER_APPEL_AVAILABILITY = [
  { value: "matin", label: "Matin (9h – 12h)" },
  { value: "apres-midi", label: "Après-midi (12h – 17h)" },
  { value: "soir", label: "Fin de journée (17h – 19h)" },
  { value: "flexible", label: "Flexible" },
] as const;

export const RESERVER_APPEL_FORM_COPY = {
  title: "Demande de rappel",
  description:
    "Laissez-nous vos informations : nous vous proposons un créneau pour votre appel découverte.",
  nameLabel: "Nom complet",
  namePlaceholder: "Votre nom",
  emailLabel: "E-mail",
  emailPlaceholder: "vous@exemple.fr",
  phoneLabel: "Téléphone",
  phonePlaceholder: "06 00 00 00 00",
  formationLabel: "Formation envisagée",
  availabilityLabel: "Disponibilités",
  messageLabel: "Votre projet (optionnel)",
  messagePlaceholder: "Parlez-nous de votre objectif, de votre niveau…",
  submitLabel: "Réserver mon appel",
  successTitle: "Demande enregistrée",
  successMessage:
    "Merci ! Nous vous contactons très vite pour confirmer votre créneau d'appel découverte.",
} as const;

export const RESERVER_APPEL_ASIDE = {
  duration: "15 min",
  durationLabel: "Appel offert",
  contactLabel: "Besoin d'une réponse immédiate ?",
  contactPhone: CONTACT_INFO.phone,
  contactEmail: CONTACT_INFO.email,
  formationsCta: "Voir toutes les formations",
  formationsHref: ROUTES.formations,
  contactCta: "Page contact",
  contactHref: ROUTES.contact,
} as const;
