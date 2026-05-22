type HeroStarRatingProps = {
  rating: number;
};

export function HeroStarRating({ rating }: HeroStarRatingProps) {
  return (
    <div className="flex items-center gap-1" aria-label={`Note ${rating} sur 5`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="#e8b84a"
          aria-hidden
        >
          <path d="M12 2l2.9 6.1 6.8.6-5.1 4.5 1.6 6.7L12 17.8 5.8 20.9l1.6-6.7-5.1-4.5 6.8-.6L12 2z" />
        </svg>
      ))}
      <span className="ml-1 text-[13px] font-semibold text-[var(--kba-charcoal)]">
        {rating}/5
      </span>
    </div>
  );
}
