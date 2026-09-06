"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { products as initialProducts, type Product } from "./catalog";

type CartLine = { slug: string; quantity: number };
type StoreContextValue = {
  products: Product[];
  publicProducts: Product[];
  cart: CartLine[];
  cartCount: number;
  addToCart: (slug: string) => void;
  updateQuantity: (slug: string, quantity: number) => void;
  removeFromCart: (slug: string) => void;
  updateProduct: (slug: string, patch: Partial<Product>) => void;
  resetCatalog: () => void;
};

const StoreContext = createContext<StoreContextValue | null>(null);
const PRODUCT_KEY = "vanguard-product-overrides";
const CART_KEY = "vanguard-cart";

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [cart, setCart] = useState<CartLine[]>([]);

  useEffect(() => {
    const overrides = JSON.parse(localStorage.getItem(PRODUCT_KEY) ?? "{}") as Record<string, Partial<Product>>;
    const storedCart = JSON.parse(localStorage.getItem(CART_KEY) ?? "[]") as CartLine[];
    queueMicrotask(() => {
      setProducts(initialProducts.map((product) => ({ ...product, ...overrides[product.slug] })));
      setCart(storedCart);
    });
  }, []);

  function persistCart(next: CartLine[]) {
    setCart(next);
    localStorage.setItem(CART_KEY, JSON.stringify(next));
  }

  function addToCart(slug: string) {
    const current = cart.find((line) => line.slug === slug);
    persistCart(current ? cart.map((line) => line.slug === slug ? { ...line, quantity: line.quantity + 1 } : line) : [...cart, { slug, quantity: 1 }]);
  }

  function updateQuantity(slug: string, quantity: number) {
    if (quantity < 1) return removeFromCart(slug);
    persistCart(cart.map((line) => line.slug === slug ? { ...line, quantity } : line));
  }

  function removeFromCart(slug: string) {
    persistCart(cart.filter((line) => line.slug !== slug));
  }

  function updateProduct(slug: string, patch: Partial<Product>) {
    const overrides = JSON.parse(localStorage.getItem(PRODUCT_KEY) ?? "{}") as Record<string, Partial<Product>>;
    overrides[slug] = { ...overrides[slug], ...patch };
    localStorage.setItem(PRODUCT_KEY, JSON.stringify(overrides));
    setProducts((current) => current.map((product) => product.slug === slug ? { ...product, ...patch } : product));
  }

  function resetCatalog() {
    localStorage.removeItem(PRODUCT_KEY);
    setProducts(initialProducts);
  }

  return <StoreContext.Provider value={{ products, publicProducts: products.filter((product) => product.websiteStatus === "publish"), cart, cartCount: cart.reduce((sum, line) => sum + line.quantity, 0), addToCart, updateQuantity, removeFromCart, updateProduct, resetCatalog }}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const value = useContext(StoreContext);
  if (!value) throw new Error("useStore must be used within StoreProvider");
  return value;
}
