/** Chemins de l'application — source unique pour la navigation */
export const ROUTES = {
  home: "/",
  formations: "/formations",
  boutique: "/boutique",
  aPropos: "/a-propos",
  avisEleves: "/avis-eleves",
  blog: "/blog",
  contact: "/contact",
  recherche: "/recherche",
  panier: "/panier",
  offreLancement: "/#offre",
  reserverAppel: "/contact",
} as const;

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];
