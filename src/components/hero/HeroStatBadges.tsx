import { HeroStatBadge } from "@/components/hero/HeroStatBadge";
import { HERO_STATS } from "@/lib/hero-data";

export function HeroStatBadges() {
  return (
    <div
      className="absolute -right-2 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-2.5 lg:flex"
      aria-label="Statistiques"
    >
      {HERO_STATS.map((stat) => (
        <HeroStatBadge
          key={stat.id}
          value={stat.value}
          label={stat.label}
          highlight={"highlight" in stat ? stat.highlight : false}
        />
      ))}
    </div>
  );
}
