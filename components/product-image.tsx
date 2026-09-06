import Image from "next/image";
import type { Product } from "./catalog";
import { assetPath } from "./asset-path";

export function ProductImage({ product, priority = false, className = "object-contain p-5 transition-transform duration-200 group-hover:scale-[1.03]" }: { product: Product; priority?: boolean; className?: string }) {
  if (!product.localImage) return <div className="grid h-full place-items-center bg-emerald/[0.04] px-8 text-center font-serif text-xl text-emerald/45">Image pending review</div>;
  return <Image src={assetPath(product.localImage)} alt={product.name} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" priority={priority} className={className} />;
}
