import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons/ArrowRightIcon";
import { BeforeAfterSlider } from "@/components/showcase/results/BeforeAfterSlider";
import { ResultsSocialProof } from "@/components/showcase/results/ResultsSocialProof";
import { ShowcaseEyebrow } from "@/components/showcase/ShowcaseEyebrow";
import { ShowcaseTitle } from "@/components/showcase/ShowcaseTitle";
import { RESULTS_CONTENT } from "@/lib/showcase-data";
import type { ImageSource } from "@/types/images";

export type ResultsImages = {
  before?: ImageSource;
  after?: ImageSource;
};

type ResultsColumnProps = {
  images?: ResultsImages;
};

export function ResultsColumn({ images }: ResultsColumnProps) {
  const { eyebrow, title, ctaLabel, ctaHref, socialProof, beforeImageFile, afterImageFile } =
    RESULTS_CONTENT;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <ShowcaseEyebrow>{eyebrow}</ShowcaseEyebrow>
        <ShowcaseTitle>{title}</ShowcaseTitle>
      </div>

      <BeforeAfterSlider
        beforeSrc={images?.before}
        afterSrc={images?.after}
        beforeImageFile={beforeImageFile}
        afterImageFile={afterImageFile}
      />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href={ctaHref}
          className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-[var(--kba-charcoal)]/20 bg-white px-5 text-[13px] font-semibold text-[var(--kba-charcoal)] transition-colors hover:border-[var(--kba-primary)] hover:text-[var(--kba-primary)]"
        >
          {ctaLabel}
          <ArrowRightIcon />
        </Link>
        <ResultsSocialProof text={socialProof} />
      </div>
    </div>
  );
}
