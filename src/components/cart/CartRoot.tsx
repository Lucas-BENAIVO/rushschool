"use client";

import { CartProvider } from "@/context/CartContext";

export function CartRoot({ children }: { children: React.ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}
