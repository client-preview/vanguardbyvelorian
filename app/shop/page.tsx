import type { Metadata } from "next";
import { Suspense } from "react";
import { ShopCatalog } from "../../components/shop-catalog";
import { StorefrontShell } from "../../components/storefront-shell";
export const metadata: Metadata = { title: "Shop Our Products | VANGUARD by VELORIAN", description: "Explore VANGUARD beauty, wellness, and lifestyle products." };
export default function ShopPage() {
  return <StorefrontShell><header className="border-b border-gold/20 bg-[#f5f0e5] px-4 py-16 text-center sm:py-20"><p className="text-[10px] uppercase tracking-[0.26em] text-gold">VANGUARD Collection</p><h1 className="mt-3 font-serif text-5xl font-semibold text-emerald sm:text-6xl">Shop Our Products</h1><p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-emerald/65 sm:text-base">Discover carefully selected beauty, wellness, and lifestyle products designed to elevate your everyday routine.</p></header><Suspense fallback={<div className="mx-auto max-w-[1320px] px-4 py-24 text-center text-sm text-emerald/60">Loading products...</div>}><ShopCatalog /></Suspense></StorefrontShell>;
}
