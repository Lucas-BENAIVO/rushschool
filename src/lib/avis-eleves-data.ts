import { ROUTES } from "@/lib/routes";
import { HERO_SOCIAL_PROOF, HERO_STATS } from "@/lib/hero-data";
import { RESULTS_CONTENT } from "@/lib/showcase-data";

export type StudentReview = {
  id: string;
  author: string;
  formation: string;
  rating: number;
  text: string;
};

export const AVIS_ELEVES_HEADER = {
  eyebrow: "K Beauty Academy",
  title: "Avis élèves",
  description:
    "Découvrez les retours de nos élèves et les résultats obtenus après nos formations en prothésie ongulaire et extensions de cils.",
} as const;

export const AVIS_ELEVES_SUMMARY = {
  rating: HERO_SOCIAL_PROOF.rating,
  reviewCount: HERO_SOCIAL_PROOF.reviewCount,
  stats: HERO_STATS,
} as const;

export const AVIS_ELEVES_RESULTS = {
  eyebrow: RESULTS_CONTENT.eyebrow,
  title: RESULTS_CONTENT.title,
  description:
    "Glissez le curseur pour comparer le niveau avant la formation et le rendu obtenu après quelques jours de pratique encadrée.",
  beforeImageFile: RESULTS_CONTENT.beforeImageFile,
  afterImageFile: RESULTS_CONTENT.afterImageFile,
  socialProof: RESULTS_CONTENT.socialProof,
} as const;

export const AVIS_ELEVES_REVIEWS: StudentReview[] = [
  {
    id: "sophie-po",
    author: "Sophie M.",
    formation: "Prothésiste ongulaire",
    rating: 5,
    text: "Formation très complète et ultra pratique. Je suis repartie avec une vraie méthode et j'ai enchaîné les clientes dès la semaine suivante.",
  },
  {
    id: "lea-cils",
    author: "Léa D.",
    formation: "Cils à cil",
    rating: 5,
    text: "Les formatrices prennent le temps de corriger chaque geste. J'ai gagné en confiance et mes poses sont beaucoup plus propres.",
  },
  {
    id: "camille-vr",
    author: "Camille R.",
    formation: "Volume russe",
    rating: 5,
    text: "Le rythme est intense mais efficace. Le petit groupe fait vraiment la différence, on progresse vite sans se sentir perdue.",
  },
  {
    id: "manon-na",
    author: "Manon T.",
    formation: "Nail art",
    rating: 5,
    text: "J'ai adoré la partie créative et les astuces pro pour des finitions nettes. Parfait pour compléter ma formation ongles.",
  },
  {
    id: "julie-launch",
    author: "Julie B.",
    formation: "Prothésiste ongulaire",
    rating: 5,
    text: "J'hésitais à me lancer. L'accompagnement m'a rassurée sur la technique et sur l'organisation de mon activité.",
  },
  {
    id: "sarah-cils",
    author: "Sarah K.",
    formation: "Cils à cil",
    rating: 5,
    text: "Contenu clair, ambiance bienveillante et beaucoup de pratique. Je recommande à 100 % pour celles qui veulent se reconvertir.",
  },
];

export const AVIS_ELEVES_CTA = {
  title: "Envie d'obtenir les mêmes résultats ?",
  description:
    "Choisissez la formation adaptée à votre projet et bénéficiez du même accompagnement que nos élèves.",
  primaryLabel: "Voir nos formations",
  primaryHref: ROUTES.formations,
  secondaryLabel: "Réserver un appel",
  secondaryHref: ROUTES.reserverAppel,
} as const;
