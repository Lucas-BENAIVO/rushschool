import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons/ArrowRightIcon";
import { ResultsSocialProof } from "@/components/showcase/results/ResultsSocialProof";
import { RESULTS_CONTENT } from "@/lib/showcase-data";

export function ResultsFooter() {
  const { ctaLabel, ctaHref, socialProof } = RESULTS_CONTENT;

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <Link
        href={ctaHref}
        className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-lg border border-[var(--kba-charcoal)]/20 bg-white px-5 text-[13px] font-semibold text-[var(--kba-charcoal)] transition-colors hover:border-[var(--kba-primary)] hover:text-[var(--kba-primary)]"
      >
        {ctaLabel}
        <ArrowRightIcon />
      </Link>
      <ResultsSocialProof text={socialProof} />
    </div>
  );
}
