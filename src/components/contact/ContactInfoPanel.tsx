import Link from "next/link";
import type { ReactNode } from "react";
import { PhoneIcon } from "@/components/icons/PhoneIcon";
import {
  CONTACT_ASIDE,
  CONTACT_INFO,
  CONTACT_QUICK_LINKS,
  CONTACT_SOCIAL,
} from "@/lib/contact-data";

function InfoBlock({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-xl border border-[var(--kba-charcoal)]/8 bg-white p-4 sm:p-5">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--kba-muted)]">
        {title}
      </p>
      <div className="mt-2 text-[14px] leading-relaxed text-[var(--kba-charcoal)]">
        {children}
      </div>
    </div>
  );
}

export function ContactInfoPanel() {
  const { phone, email, address, hours } = CONTACT_INFO;

  return (
    <aside className="flex flex-col gap-5 lg:sticky lg:top-24">
      <div
        className="rounded-2xl p-5 sm:p-6"
        style={{ backgroundColor: "var(--kba-why-us-bg)" }}
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--kba-primary)]/15 text-[var(--kba-primary)]">
          <PhoneIcon />
        </div>
        <h2 className="mt-4 font-serif text-xl font-medium text-[var(--kba-charcoal)]">
          {CONTACT_ASIDE.calloutTitle}
        </h2>
        <p className="mt-2 text-[14px] leading-relaxed text-[var(--kba-muted)]">
          {CONTACT_ASIDE.calloutDescription}
        </p>
        <Link
          href={CONTACT_ASIDE.calloutHref}
          className="mt-5 inline-flex h-11 w-full items-center justify-center rounded-lg bg-[var(--kba-primary)] text-[14px] font-semibold text-white transition-colors hover:bg-[var(--kba-primary-hover)]"
        >
          {CONTACT_ASIDE.calloutCta}
        </Link>
      </div>

      <div className="flex flex-col gap-3">
        <InfoBlock title={phone.label}>
          <a
            href={phone.href}
            className="font-semibold text-[var(--kba-primary)] transition-colors hover:text-[var(--kba-primary-hover)]"
          >
            {phone.display}
          </a>
        </InfoBlock>

        <InfoBlock title={email.label}>
          <a
            href={email.href}
            className="font-semibold text-[var(--kba-primary)] transition-colors hover:text-[var(--kba-primary-hover)]"
          >
            {email.display}
          </a>
        </InfoBlock>

        <InfoBlock title={address.label}>
          {address.lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </InfoBlock>

        <InfoBlock title={hours.label}>
          <p className="font-medium">{hours.value}</p>
          <p className="mt-1 text-[13px] text-[var(--kba-muted)]">{hours.note}</p>
        </InfoBlock>
      </div>

      <div className="rounded-2xl border border-[var(--kba-charcoal)]/8 bg-white p-4 sm:p-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--kba-muted)]">
          Liens utiles
        </p>
        <ul className="mt-3 flex flex-col gap-2">
          {CONTACT_QUICK_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[14px] font-medium text-[var(--kba-primary)] transition-colors hover:text-[var(--kba-primary-hover)]"
              >
                {link.label} →
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl border border-[var(--kba-charcoal)]/8 bg-white p-4 sm:p-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--kba-muted)]">
          Réseaux sociaux
        </p>
        <ul className="mt-3 flex flex-col gap-2">
          {CONTACT_SOCIAL.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] font-medium text-[var(--kba-charcoal)] transition-colors hover:text-[var(--kba-primary)]"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
