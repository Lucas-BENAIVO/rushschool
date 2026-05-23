import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons/ArrowRightIcon";
import { AVIS_ELEVES_CTA } from "@/lib/avis-eleves-data";

export function AvisElevesCta() {
  const { title, description, primaryLabel, primaryHref, secondaryLabel, secondaryHref } =
    AVIS_ELEVES_CTA;

  return (
    <div className="rounded-2xl border border-[var(--kba-charcoal)]/8 bg-white px-5 py-8 text-center shadow-[0_4px_24px_rgba(0,0,0,0.05)] sm:px-10 sm:py-10">
      <h2 className="font-serif text-2xl font-medium tracking-tight text-[var(--kba-charcoal)] sm:text-3xl">
        {title}
      </h2>
      <p className="mx-auto mt-3 max-w-lg text-[15px] leading-relaxed text-[var(--kba-muted)]">
        {description}
      </p>
      <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
        <Link
          href={primaryHref}
          className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[var(--kba-primary)] px-6 text-[14px] font-semibold text-white transition-colors hover:bg-[var(--kba-primary-hover)] sm:w-auto"
        >
          {primaryLabel}
          <ArrowRightIcon />
        </Link>
        <Link
          href={secondaryHref}
          className="inline-flex h-11 w-full items-center justify-center rounded-lg border border-[var(--kba-charcoal)]/15 px-6 text-[14px] font-semibold text-[var(--kba-charcoal)] transition-colors hover:border-[var(--kba-primary)] hover:text-[var(--kba-primary)] sm:w-auto"
        >
          {secondaryLabel}
        </Link>
      </div>
    </div>
  );
}
