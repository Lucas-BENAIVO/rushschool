import type { Metadata } from "next";
import { Hero } from "@/components/hero";

export const metadata: Metadata = {
  title: {
    absolute: "K Beauty Academy",
  },
};

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <section
        id="offre"
        className="sr-only"
        aria-label="Offre de lancement"
      />
    </main>
  );
}
