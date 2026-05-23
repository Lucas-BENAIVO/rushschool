"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useSyncExternalStore,
} from "react";
import {
  getCartItemCount,
  type CartItem,
  type CartLineInput,
} from "@/lib/cart";
import {
  getCartServerSnapshot,
  getCartSnapshot,
  persistCart,
  readCartItems,
  subscribeCart,
} from "@/lib/cart-store";

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  bumpSignal: number;
  isReady: boolean;
  addItem: (line: CartLineInput) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const cartSnapshot = useSyncExternalStore(
    subscribeCart,
    getCartSnapshot,
    getCartServerSnapshot,
  );
  const [bumpSignal, setBumpSignal] = useState(0);

  const { items, ready: isReady } = cartSnapshot;

  const addItem = useCallback((line: CartLineInput) => {
    const current = readCartItems();
    const existing = current.find((item) => item.productId === line.productId);

    const nextItems = existing
      ? current.map((item) =>
          item.productId === line.productId
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      : [...current, { ...line, quantity: 1 }];

    persistCart(nextItems);
    setBumpSignal((value) => value + 1);
  }, []);

  const removeItem = useCallback((productId: string) => {
    persistCart(readCartItems().filter((item) => item.productId !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity < 1) {
      persistCart(
        readCartItems().filter((item) => item.productId !== productId),
      );
      return;
    }

    persistCart(
      readCartItems().map((item) =>
        item.productId === productId ? { ...item, quantity } : item,
      ),
    );
  }, []);

  const itemCount = useMemo(() => getCartItemCount(items), [items]);

  const value = useMemo(
    () => ({
      items,
      itemCount,
      bumpSignal,
      isReady,
      addItem,
      removeItem,
      updateQuantity,
    }),
    [items, itemCount, bumpSignal, isReady, addItem, removeItem, updateQuantity],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart doit être utilisé dans un CartProvider");
  }

  return context;
}
