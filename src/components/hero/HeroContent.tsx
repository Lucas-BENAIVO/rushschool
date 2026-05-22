import { HeroActions } from "@/components/hero/HeroActions";
import { HeroBadge } from "@/components/hero/HeroBadge";
import { HeroFeatures } from "@/components/hero/HeroFeatures";
import { HeroSocialProof } from "@/components/hero/HeroSocialProof";
import { HeroSubtitle } from "@/components/hero/HeroSubtitle";
import { HeroTitle } from "@/components/hero/HeroTitle";

export function HeroContent() {
  return (
    <div className="flex flex-col justify-center gap-4 py-6 sm:gap-5 sm:py-8 lg:py-10">
      <HeroBadge />
      <HeroTitle />
      <HeroSubtitle />
      <HeroFeatures />
      <HeroActions />
      <HeroSocialProof />
    </div>
  );
}
