import { AvisElevesReviewCard } from "@/components/avis-eleves/AvisElevesReviewCard";
import { AVIS_ELEVES_REVIEWS } from "@/lib/avis-eleves-data";

export function AvisElevesReviewsGrid() {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--kba-muted)]">
        Témoignages
      </p>
      <h2 className="mt-2 font-serif text-2xl font-medium tracking-tight text-[var(--kba-charcoal)] sm:text-3xl">
        Ce qu&apos;elles en disent
      </h2>
      <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[var(--kba-muted)] sm:text-base">
        Des retours authentiques sur la qualité de l&apos;enseignement, l&apos;ambiance
        et les résultats obtenus en fin de formation.
      </p>

      <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {AVIS_ELEVES_REVIEWS.map((review) => (
          <li key={review.id}>
            <AvisElevesReviewCard review={review} />
          </li>
        ))}
      </ul>
    </div>
  );
}
