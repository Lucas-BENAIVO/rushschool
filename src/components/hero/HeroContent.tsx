import { HeroActions } from "@/components/hero/HeroActions";
import { HeroBadge } from "@/components/hero/HeroBadge";
import { HeroFeatures } from "@/components/hero/HeroFeatures";
import { HeroSocialProof } from "@/components/hero/HeroSocialProof";
import { HeroSubtitle } from "@/components/hero/HeroSubtitle";
import { HeroTitle } from "@/components/hero/HeroTitle";

export function HeroContent() {
  return (
    <div className="flex flex-col justify-center gap-4 pt-6 pb-3 sm:gap-5 sm:pt-8 sm:pb-4 lg:pt-10 lg:pb-5">
      <HeroBadge />
      <HeroTitle />
      <HeroSubtitle />
      <HeroFeatures />
      <HeroActions />
      <HeroSocialProof />
    </div>
  );
}
