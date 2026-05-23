import { blogPath, ROUTES } from "@/lib/routes";

export type BlogCategory = {
  slug: string;
  label: string;
};

export type BlogArticle = {
  id: string;
  slug: string;
  categorySlug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  imageFile: string;
  href: string;
  body: string[];
  highlights: string[];
};

export const BLOG_ALL_CATEGORY = "all" as const;

export type BlogCategoryFilter = typeof BLOG_ALL_CATEGORY | string;

export const BLOG_CATEGORIES: BlogCategory[] = [
  { slug: "ongles", label: "Ongles" },
  { slug: "cils", label: "Cils" },
  { slug: "formations", label: "Formations" },
  { slug: "conseils", label: "Conseils pro" },
];

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: "debuter-po",
    slug: "comment-debuter-prothesiste-ongulaire",
    categorySlug: "formations",
    title: "Comment débuter en prothésie ongulaire",
    excerpt:
      "Par où commencer, quoi apprendre en priorité et comment gagner en confiance dès vos premières poses.",
    date: "8 mars 2025",
    readTime: "6 min",
    imageFile: "prothesie-ongulaire.jpg",
    href: blogPath("comment-debuter-prothesiste-ongulaire"),
    highlights: [
      "Choisir une formation pratique et encadrée",
      "Maîtriser les bases avant le nail art",
      "S'équiper progressivement",
    ],
    body: [
      "Se lancer en prothésie ongulaire peut faire peur quand on débute. Pourtant, avec une méthode claire et un accompagnement adapté, il est possible de progresser vite et sereinement.",
      "La priorité est de comprendre la préparation de l'ongle naturel, la pose gel et les finitions. Ce socle technique vous évitera de nombreuses reprises par la suite.",
      "Chez K Beauty Academy, nos stages intensifs sont pensés pour maximiser le temps en pratique : vous repartez avec des gestes concrets, applicables en salon ou à domicile.",
      "Enfin, prenez le temps de vous entourer : communauté d'élèves, retours de formateurs et entraînement régulier font toute la différence sur vos premiers mois d'activité.",
    ],
  },
  {
    id: "erreurs-cils",
    slug: "5-erreurs-a-eviter-en-extensions-cils",
    categorySlug: "cils",
    title: "5 erreurs à éviter en extensions de cils",
    excerpt:
      "Isolation, pose, colle : les points de vigilance pour un rendu propre, confortable et durable.",
    date: "2 mars 2025",
    readTime: "5 min",
    imageFile: "cilacil.jpeg",
    href: blogPath("5-erreurs-a-eviter-en-extensions-cils"),
    highlights: [
      "Mal isoler les cils naturels",
      "Surcharger le volume trop tôt",
      "Négliger l'hygiène et la consultation",
    ],
    body: [
      "Les extensions de cils demandent précision et régularité. La plupart des difficultés au départ viennent de quelques erreurs faciles à corriger avec de la pratique guidée.",
      "La première erreur : un isolement insuffisant. Un cils naturel mal séparé peut entraîner inconfort et chute prématurée des extensions.",
      "Ensuite, évitez de vouloir aller trop vite sur des volumes complexes avant d'être à l'aise en cil à cil. La qualité de mapping et d'angle de pose reste prioritaire.",
      "Enfin, prenez le temps de la consultation : comprendre les attentes de la cliente et adapter la technique garantit un résultat harmonieux et fidèle.",
    ],
  },
  {
    id: "kit-debutante",
    slug: "kit-indispensable-pour-debuter",
    categorySlug: "conseils",
    title: "Le kit indispensable pour bien débuter",
    excerpt:
      "Les outils et produits vraiment utiles pour vos premières prestations, sans suréquiper votre valise.",
    date: "24 février 2025",
    readTime: "4 min",
    imageFile: "kit.jpg",
    href: blogPath("kit-indispensable-pour-debuter"),
    highlights: [
      "Investir dans l'essentiel",
      "Privilégier la qualité pro",
      "Compléter au fil de l'expérience",
    ],
    body: [
      "Quand on débute, on a tendance à vouloir tout acheter. Mieux vaut un kit cohérent, professionnel et adapté à votre formation.",
      "Côté ongles : limes, ponceuses, gels de base, pinceaux et lampes fiables sont incontournables. Côté cils : pinces, colles adaptées et patches de qualité font la différence.",
      "Notre boutique regroupe des kits pensés pour accompagner les élèves après la formation, avec un bon rapport qualité/prix.",
      "Gardez en tête que votre matériel évoluera avec votre clientèle : commencez solide, puis affinez selon vos prestations les plus demandées.",
    ],
  },
  {
    id: "nail-art-tendances",
    slug: "nail-art-tendances-saison",
    categorySlug: "ongles",
    title: "Nail art : les tendances de la saison",
    excerpt:
      "French moderne, chrome doux, formes almond : ce qui plaît aux clientes en ce moment.",
    date: "15 février 2025",
    readTime: "5 min",
    imageFile: "nail.jpeg",
    href: blogPath("nail-art-tendances-saison"),
    highlights: [
      "French revisitée et minimaliste",
      "Effets chrome discrets",
      "Formes harmonieuses et naturelles",
    ],
    body: [
      "Le nail art reste un vrai levier pour fidéliser votre clientèle et augmenter le panier moyen de vos prestations.",
      "Cette saison, les clientes recherchent des finitions élégantes : french fine, transparences, touches de couleur et effets lumineux maîtrisés.",
      "L'important est de proposer des créations réalisables en temps de prestation, avec une tenue professionnelle. Mieux vaut une signature sobre et nette qu'un motif trop chargé.",
      "En formation nail art, nous travaillons la précision du trait, le choix des couleurs et les finitions qui subliment la pose gel.",
    ],
  },
  {
    id: "financer-formation",
    slug: "financer-sa-formation-beaute",
    categorySlug: "formations",
    title: "Financer sa formation beauté sereinement",
    excerpt:
      "Paiement en plusieurs fois, planification et retour sur investissement : nos conseils pour se lancer.",
    date: "5 février 2025",
    readTime: "4 min",
    imageFile: "cours.jpg",
    href: blogPath("financer-sa-formation-beaute"),
    highlights: [
      "Anticiper son budget matériel",
      "Paiement échelonné possible",
      "Viser un retour rapide",
    ],
    body: [
      "Investir dans une formation est une étape importante. Bien la préparer permet de se concentrer sur l'apprentissage sans stress financier.",
      "Listez le coût de la formation, du kit de départ et des premiers frais d'activité. Chez K Beauty Academy, des solutions de financement peuvent vous aider à étaler l'investissement.",
      "Pensez aussi à votre calendrier de lancement : quelques prestations régulières suffisent souvent à amortir rapidement le coût du stage.",
      "Enfin, choisissez une formation qui vous donne une vraie méthode commercialisable dès la sortie — c'est le meilleur accélérateur de rentabilité.",
    ],
  },
  {
    id: "premieres-prestations",
    slug: "reussir-ses-premieres-prestations",
    categorySlug: "conseils",
    title: "Réussir ses premières prestations",
    excerpt:
      "Gérer le stress, le timing et la relation cliente pour des rendez-vous fluides dès le début.",
    date: "28 janvier 2025",
    readTime: "6 min",
    imageFile: "feed1.jpg",
    href: blogPath("reussir-ses-premieres-prestations"),
    highlights: [
      "Préparer sa cabine à l'avance",
      "Annoncer un temps réaliste",
      "Photographier ses résultats",
    ],
    body: [
      "Vos premières clientes sont souvent les plus stressantes — et les plus formatrices. Une bonne organisation fait toute la différence.",
      "Avant le rendez-vous, préparez votre poste, vérifiez vos produits et relisez les étapes de la prestation. Mieux vaut un temps légèrement plus large que de se sentir pressée.",
      "Pendant la prestation, expliquez ce que vous faites : cela rassure la cliente et renforce votre posture professionnelle.",
      "Après la séance, prenez des photos propres (avec accord) pour constituer votre portfolio. Ces visuels vous serviront sur les réseaux et pour gagner en crédibilité.",
    ],
  },
];

