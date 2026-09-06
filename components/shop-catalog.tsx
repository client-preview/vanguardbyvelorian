"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useDeferredValue, useState } from "react";
import { formatPeso, storefrontCategories, storefrontCategorySlug } from "./catalog";
import { ProductImage } from "./product-image";
import { useStore } from "./store-provider";

export function ShopCatalog() {
  const { publicProducts } = useStore();
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") ?? "";
  const initialSearch = searchParams.get("search") ?? "";
  const matchedCategory = storefrontCategories.find((item) => item.slug === initialCategory);
  const [category, setCategory] = useState(matchedCategory?.slug ?? "all");
  const [search, setSearch] = useState(initialSearch);
  const deferredSearch = useDeferredValue(search.trim().toLowerCase());
  const filtered = publicProducts.filter((product) => (category === "all" || storefrontCategorySlug(product) === category) && product.name.toLowerCase().includes(deferredSearch));
  const chooseCategory = (slug: string) => {
    setCategory(slug);
    router.replace(slug === "all" ? "/shop" : `/shop?category=${slug}`, { scroll: false });
  };
  const clear = () => { setCategory("all"); setSearch(""); router.replace("/shop", { scroll: false }); };

  return <section className="mx-auto max-w-[1320px] px-4 py-10 sm:px-7 lg:px-10 lg:py-14">
    <div className="border-b border-emerald/15 pb-7">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div><h2 className="font-serif text-3xl font-semibold text-emerald">All Products</h2><p className="mt-1 text-xs uppercase tracking-[0.16em] text-emerald/55">{filtered.length} {filtered.length === 1 ? "Product" : "Products"}</p></div>
        <label className="relative block w-full lg:max-w-xs"><span className="sr-only">Search products</span><svg aria-hidden="true" viewBox="0 0 24 24" className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 fill-none stroke-emerald/55" strokeWidth="1.5"><circle cx="10" cy="10" r="6" /><path d="m15 15 5 5" /></svg><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search products..." className="h-12 w-full border border-emerald/15 bg-white/55 pl-11 pr-4 text-sm text-emerald outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20" /></label>
      </div>
      <div className="mt-6 flex gap-2 overflow-x-auto pb-1" aria-label="Product categories">{[{ label: "All", slug: "all" }, ...storefrontCategories].map((item) => <button key={item.slug} type="button" aria-pressed={category === item.slug} onClick={() => chooseCategory(item.slug)} className={`shrink-0 border px-4 py-2.5 text-[11px] uppercase tracking-[0.12em] transition focus:outline-none focus:ring-2 focus:ring-gold/40 ${category === item.slug ? "border-emerald bg-emerald text-ivory" : "border-emerald/15 bg-white/45 text-emerald hover:border-gold"}`}>{item.label}</button>)}</div>
    </div>
    {filtered.length ? <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-7">{filtered.map((product) => <article key={product.slug} className="group flex min-w-0 flex-col overflow-hidden rounded-xl border border-emerald/10 bg-white/70 transition duration-200 hover:-translate-y-1 hover:border-gold/35 hover:shadow-premium">
      <Link href={`/shop/${product.slug}`} className="relative block aspect-[4/5] overflow-hidden bg-[#f4efe4] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gold"><ProductImage product={product} /></Link>
      <div className="flex flex-1 flex-col p-3 sm:p-5"><p className="text-[9px] uppercase tracking-[0.16em] text-gold sm:text-[10px]">{product.category}</p><h3 className="mt-2 line-clamp-2 min-h-[2.5em] font-serif text-lg font-semibold leading-[1.25] text-emerald sm:text-[22px]">{product.name}</h3><p className="mt-3 text-sm font-semibold text-emerald sm:text-base">{formatPeso(product.price)}</p><div className="mt-auto pt-4"><Link href={`/shop/${product.slug}`} className="inline-flex h-10 w-full items-center justify-center border border-emerald bg-emerald px-3 text-[9px] uppercase tracking-[0.14em] text-ivory transition hover:border-gold hover:bg-gold hover:text-emerald focus:outline-none focus:ring-2 focus:ring-gold/40 sm:h-11 sm:text-[10px]">View Product</Link></div></div>
    </article>)}</div> : <div className="py-24 text-center"><h3 className="font-serif text-3xl font-semibold text-emerald">{category !== "all" && !deferredSearch ? "No products available in this category yet." : "No products found."}</h3><button type="button" onClick={clear} className="mt-5 border border-emerald bg-emerald px-6 py-3 text-xs uppercase tracking-[0.14em] text-ivory">Clear Filters</button></div>}
  </section>;
}
