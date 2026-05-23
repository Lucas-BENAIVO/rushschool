import { formationPath } from "@/lib/routes";

export const PROMO_BANNER_CONTENT = {
  eyebrow: "2 jours pour changer ton avenir",
  title: "Formation Prothésiste Ongulaire",
  price: "300€",
  oldPrice: "350€",
  ctaLabel: "Réserver maintenant",
  ctaHref: formationPath("prothesiste-ongulaire"),
  note: "Places limitées par session (5 personnes max)",
};

export const PROMO_BANNER_FEATURES = [
  { id: "support", label: "Support inclus", icon: "support" as const },
  { id: "certification", label: "Certification", icon: "certificate" as const },
] as const;

export const PROMO_OFFER_BADGE = {
  line1: "Offre spéciale",
  amount: "-50€",
  line3: "Aujourd'hui",
};

export type PromoGalleryLayout = "wide" | "tall";

export const PROMO_GALLERY_IMAGES = [
  {
    id: "classroom",
    layout: "wide" as PromoGalleryLayout,
    alt: "Salle de formation K Beauty Academy",
    imageFile: "cours.jpg",
  },
  {
    id: "practice",
    layout: "tall" as PromoGalleryLayout,
    alt: "Pratique prothésiste ongulaire",
    imageFile: "nail.jpeg",
  },
  {
    id: "result",
    layout: "tall" as PromoGalleryLayout,
    alt: "Résultat prothésiste ongulaire",
    imageFile: "prothesie-ongulaire.jpg",
  },
] as const;