export function getBlogCategoryBySlug(slug: string) {
  return BLOG_CATEGORIES.find((category) => category.slug === slug);
}

export function getBlogCategoryLabel(categorySlug: string) {
  return (
    BLOG_CATEGORIES.find((category) => category.slug === categorySlug)?.label ??
    categorySlug
  );
}

export function getBlogArticlesByCategory(category: BlogCategoryFilter) {
  if (category === BLOG_ALL_CATEGORY) {
    return BLOG_ARTICLES;
  }

  return BLOG_ARTICLES.filter((article) => article.categorySlug === category);
}

export function isBlogCategoryFilter(value: string): value is BlogCategoryFilter {
  if (value === BLOG_ALL_CATEGORY) {
    return true;
  }

  return BLOG_CATEGORIES.some((category) => category.slug === value);
}

export function getBlogArticleBySlug(slug: string) {
  return BLOG_ARTICLES.find((article) => article.slug === slug);
}

export function getAllBlogSlugs() {
  return BLOG_ARTICLES.map((article) => article.slug);
}

export const BLOG_CTA = {
  title: "Envie d'aller plus loin ?",
  description:
    "Découvrez nos formations intensives et bénéficiez d'un accompagnement personnalisé.",
  primaryLabel: "Voir nos formations",
  primaryHref: ROUTES.formations,
  secondaryLabel: "Nous contacter",
  secondaryHref: ROUTES.contact,
} as const;
