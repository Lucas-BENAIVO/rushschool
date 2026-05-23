import { ROUTES, boutiquePath } from "@/lib/routes";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export const HOME_BREADCRUMB: BreadcrumbItem = {
  label: "Accueil",
  href: ROUTES.home,
};

export function formationsCatalogBreadcrumbs(): BreadcrumbItem[] {
  return [HOME_BREADCRUMB, { label: "Formations" }];
}

export function formationDetailBreadcrumbs(title: string): BreadcrumbItem[] {
  return [
    HOME_BREADCRUMB,
    { label: "Formations", href: ROUTES.formations },
    { label: title },
  ];
}

export function aProposBreadcrumbs(): BreadcrumbItem[] {
  return [HOME_BREADCRUMB, { label: "À propos" }];
}

export function avisElevesBreadcrumbs(): BreadcrumbItem[] {
  return [HOME_BREADCRUMB, { label: "Avis élèves" }];
}

export function contactBreadcrumbs(): BreadcrumbItem[] {
  return [HOME_BREADCRUMB, { label: "Contact" }];
}

export function panierBreadcrumbs(): BreadcrumbItem[] {
  return [HOME_BREADCRUMB, { label: "Panier" }];
}

export function reserverAppelBreadcrumbs(): BreadcrumbItem[] {
  return [HOME_BREADCRUMB, { label: "Réserver un appel" }];
}

export function blogCatalogBreadcrumbs(): BreadcrumbItem[] {
  return [HOME_BREADCRUMB, { label: "Blog" }];
}

export function blogArticleBreadcrumbs(title: string): BreadcrumbItem[] {
  return [
    HOME_BREADCRUMB,
    { label: "Blog", href: ROUTES.blog },
    { label: title },
  ];
}

export function boutiqueCatalogBreadcrumbs(): BreadcrumbItem[] {
  return [HOME_BREADCRUMB, { label: "Boutique" }];
}

export function boutiqueCategoryBreadcrumbs(title: string): BreadcrumbItem[] {
  return [
    HOME_BREADCRUMB,
    { label: "Boutique", href: ROUTES.boutique },
    { label: title },
  ];
}

export function boutiqueProductBreadcrumbs(
  productTitle: string,
  categoryTitle: string,
  categorySlug: string,
): BreadcrumbItem[] {
  return [
    HOME_BREADCRUMB,
    { label: "Boutique", href: ROUTES.boutique },
    { label: categoryTitle, href: boutiquePath(categorySlug) },
    { label: productTitle },
  ];
}

export function pageBreadcrumbs(
  title: string,
  parent?: BreadcrumbItem,
): BreadcrumbItem[] {
  if (parent) {
    return [HOME_BREADCRUMB, parent, { label: title }];
  }

  return [HOME_BREADCRUMB, { label: title }];
}
