import { HeroFeatureItem } from "@/components/hero/HeroFeatureItem";
import { HERO_FEATURES } from "@/lib/hero-data";

export function HeroFeatures() {
  return (
    <ul className="flex flex-col gap-4 sm:flex-row sm:gap-4 lg:gap-5">
      {HERO_FEATURES.map((feature) => (
        <HeroFeatureItem
          key={feature.id}
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
        />
      ))}
    </ul>
  );
}
