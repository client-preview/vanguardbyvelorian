import type { Metadata } from "next";
import { ProductDetail } from "../../../components/product-detail";
import { StorefrontShell } from "../../../components/storefront-shell";
import { products } from "../../../components/catalog";
export function generateStaticParams() { return products.filter((product) => product.websiteStatus === "publish").map((product) => ({ slug: product.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const product = products.find((item) => item.slug === slug); return { title: product ? `${product.name} | VANGUARD` : "Product | VANGUARD", description: product?.description.split(/\r?\n/)[0] }; }
export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; return <StorefrontShell><ProductDetail slug={slug} /></StorefrontShell>; }

