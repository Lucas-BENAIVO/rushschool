import { HeroFeatureItem } from "@/components/hero/HeroFeatureItem";
import { HERO_FEATURES } from "@/lib/hero-data";

export function HeroFeatures() {
  return (
    <ul className="flex flex-col gap-6 sm:flex-row sm:gap-5 lg:gap-6">
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
