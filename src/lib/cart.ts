import type { BoutiqueProduct } from "@/lib/boutique-data";

export const CART_STORAGE_KEY = "kba-cart";

export type CartItem = {
  productId: string;
  slug: string;
  title: string;
  subtitle: string;
  price: string;
  quantity: number;
};

export type CartLineInput = Omit<CartItem, "quantity">;

export function productToCartLine(product: BoutiqueProduct): CartLineInput {
  return {
    productId: product.id,
    slug: product.slug,
    title: product.title,
    subtitle: product.subtitle,
    price: product.price,
  };
}

export function getCartItemCount(items: CartItem[]) {
  return items.reduce((total, item) => total + item.quantity, 0);
}

/** Parse "69,99 €" → 69.99 */
export function parsePriceEuro(price: string): number {
  const normalized = price
    .replace(/\s/g, "")
    .replace(/€/g, "")
    .replace(",", ".");

  const value = Number.parseFloat(normalized);
  return Number.isFinite(value) ? value : 0;
}

export function formatPriceEuro(value: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(value);
}

export function getCartSubtotal(items: CartItem[]): number {
  return items.reduce(
    (total, item) => total + parsePriceEuro(item.price) * item.quantity,
    0,
  );
}

export function getLineTotal(item: CartItem): number {
  return parsePriceEuro(item.price) * item.quantity;
}

export function parseStoredCart(raw: string | null): CartItem[] {
  if (!raw) {
    return [];
  }

  try {
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed.filter(
      (item): item is CartItem =>
        typeof item === "object" &&
        item !== null &&
        typeof (item as CartItem).productId === "string" &&
        typeof (item as CartItem).slug === "string" &&
        typeof (item as CartItem).title === "string" &&
        typeof (item as CartItem).quantity === "number" &&
        (item as CartItem).quantity > 0,
    );
  } catch {
    return [];
  }
}
