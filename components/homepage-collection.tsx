"use client";

import Link from "next/link";
import { formatPeso, homepageFeaturedSlugs, storefrontCategories } from "./catalog";
import { CategoryArtwork } from "./category-art";
import { ProductImage } from "./product-image";
import { useStore } from "./store-provider";

export function HomepageCollectionSection() {
  const { publicProducts, addToCart } = useStore();
  const flaggedProducts = publicProducts.filter((product) => product.bestSeller || product.featured);
  const curatedProducts = homepageFeaturedSlugs
    .map((slug) => publicProducts.find((product) => product.slug === slug))
    .filter((product) => product !== undefined);
  const bestSellers = [...flaggedProducts, ...curatedProducts.filter((product) => !flaggedProducts.some((flagged) => flagged.slug === product.slug))].slice(0, 6);

  return (
    <section id="collections" className="bg-ivory px-4 py-14 sm:px-7 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1320px]">
        <div className="flex items-center gap-4 sm:gap-7">
          <span className="h-px flex-1 bg-gold/35" />
          <h2 className="font-serif text-2xl font-semibold uppercase tracking-[0.08em] text-emerald sm:text-3xl">Shop by Category</h2>
          <span className="h-px flex-1 bg-gold/35" />
        </div>

        <div id="categories" className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 xl:grid-cols-6 xl:gap-3">
          {storefrontCategories.map((category) => {
            return (
              <Link
                key={category.slug}
                href={`/shop?category=${category.slug}`}
                aria-label={`Shop ${category.label} products`}
                className="group relative block overflow-hidden border border-emerald/10 bg-white/35 text-center transition duration-200 hover:-translate-y-1 hover:border-gold/45 focus:outline-none focus:ring-2 focus:ring-gold/45"
              >
                <div className="relative mx-auto aspect-square w-full overflow-hidden bg-[#f4efe4]">
                  <CategoryArtwork type={category.slug} />
                </div>
                <h3 className="flex min-h-[58px] items-center justify-center px-2 py-4 font-serif text-[15px] font-semibold uppercase leading-tight tracking-[0.06em] text-emerald sm:text-base lg:text-[14px] xl:text-[15px]">{category.label}</h3>
              </Link>
            );
          })}
        </div>

        <div className="mt-14 flex items-end justify-between border-b border-gold/25 pb-4 lg:mt-20">
          <div>
            <p className="text-[9px] uppercase tracking-[0.25em] text-gold sm:text-[10px]">Customer Favorites</p>
            <h2 className="mt-1 font-serif text-3xl font-semibold uppercase tracking-[0.06em] text-emerald sm:text-4xl">Our Best Sellers</h2>
          </div>
          <Link href="/shop" className="hidden text-[10px] uppercase tracking-[0.16em] text-emerald underline-offset-4 hover:text-gold hover:underline focus:outline-none focus:ring-2 focus:ring-gold/40 sm:block">View All Products →</Link>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-6">
          {bestSellers.map((product) => (
            <article key={product.slug} className="group flex min-w-0 flex-col border border-emerald/10 bg-white/55 transition duration-200 hover:-translate-y-0.5 hover:border-gold/30 hover:shadow-[0_8px_22px_rgba(0,60,45,0.06)]">
              <Link href={`/shop/${product.slug}`} className="relative flex h-[180px] items-center justify-center overflow-hidden bg-[#f4efe4] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gold sm:h-[210px] xl:h-[260px]">
                <span className="relative block h-full max-h-[220px] w-full">
                  <ProductImage product={product} className="object-contain object-center p-3" />
                </span>
              </Link>
              <div className="flex flex-1 flex-col px-3 pb-3 pt-3.5 sm:px-4 sm:pb-4 sm:pt-4">
                <p className="text-[8px] uppercase tracking-[0.14em] text-gold sm:text-[9px]">{product.category}</p>
                <Link href={`/shop/${product.slug}`} className="mt-1.5 focus:outline-none focus:ring-2 focus:ring-gold/40">
                  <h3 className="line-clamp-2 min-h-[60px] font-serif text-base font-semibold leading-[1.25] text-emerald sm:text-lg">{product.name}</h3>
                </Link>
                <div className="mt-auto flex items-center justify-between gap-2 pt-4">
                  <p className="text-xs font-semibold text-emerald sm:text-sm">{formatPeso(product.price)}</p>
                  <button
                    type="button"
                    onClick={() => addToCart(product.slug)}
                    aria-label={`Add ${product.name} to cart`}
                    className="grid h-11 w-11 shrink-0 place-items-center border border-emerald/30 bg-transparent text-lg font-light leading-none text-emerald transition duration-200 hover:border-emerald hover:bg-emerald hover:text-ivory focus:outline-none focus:ring-2 focus:ring-gold/40"
                  >
                    +
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <Link href="/shop" className="mt-8 inline-flex text-[10px] uppercase tracking-[0.16em] text-emerald underline-offset-4 hover:text-gold hover:underline focus:outline-none focus:ring-2 focus:ring-gold/40 sm:hidden">View All Products →</Link>
      </div>
    </section>
  );
}
