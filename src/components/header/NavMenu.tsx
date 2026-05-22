import { NavLink } from "@/components/header/NavLink";
import { ROUTES } from "@/lib/routes";

const NAV_ITEMS = [
  { href: ROUTES.home, label: "Accueil" },
  { href: ROUTES.formations, label: "Formations", hasDropdown: true },
  { href: ROUTES.boutique, label: "Boutique" },
  { href: ROUTES.aPropos, label: "À propos" },
  { href: ROUTES.avisEleves, label: "Avis élèves" },
  { href: ROUTES.blog, label: "Blog" },
  { href: ROUTES.contact, label: "Contact" },
] as const;

export function NavMenu() {
  return (
    <nav
      className="hidden items-center gap-7 lg:flex"
      aria-label="Navigation principale"
    >
      {NAV_ITEMS.map((item) => (
        <NavLink
          key={item.href}
          href={item.href}
          label={item.label}
          hasDropdown={"hasDropdown" in item ? item.hasDropdown : false}
        />
      ))}
    </nav>
  );
}
