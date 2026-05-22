import { HeroActions } from "@/components/hero/HeroActions";
import { HeroBadge } from "@/components/hero/HeroBadge";
import { HeroFeatures } from "@/components/hero/HeroFeatures";
import { HeroSocialProof } from "@/components/hero/HeroSocialProof";
import { HeroSubtitle } from "@/components/hero/HeroSubtitle";
import { HeroTitle } from "@/components/hero/HeroTitle";

export function HeroContent() {
  return (
    <div className="flex flex-col justify-center gap-6 py-10 sm:gap-7 sm:py-14 lg:py-16">
      <HeroBadge />
      <HeroTitle />
      <HeroSubtitle />
      <HeroFeatures />
      <HeroActions />
      <HeroSocialProof />
    </div>
  );
}
