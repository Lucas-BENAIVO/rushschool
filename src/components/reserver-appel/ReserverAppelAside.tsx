import Link from "next/link";
import { CheckIcon } from "@/components/icons/CheckIcon";
import {
  RESERVER_APPEL_ASIDE,
  RESERVER_APPEL_BENEFITS,
} from "@/lib/reserver-appel-data";

export function ReserverAppelAside() {
  const { duration, durationLabel, contactLabel, contactPhone, contactEmail } =
    RESERVER_APPEL_ASIDE;

  return (
    <aside className="flex flex-col gap-5 lg:sticky lg:top-24">
      <div
        className="rounded-2xl p-5 text-center sm:p-6"
        style={{ backgroundColor: "var(--kba-why-us-bg)" }}
      >
        <p className="font-serif text-5xl font-medium leading-none text-[var(--kba-primary)]">
          {duration}
        </p>
        <p className="mt-2 text-[13px] font-semibold uppercase tracking-wide text-[var(--kba-charcoal)]">
          {durationLabel}
        </p>
      </div>

      <div className="rounded-2xl border border-[var(--kba-charcoal)]/8 bg-white p-5 sm:p-6">
        <h2 className="font-serif text-lg font-medium text-[var(--kba-charcoal)]">
          Ce que vous obtenez
        </h2>
        <ul className="mt-4 flex flex-col gap-3">
          {RESERVER_APPEL_BENEFITS.map((benefit) => (
            <li
              key={benefit}
              className="flex items-start gap-2 text-[13px] leading-snug text-[var(--kba-charcoal)]"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--kba-primary)]/15 text-[var(--kba-primary)]">
                <CheckIcon />
              </span>
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl border border-[var(--kba-charcoal)]/8 bg-white p-4 sm:p-5">
        <p className="text-[13px] font-semibold text-[var(--kba-charcoal)]">
          {contactLabel}
        </p>
        <div className="mt-3 flex flex-col gap-2">
          <a
            href={contactPhone.href}
            className="text-[14px] font-medium text-[var(--kba-primary)] transition-colors hover:text-[var(--kba-primary-hover)]"
          >
            {contactPhone.display}
          </a>
          <a
            href={contactEmail.href}
            className="text-[14px] font-medium text-[var(--kba-primary)] transition-colors hover:text-[var(--kba-primary-hover)]"
          >
            {contactEmail.display}
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Link
          href={RESERVER_APPEL_ASIDE.formationsHref}
          className="inline-flex h-10 items-center justify-center rounded-lg border border-[var(--kba-charcoal)]/15 text-[13px] font-semibold text-[var(--kba-charcoal)] transition-colors hover:border-[var(--kba-primary)] hover:text-[var(--kba-primary)]"
        >
          {RESERVER_APPEL_ASIDE.formationsCta}
        </Link>
        <Link
          href={RESERVER_APPEL_ASIDE.contactHref}
          className="inline-flex h-10 items-center justify-center text-[13px] font-semibold text-[var(--kba-muted)] transition-colors hover:text-[var(--kba-primary)]"
        >
          {RESERVER_APPEL_ASIDE.contactCta} →
        </Link>
      </div>
    </aside>
  );
}
