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
  reserverAppel: "/reserver-un-appel",
  financement: "/financement",
  conditionsGenerales: "/conditions-generales",
  faq: "/faq",
} as const;

export function formationPath(slug: string) {
  return `${ROUTES.formations}/${slug}`;
}

export function boutiquePath(slug: string) {
  return `${ROUTES.boutique}/${slug}`;
}

export function blogPath(slug: string) {
  return `${ROUTES.blog}/${slug}`;
}

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];
