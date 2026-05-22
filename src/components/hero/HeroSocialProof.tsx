import { HeroAvatars } from "@/components/hero/HeroAvatars";
import { HeroStarRating } from "@/components/hero/HeroStarRating";
import { HERO_SOCIAL_PROOF } from "@/lib/hero-data";

export function HeroSocialProof() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
      <HeroAvatars />
      <div className="flex flex-col gap-1">
        <HeroStarRating rating={HERO_SOCIAL_PROOF.rating} />
        <p className="text-[12px] leading-snug text-[var(--kba-muted)]">
          {HERO_SOCIAL_PROOF.reviewCount}
        </p>
      </div>
    </div>
  );
}
