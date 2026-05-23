import type { StudentReview } from "@/lib/avis-eleves-data";

type AvisElevesReviewCardProps = {
  review: StudentReview;
};

function ReviewStars({ rating }: { rating: number }) {
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`Note ${rating} sur 5`}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill={index < rating ? "#e8b84a" : "#e5ddd9"}
          aria-hidden
        >
          <path d="M12 2l2.9 6.1 6.8.6-5.1 4.5 1.6 6.7L12 17.8 5.8 20.9l1.6-6.7-5.1-4.5 6.8-.6L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export function AvisElevesReviewCard({ review }: AvisElevesReviewCardProps) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-[var(--kba-charcoal)]/8 bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
      <ReviewStars rating={review.rating} />
      <blockquote className="mt-4 flex-1 text-[14px] leading-relaxed text-[var(--kba-charcoal)]">
        &ldquo;{review.text}&rdquo;
      </blockquote>
      <footer className="mt-5 border-t border-[var(--kba-charcoal)]/8 pt-4">
        <p className="text-[14px] font-semibold text-[var(--kba-charcoal)]">
          {review.author}
        </p>
        <p className="mt-0.5 text-[12px] text-[var(--kba-primary)]">
          {review.formation}
        </p>
      </footer>
    </article>
  );
}
