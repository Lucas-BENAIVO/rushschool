import type { Metadata } from "next";
import apresImage from "@/assets/apres.jpg";
import avantImage from "@/assets/avant.jpg";
import promoCoursImage from "@/assets/cours.jpg";
import instagramFeed1 from "@/assets/feed1.jpg";
import instagramFeed2 from "@/assets/feed2.jpeg";
import instagramFeed3 from "@/assets/feed3.jpeg";
import instagramFeed4 from "@/assets/feed4.jpg";
import instagramFeed5 from "@/assets/feed5.jpg";
import instagramFeed6 from "@/assets/feed6.jpeg";
import instagramFeed7 from "@/assets/feed7.jpeg";
import heroPortrait from "@/assets/image.jpg";
import promoFormationImage from "@/assets/prothesie-ongulaire.jpg";
import { FeaturedFormations } from "@/components/formations";
import { BOUTIQUE_IMAGES } from "@/lib/boutique-images";
import { FORMATION_IMAGES } from "@/lib/formation-images";
import { Hero } from "@/components/hero";
import { InstagramFeedSection } from "@/components/instagram-feed";
import { PromoBanner } from "@/components/promo-banner";
import { ShowcaseSection } from "@/components/showcase";

export const metadata: Metadata = {
  title: {
    absolute: "K Beauty Academy",
  },
};

export default function Home() {
  return (
    <main className="flex-1">
      <Hero imageSrc={heroPortrait} promoImageSrc={promoFormationImage} />
      <FeaturedFormations images={FORMATION_IMAGES} />
      <ShowcaseSection
        resultsImages={{
          before: avantImage,
          after: apresImage,
        }}
        shopImages={BOUTIQUE_IMAGES}
      />
      <PromoBanner
        galleryImages={{
          classroom: promoCoursImage,
          practice: FORMATION_IMAGES["nail-art"],
          result: FORMATION_IMAGES.prothesiste,
        }}
      />
      <InstagramFeedSection
        images={{
          "post-1": instagramFeed1,
          "post-2": instagramFeed2,
          "post-3": instagramFeed3,
          "post-4": instagramFeed4,
          "post-5": instagramFeed5,
          "post-6": instagramFeed6,
          "post-7": instagramFeed7,
        }}
      />
    </main>
  );
}
