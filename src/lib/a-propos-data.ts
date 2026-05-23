import { ROUTES } from "@/lib/routes";
import { HERO_FEATURES, HERO_STATS } from "@/lib/hero-data";
import { WHY_US_ITEMS } from "@/lib/showcase-data";

export const A_PROPOS_INTRO = {
  eyebrow: "Notre histoire",
  title: "Une académie née de la pratique",
  paragraphs: [
    "K Beauty Academy accompagne les futures professionnelles de la beauté avec des formations concrètes en prothésie ongulaire et extensions de cils.",
    "Notre objectif : vous transmettre une méthode claire, des gestes sûrs et la confiance nécessaire pour vous lancer rapidement, en institut ou à votre compte.",
    "Chaque session est pensée pour maximiser le temps en pratique, avec des groupes à taille humaine et un suivi qui ne s'arrête pas à la fin du stage.",
  ],
} as const;

export const A_PROPOS_STATS = HERO_STATS;

export const A_PROPOS_VALUES = [
  {
    id: "pratique",
    title: "100 % pratique",
    description:
      "Vous apprenez en manipulant, pas uniquement en théorie. Chaque formation est construite autour de mises en situation réelles.",
  },
  {
    id: "proximite",
    title: "Proximité & suivi",
    description:
      "Des formateurs expérimentés, disponibles pour corriger, conseiller et vous guider dans vos premiers pas professionnels.",
  },
  {
    id: "exigence",
    title: "Exigence bienveillante",
    description:
      "Un cadre exigeant pour viser un rendu professionnel, dans une ambiance encourageante et bienveillante.",
  },
  {
    id: "communaute",
    title: "Communauté active",
    description:
      "Rejoignez un réseau d'élèves et d'anciennes élèves pour échanger, progresser et rester motivées au quotidien.",
  },
] as const;

export const A_PROPOS_APPROACH = {
  eyebrow: "Notre pédagogie",
  title: "Ce qui nous distingue",
  lead: "Une méthode claire et intensive : vous pratiquez dès le premier jour, avec des objectifs précis à chaque étape du parcours.",
  items: [
    {
      ...HERO_FEATURES[0],
      description:
        "Des journées structurées pour progresser vite, avec des exercices guidés et des corrections en direct.",
    },
    {
      ...HERO_FEATURES[1],
      description:
        "Une attestation délivrée à l'issue de la formation, pour valoriser votre parcours auprès de vos clientes.",
    },
    {
      ...HERO_FEATURES[2],
      description:
        "Conseils personnalisés, retours sur vos poses et accès à une communauté d'élèves pour continuer à progresser.",
    },
  ],
} as const;

export const A_PROPOS_COMMITMENTS = {
  eyebrow: "Nos engagements",
  title: "Pourquoi nous choisir",
  lead: "Nous misons sur la qualité de l'enseignement, la proximité et des parcours adaptés à votre rythme.",
  items: WHY_US_ITEMS,
  aside: {
    highlight: "+2500",
    highlightLabel: "élèves formées",
    description:
      "Des professionnelles qui ont choisi K Beauty Academy pour se former, se lancer et développer leur activité.",
    ctaLabel: "Voir les avis élèves",
    ctaHref: ROUTES.avisEleves,
  },
} as const;

export const A_PROPOS_CTA = {
  title: "Prête à vous lancer ?",
  description:
    "Découvrez nos formations ou échangez avec nous pour trouver le parcours adapté à votre projet.",
  primaryLabel: "Voir nos formations",
  primaryHref: ROUTES.formations,
  secondaryLabel: "Nous contacter",
  secondaryHref: ROUTES.contact,
} as const;
