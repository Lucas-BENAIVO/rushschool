import { NavLink } from "@/components/header/NavLink";

const NAV_ITEMS = [
  { href: "/", label: "Accueil" },
  { href: "/formations", label: "Formations", hasDropdown: true },
  { href: "/boutique", label: "Boutique" },
  { href: "/a-propos", label: "À propos" },
  { href: "/avis-eleves", label: "Avis élèves" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
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
