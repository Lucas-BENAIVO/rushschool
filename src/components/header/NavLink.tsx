import Link from "next/link";

type NavLinkProps = {
  href: string;
  label: string;
};

export function NavLink({ href, label }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center whitespace-nowrap text-[13px] font-medium tracking-wide text-[var(--kba-charcoal)] transition-colors hover:text-[var(--kba-primary)]"
    >
      {label}
    </Link>
  );
}
