import { BeforeAfterSlider } from "@/components/showcase/results/BeforeAfterSlider";
import { ResultsSocialProof } from "@/components/showcase/results/ResultsSocialProof";
import { AVIS_ELEVES_RESULTS } from "@/lib/avis-eleves-data";
import type { ImageSource } from "@/types/images";

type AvisElevesResultsProps = {
  images: {
    before: ImageSource;
    after: ImageSource;
  };
};

export function AvisElevesResults({ images }: AvisElevesResultsProps) {
  const {
    eyebrow,
    title,
    description,
    beforeImageFile,
    afterImageFile,
    socialProof,
  } = AVIS_ELEVES_RESULTS;

  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--kba-muted)]">
        {eyebrow}
      </p>
      <h2 className="mt-2 max-w-xl font-serif text-2xl font-medium tracking-tight text-[var(--kba-charcoal)] sm:text-3xl">
        {title}
      </h2>
      <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[var(--kba-muted)] sm:text-base">
        {description}
      </p>

      <div className="mt-8 grid min-w-0 grid-cols-1 items-center gap-6 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-6 xl:gap-8">
        <div className="min-w-0 w-full">
        <BeforeAfterSlider
          beforeSrc={images.before}
          afterSrc={images.after}
          beforeImageFile={beforeImageFile}
          afterImageFile={afterImageFile}
          size="large"
        />
        </div>
        <div className="flex min-w-0 flex-col justify-center gap-4">
          <p className="text-[15px] leading-relaxed text-[var(--kba-muted)]">
            Nos élèves progressent rapidement grâce à un format intensif, des corrections
            en direct et une pédagogie orientée résultat.
          </p>
          <ResultsSocialProof text={socialProof} />
        </div>
      </div>
    </div>
  );
}
