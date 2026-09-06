"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { formatPeso } from "./catalog";
import { ProductImage } from "./product-image";
import { useStore } from "./store-provider";

export function ProductDetail({ slug }: { slug: string }) {
  const { publicProducts, addToCart } = useStore();
  const product = publicProducts.find((item) => item.slug === slug);
  if (!product) notFound();
  return <section className="mx-auto grid max-w-6xl gap-9 px-4 py-12 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-20">
    <div className="group relative aspect-square overflow-hidden rounded-xl border border-emerald/10 bg-[#f4efe4]"><ProductImage product={product} priority /></div>
    <div className="self-center"><Link href="/shop" className="text-[10px] uppercase tracking-[0.16em] text-gold">← Back to shop</Link><p className="mt-8 text-xs uppercase tracking-[0.18em] text-gold">{product.category}</p><h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-emerald sm:text-5xl">{product.name}</h1><p className="mt-5 text-xl font-semibold text-emerald">{formatPeso(product.price)}</p><div className="mt-8 h-px bg-gold/35" /><div className="mt-8 whitespace-pre-line text-sm leading-7 text-emerald/75">{product.description}</div><div className="mt-9 flex flex-wrap gap-3"><button type="button" disabled={product.stockStatus === "out_of_stock"} onClick={() => addToCart(product.slug)} className="h-12 bg-gold px-8 text-xs uppercase tracking-[0.15em] text-emerald disabled:cursor-not-allowed disabled:opacity-50">{product.stockStatus === "out_of_stock" ? "Out of Stock" : "Add to Cart"}</button><Link href="/cart" className="inline-flex h-12 items-center border border-emerald px-8 text-xs uppercase tracking-[0.15em] text-emerald">View Cart</Link></div></div>
  </section>;
}

