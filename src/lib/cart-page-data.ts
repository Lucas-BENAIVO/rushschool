import { ROUTES } from "@/lib/routes";

export const CART_PAGE_COPY = {
  backLabel: "Retour à la boutique",
  backHref: ROUTES.boutique,
  title: "Panier",
  emptyTitle: "Votre panier est vide",
  emptyDescription: "Découvrez nos kits et accessoires professionnels.",
  emptyCta: "Voir la boutique",
  shippingNote: "Livraison offerte pour toute commande supérieure à 50 €.",
  summaryTitle: "Récapitulatif",
  subtotalLabel: "Sous-total",
  shippingLabel: "Livraison",
  shippingFree: "Offerte",
  taxLabel: "TVA incluse",
  promoLabel: "Code promo",
  promoPlaceholder: "Saisir un code",
  totalLabel: "Total",
  checkoutLabel: "Finaliser la commande",
  checkoutHref: ROUTES.contact,
  continueShopping: "Continuer mes achats",
} as const;

export const CART_FREE_SHIPPING_THRESHOLD = 50;
