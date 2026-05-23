import { NavLink } from "@/components/header/NavLink";
import { NAV_ITEMS } from "@/lib/nav-items";

export function NavMenu() {
  return (
    <nav
      className="flex items-center gap-7"
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
