import Link from "next/link";

type FooterLinkProps = {
  href: string;
  label: string;
};

export function FooterLink({ href, label }: FooterLinkProps) {
  return (
    <li>
      <Link
        href={href}
        className="text-[14px] leading-relaxed text-white/90 transition-colors hover:text-[var(--kba-primary)]"
      >
        {label}
      </Link>
    </li>
  );
}
