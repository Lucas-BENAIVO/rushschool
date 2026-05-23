import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons/ArrowRightIcon";
import { WhyUsItem } from "@/components/showcase/why-us/WhyUsItem";
import { A_PROPOS_COMMITMENTS } from "@/lib/a-propos-data";

export function AProposCommitments() {
  const { eyebrow, title, lead, items, aside } = A_PROPOS_COMMITMENTS;

  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--kba-muted)]">
        {eyebrow}
      </p>
      <h2 className="mt-2 font-serif text-2xl font-medium tracking-tight text-[var(--kba-charcoal)] sm:text-3xl">
        {title}
      </h2>
      <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-[var(--kba-muted)] sm:text-base">
        {lead}
      </p>

      <div
        className="mt-6 grid grid-cols-1 gap-6 rounded-2xl p-5 sm:p-6 lg:grid-cols-[1fr_minmax(240px,320px)] lg:gap-8"
        style={{ backgroundColor: "var(--kba-why-us-bg)" }}
      >
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-3">
          {items.map((item) => (
            <WhyUsItem key={item} label={item} />
          ))}
        </ul>

        <aside className="flex flex-col justify-center gap-4 rounded-xl border border-[var(--kba-charcoal)]/6 bg-white/80 p-5">
          <div>
            <p className="font-serif text-4xl font-medium leading-none text-[var(--kba-primary)]">
              {aside.highlight}
            </p>
            <p className="mt-1 text-[13px] font-semibold uppercase tracking-wide text-[var(--kba-charcoal)]">
              {aside.highlightLabel}
            </p>
          </div>
          <p className="text-[14px] leading-relaxed text-[var(--kba-muted)]">
            {aside.description}
          </p>
          <Link
            href={aside.ctaHref}
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-[var(--kba-primary)] transition-colors hover:text-[var(--kba-primary-hover)]"
          >
            {aside.ctaLabel}
            <ArrowRightIcon />
          </Link>
        </aside>
      </div>
    </div>
  );
}
