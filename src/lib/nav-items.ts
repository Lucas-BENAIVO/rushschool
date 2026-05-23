import { ROUTES } from "@/lib/routes";

export const NAV_ITEMS = [
  { href: ROUTES.home, label: "Accueil" },
  { href: ROUTES.formations, label: "Formations", hasDropdown: true },
  { href: ROUTES.boutique, label: "Boutique" },
  { href: ROUTES.aPropos, label: "À propos" },
  { href: ROUTES.avisEleves, label: "Avis élèves" },
  { href: ROUTES.blog, label: "Blog" },
  { href: ROUTES.contact, label: "Contact" },
] as const;
