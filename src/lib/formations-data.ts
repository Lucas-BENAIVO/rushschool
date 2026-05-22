import { formationPath } from "@/lib/routes";

export type FormationCardVariant = "primary" | "outline";

export type FormationCardData = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  price: string;
  features: string[];
  ctaLabel: string;
  href: string;
  buttonVariant: FormationCardVariant;
  /** Libellé du fichier attendu dans src/assets/formations/ */
  imageFile: string;
  badge?: "best-seller";
  outlineTextPrimary?: boolean;
};

export const FEATURED_FORMATIONS: FormationCardData[] = [
  {
    id: "prothesiste",
    slug: "prothesiste-ongulaire",
    title: "Prothésiste Ongulaire",
    subtitle: "2 jours intensifs",
    price: "300€",
    features: [
      "Pose gel + chablon",
      "Rallongement",
      "French parfaite",
      "Finitions professionnelles",
    ],
    ctaLabel: "Réserver ma place",
    href: formationPath("prothesiste-ongulaire"),
    buttonVariant: "primary",
    imageFile: "prothesiste-ongulaire.jpg",
    badge: "best-seller",
  },
  {
    id: "cils-cil-a-cil",
    slug: "cils-a-cil",
    title: "Cils : Pose Cil à Cil",
    subtitle: "Formation débutante",
    price: "350€",
    features: [
      "Maîtrise de la pose cil à cil",
      "Isolation parfaite",
      "Effet naturel",
      "Kit inclus",
    ],
    ctaLabel: "Réserver ma place",
    href: formationPath("cils-a-cil"),
    buttonVariant: "outline",
    imageFile: "cils-a-cil.jpg",
  },
  {
    id: "volume-russe",
    slug: "volume-russe",
    title: "Cils : Volume Russe",
    subtitle: "Formation avancée",
    price: "450€",
    features: [
      "Technique volume russe",
      "Éventails faits main",
      "Mapping",
      "Kit inclus",
    ],
    ctaLabel: "Réserver ma place",
    href: formationPath("volume-russe"),
    buttonVariant: "outline",
    imageFile: "volume-russe.jpg",
  },
  {
    id: "nail-art",
    slug: "nail-art",
    title: "Nail Art & Décorations",
    subtitle: "1 jour",
    price: "250€",
    features: [
      "Nail art tendance",
      "Effets spéciaux",
      "Strass, chrome, babyboomer",
      "Atelier pratique",
    ],
    ctaLabel: "Réserver ma place",
    href: formationPath("nail-art"),
    buttonVariant: "outline",
    imageFile: "nail-art.jpg",
    outlineTextPrimary: true,
  },
  {
    id: "business",
    slug: "business-branding",
    title: "Business & Branding",
    subtitle: "100% en ligne",
    price: "200€",
    features: [
      "Créer son activité",
      "Stratégie Instagram",
      "Tarification & clients",
      "Personal branding",
    ],
    ctaLabel: "En savoir plus",
    href: formationPath("business-branding"),
    buttonVariant: "outline",
    imageFile: "business-branding.jpg",
  },
];

export const FORMATIONS_TRUST_ITEMS = [
  { id: "paiement", label: "Paiement en 3x sans frais", icon: "gift" as const },
  { id: "kit", label: "Kit de démarrage inclus", icon: "calendar" as const },
  { id: "support", label: "Support après formation", icon: "support" as const },
  { id: "groupe", label: "Groupe privé d'entraide", icon: "users" as const },
  { id: "acces", label: "Accès à vie aux supports", icon: "document" as const },
] as const;
