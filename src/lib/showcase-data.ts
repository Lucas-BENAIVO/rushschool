import { ROUTES, boutiquePath } from "@/lib/routes";

export const RESULTS_CONTENT = {
  eyebrow: "Résultats réels",
  title: "Elles ont changé de vie grâce à nos formations",
  ctaLabel: "Voir tous les témoignages",
  ctaHref: ROUTES.avisEleves,
  socialProof: "+2500 élèves satisfaites",
  beforeImageFile: "avant.jpg",
  afterImageFile: "apres.jpg",
};

export const SHOP_CONTENT = {
  eyebrow: "Boutique professionnelle",
  title: "Tout le matériel pour réussir",
  ctaLabel: "Voir toute la boutique",
  ctaHref: ROUTES.boutique,
};

export const SHOP_PRODUCTS = [
  {
    id: "kit-ongles",
    title: "Kit Prothésiste Ongulaire",
    subtitle: "Ongulaire",
    price: "89,99 €",
    href: boutiquePath("kits-ongles"),
    imageFile: "kit.jpg",
  },
  {
    id: "kit-cils",
    title: "Kit Cil à Cil Complet",
    subtitle: "Complet",
    price: "69,99 €",
    href: boutiquePath("kits-cils"),
    imageFile: "kit2.jpg",
  },
  {
    id: "lampe-uv",
    title: "Lampe UV/LED Professionnelle",
    subtitle: "Professionnelle",
    price: "49,99 €",
    href: boutiquePath("materiel"),
    imageFile: "kit3.jpg",
  },
] as const;

export const WHY_US_CONTENT = {
  eyebrow: "Pourquoi nous choisir ?",
  ctaLabel: "Réserver un appel",
  ctaHref: ROUTES.reserverAppel,
};

export const WHY_US_ITEMS = [
  "Formations 100% pratiques",
  "Format intensif & efficace",
  "Petits groupes",
  "Formateurs expérimentés",
  "Certification incluse",
  "Suivi personnalisé",
  "Finançable en plusieurs fois",
] as const;
