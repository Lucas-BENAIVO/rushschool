import { HeroStarRating } from "@/components/hero/HeroStarRating";
import { ResultsSocialProof } from "@/components/showcase/results/ResultsSocialProof";
import { AVIS_ELEVES_SUMMARY } from "@/lib/avis-eleves-data";

export function AvisElevesSummary() {
  const { rating, reviewCount, stats } = AVIS_ELEVES_SUMMARY;

  return (
    <div
      className="rounded-2xl border border-[var(--kba-charcoal)]/6 px-5 py-6 sm:px-8 sm:py-7"
      style={{ backgroundColor: "var(--kba-why-us-bg)" }}
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-2">
          <HeroStarRating rating={rating} />
          <p className="text-[14px] text-[var(--kba-muted)]">{reviewCount}</p>
        </div>
        <ResultsSocialProof text="+2500 élèves satisfaites" />
      </div>

      <ul className="mt-6 grid grid-cols-1 gap-4 border-t border-[var(--kba-charcoal)]/8 pt-6 sm:grid-cols-3 sm:gap-5">
        {stats.map((stat) => (
          <li key={stat.id} className="text-center sm:text-left">
            <p
              className={`font-serif text-2xl font-medium leading-none sm:text-3xl ${
                "highlight" in stat && stat.highlight
                  ? "text-[var(--kba-primary)]"
                  : "text-[var(--kba-charcoal)]"
              }`}
            >
              {stat.value}
            </p>
            <p className="mt-1.5 text-[13px] text-[var(--kba-muted)]">{stat.label}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
