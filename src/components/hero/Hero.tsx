import { HeroContent } from "@/components/hero/HeroContent";
import { HeroSocialSidebar } from "@/components/hero/HeroSocialSidebar";
import { HeroVisual } from "@/components/hero/HeroVisual";

type HeroProps = {
  /** Chemin public de l'image principale */
  imageSrc?: string;
  promoImageSrc?: string;
};

export function Hero({ imageSrc, promoImageSrc }: HeroProps) {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--kba-hero-bg)" }}
      aria-labelledby="hero-title"
    >
      <div className="relative mx-auto max-w-[var(--kba-container-max)] px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-14">
          <HeroContent />
          <HeroVisual imageSrc={imageSrc} promoImageSrc={promoImageSrc} />
        </div>
        <HeroSocialSidebar />
      </div>
    </section>
  );
}
