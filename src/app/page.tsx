import type { Metadata } from "next";
import apresImage from "@/assets/apres.jpg";
import avantImage from "@/assets/avant.jpg";
import kit2ShopImage from "@/assets/kit2.jpg";
import kit3ShopImage from "@/assets/kit3.jpg";
import kitShopImage from "@/assets/kit.jpg";
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
import formationBrandImage from "@/assets/brand.jpeg";
import formationCilsACilImage from "@/assets/cilacil.jpeg";
import formationNailArtImage from "@/assets/nail.jpeg";
import formationVolumeRusseImage from "@/assets/cilrusse.jpeg";
import formationProthesisteImage from "@/assets/prothesie-ongulaire.jpg";
import { FeaturedFormations } from "@/components/formations";
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
      <FeaturedFormations
        images={{
          prothesiste: formationProthesisteImage,
          "cils-cil-a-cil": formationCilsACilImage,
          "volume-russe": formationVolumeRusseImage,
          "nail-art": formationNailArtImage,
          business: formationBrandImage,
        }}
      />
      <ShowcaseSection
        resultsImages={{
          before: avantImage,
          after: apresImage,
        }}
        shopImages={{
          "kit-ongles": kitShopImage,
          "kit-cils": kit2ShopImage,
          "lampe-uv": kit3ShopImage,
        }}
      />
      <PromoBanner
        galleryImages={{
          classroom: promoCoursImage,
          practice: formationNailArtImage,
          result: formationProthesisteImage,
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
