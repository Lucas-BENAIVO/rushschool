import type { Metadata } from "next";
import { CartPageContent } from "@/components/cart/CartPageContent";

export const metadata: Metadata = {
  title: "Panier",
  description: "Votre panier K Beauty Academy.",
};

export default function PanierPage() {
  return (
    <main className="flex-1">
      <CartPageContent />
    </main>
  );
}
