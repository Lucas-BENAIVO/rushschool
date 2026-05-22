import type { Metadata } from "next";
import heroPortrait from "@/assets/image.jpg";
import promoFormationImage from "@/assets/prothesie-ongulaire.jpg";
import { Hero } from "@/components/hero";

export const metadata: Metadata = {
  title: {
    absolute: "K Beauty Academy",
  },
};

export default function Home() {
  return (
    <main className="flex-1">
      <Hero imageSrc={heroPortrait} promoImageSrc={promoFormationImage} />
      <section
        id="offre"
        className="sr-only"
        aria-label="Offre de lancement"
      />
    </main>
  );
}
