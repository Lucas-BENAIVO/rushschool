import Link from "next/link";
import { ChevronDownIcon } from "@/components/icons/ChevronDownIcon";

type NavLinkProps = {
  href: string;
  label: string;
  hasDropdown?: boolean;
};

export function NavLink({ href, label, hasDropdown = false }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-0.5 whitespace-nowrap text-[13px] font-medium tracking-wide text-[var(--kba-charcoal)] transition-colors hover:text-[var(--kba-primary)]"
    >
      {label}
      {hasDropdown && (
        <ChevronDownIcon className="mt-0.5 text-[var(--kba-muted)]" />
      )}
    </Link>
  );
}
