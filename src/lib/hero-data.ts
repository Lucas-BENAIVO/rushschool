import { ROUTES, formationPath } from "@/lib/routes";

export const HERO_FEATURES = [
  {
    id: "intensives",
    title: "Formations intensives",
    description: "Apprenez vite, maîtrisez l'essentiel",
    icon: "hand" as const,
  },
  {
    id: "certification",
    title: "Certification reconnue",
    description: "Attestations à la fin de la formation",
    icon: "certificate" as const,
  },
  {
    id: "accompagnement",
    title: "Accompagnement",
    description: "Suivi, conseils et communauté privée",
    icon: "support" as const,
  },
] as const;

export const HERO_STATS = [
  { id: "eleves", value: "+2500", label: "Élèves formées" },
  { id: "satisfaction", value: "98%", label: "Taux de satisfaction", highlight: true },
  { id: "reussite", value: "100%", label: "De réussite", highlight: true },
] as const;

export const HERO_PROMO_CARD = {
  title: "Formation Prothésiste Ongulaire",
  subtitle: "2 jours intensifs",
  price: "300€",
  href: formationPath("prothesiste-ongulaire"),
  imageAlt: "Formation prothésiste ongulaire en pratique",
};

export const HERO_SOCIAL_PROOF = {
  rating: 4.9,
  reviewCount: "+2500 élèves déjà formés avec succès",
};
