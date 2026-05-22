import { FooterLink } from "@/components/footer/FooterLink";
import type { FooterLinkItem } from "@/lib/footer-links";

type FooterColumnProps = {
  title: string;
  links: FooterLinkItem[];
};

export function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--kba-footer-muted)]">
        {title}
      </h3>
      <ul className="flex flex-col gap-2.5">
        {links.map((link) => (
          <FooterLink key={link.href} href={link.href} label={link.label} />
        ))}
      </ul>
    </div>
  );
}
