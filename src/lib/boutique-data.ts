import { boutiquePath } from "@/lib/routes";

export type BoutiqueCategory = {
  slug: string;
  title: string;
  description: string;
};

export type BoutiqueProduct = {
  id: string;
  slug: string;
  categorySlug: string;
  title: string;
  subtitle: string;
  price: string;
  description: string;
  features: string[];
  imageFile: string;
  href: string;
};

export const BOUTIQUE_ALL_CATEGORY = "all" as const;

export type BoutiqueCategoryFilter = typeof BOUTIQUE_ALL_CATEGORY | string;

export const BOUTIQUE_CATEGORIES: BoutiqueCategory[] = [
  {
    slug: "kits-ongles",
    title: "Kits Ongles",
    description:
      "Tout le matériel essentiel pour débuter ou compléter votre kit prothésiste ongulaire.",
  },
  {
    slug: "kits-cils",
    title: "Kits Cils",
    description:
      "Kits complets pour la pose cil à cil et un rendu professionnel dès les premières applications.",
  },
  {
    slug: "materiel",
    title: "Matériel",
    description:
      "Équipements professionnels sélectionnés pour un usage en formation ou en institut.",
  },
  {
    slug: "soins-accessoires",
    title: "Soldes & Accessoires",
    description:
      "Soins, accessoires et indispensables du quotidien pour vos clientes.",
  },
];

export const BOUTIQUE_PRODUCTS: BoutiqueProduct[] = [
  {
    id: "kit-ongles",
    slug: "kit-prothesiste-ongulaire",
    categorySlug: "kits-ongles",
    title: "Kit Prothésiste Ongulaire",
    subtitle: "Ongulaire",
    price: "89,99 €",
    description:
      "Un kit complet pour pratiquer la prothésie ongulaire : les bases indispensables pour poser, structurer et finir vos poses en toute confiance.",
    features: [
      "Gels et produits de structure",
      "Pinceaux et accessoires de finition",
      "Idéal après la formation prothésiste",
      "Qualité professionnelle",
    ],
    imageFile: "kit.jpg",
    href: boutiquePath("kit-prothesiste-ongulaire"),
  },
  {
    id: "kit-cils",
    slug: "kit-cils-complet",
    categorySlug: "kits-cils",
    title: "Kit Cil à Cil Complet",
    subtitle: "Complet",
    price: "69,99 €",
    description:
      "Le kit idéal pour démarrer en extensions de cils : pose cil à cil, isolation et finitions soignées.",
    features: [
      "Cils et colles adaptées",
      "Pinces et accessoires de pose",
      "Format prêt à l'emploi",
      "Parfait pour les débutantes",
    ],
    imageFile: "kit2.jpg",
    href: boutiquePath("kit-cils-complet"),
  },
  {
    id: "lampe-uv",
    slug: "lampe-uv-led",
    categorySlug: "materiel",
    title: "Lampe UV/LED Professionnelle",
    subtitle: "Professionnelle",
    price: "49,99 €",
    description:
      "Lampe UV/LED fiable pour catalyser vos gels et résines, en cabine ou à domicile.",
    features: [
      "Séchage rapide et uniforme",
      "Format adapté au travail quotidien",
      "Utilisation formation & institut",
      "Compacte et pratique",
    ],
    imageFile: "kit3.jpg",
    href: boutiquePath("lampe-uv-led"),
  },
  {
    id: "huile-cuticules",
    slug: "huile-cuticules",
    categorySlug: "soins-accessoires",
    title: "Huile Cuticules Nourrissante",
    subtitle: "Soin",
    price: "12,99 €",
    description:
      "Huile légère pour nourrir les cuticules et sublimer la finition de vos poses.",
    features: [
      "Application facile",
      "Finition soignée",
      "Format cabine",
      "Convient aux clientes régulières",
    ],
    imageFile: "huile.jpg",
    href: boutiquePath("huile-cuticules"),
  },
  {
    id: "lime-premium",
    slug: "lime-premium",
    categorySlug: "soins-accessoires",
    title: "Lime Premium 100/180",
    subtitle: "Accessoire",
    price: "8,99 €",
    description:
      "Lime professionnelle double grain pour préparer et affiner vos poses gel et résine.",
    features: [
      "Grain 100/180",
      "Ergonomie professionnelle",
      "Longue durée d'utilisation",
      "Indispensable en prestation",
    ],
    imageFile: "lime.jpg",
    href: boutiquePath("lime-premium"),
  },
];

export function getBoutiqueCategoryBySlug(slug: string) {
  return BOUTIQUE_CATEGORIES.find((category) => category.slug === slug);
}

export function getBoutiqueProductBySlug(slug: string) {
  return BOUTIQUE_PRODUCTS.find((product) => product.slug === slug);
}

export function getBoutiqueProductsByCategory(categorySlug: string) {
  return BOUTIQUE_PRODUCTS.filter(
    (product) => product.categorySlug === categorySlug,
  );
}

export function getBoutiqueProductsByCategoryFilter(
  category: BoutiqueCategoryFilter,
) {
  if (category === BOUTIQUE_ALL_CATEGORY) {
    return BOUTIQUE_PRODUCTS;
  }

  return getBoutiqueProductsByCategory(category);
}

export function isBoutiqueCategoryFilter(
  value: string,
): value is BoutiqueCategoryFilter {
  if (value === BOUTIQUE_ALL_CATEGORY) {
    return true;
  }

  return BOUTIQUE_CATEGORIES.some((category) => category.slug === value);
}

export type BoutiqueEntry =
  | { type: "category"; category: BoutiqueCategory }
  | { type: "product"; product: BoutiqueProduct };

export function getBoutiqueEntryBySlug(slug: string): BoutiqueEntry | null {
  const category = getBoutiqueCategoryBySlug(slug);
  if (category) {
    return { type: "category", category };
  }

  const product = getBoutiqueProductBySlug(slug);
  if (product) {
    return { type: "product", product };
  }

  return null;
}

export function getAllBoutiqueSlugs() {
  const categorySlugs = BOUTIQUE_CATEGORIES.map((category) => category.slug);
  const productSlugs = BOUTIQUE_PRODUCTS.map((product) => product.slug);
  return [...categorySlugs, ...productSlugs];
}
