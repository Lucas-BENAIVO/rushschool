import { CART_STORAGE_KEY, parseStoredCart, type CartItem } from "@/lib/cart";

type CartSnapshot = {
  items: CartItem[];
  ready: boolean;
};

const listeners = new Set<() => void>();

const SERVER_SNAPSHOT: CartSnapshot = { items: [], ready: false };

let cachedSerialized = "";
let cachedSnapshot: CartSnapshot = SERVER_SNAPSHOT;

function syncSnapshotFromStorage(): CartSnapshot {
  const raw = localStorage.getItem(CART_STORAGE_KEY) ?? "";

  if (raw === cachedSerialized) {
    return cachedSnapshot;
  }

  cachedSerialized = raw;
  cachedSnapshot = {
    items: parseStoredCart(raw),
    ready: true,
  };

  return cachedSnapshot;
}

function invalidateCache() {
  cachedSerialized = "";
}

export function subscribeCart(listener: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key === CART_STORAGE_KEY) {
      invalidateCache();
      listener();
    }
  };

  listeners.add(listener);

  if (typeof window !== "undefined") {
    window.addEventListener("storage", onStorage);
  }

  return () => {
    listeners.delete(listener);

    if (typeof window !== "undefined") {
      window.removeEventListener("storage", onStorage);
    }
  };
}

export function getCartSnapshot(): CartSnapshot {
  if (typeof window === "undefined") {
    return SERVER_SNAPSHOT;
  }

  return syncSnapshotFromStorage();
}

export function getCartServerSnapshot(): CartSnapshot {
  return SERVER_SNAPSHOT;
}

export function persistCart(items: CartItem[]) {
  if (typeof window === "undefined") {
    return;
  }

  const nextSerialized = JSON.stringify(items);

  if (nextSerialized === cachedSerialized) {
    return;
  }

  localStorage.setItem(CART_STORAGE_KEY, nextSerialized);
  cachedSerialized = nextSerialized;
  cachedSnapshot = { items, ready: true };
  listeners.forEach((listener) => listener());
}

export function readCartItems(): CartItem[] {
  return getCartSnapshot().items;
}
