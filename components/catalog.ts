import sourceProducts from "../data/products.json";

export type ProductStatus = "publish" | "review";
export type StockStatus = "in_stock" | "out_of_stock";

export type Product = {
  sourceId: number;
  code: string;
  slug: string;
  name: string;
  category: string;
  price: number;
  currency: string;
  description: string;
  imageUrl: string | null;
  localImage: string | null;
  websiteStatus: ProductStatus;
  reviewReason: string | null;
  featured: boolean;
  bestSeller: boolean;
  stockStatus: StockStatus;
};

export const products = sourceProducts as Product[];
export const publishableProducts = products.filter((product) => product.websiteStatus === "publish");
export const productCategories = [...new Set(publishableProducts.map((product) => product.category))].sort();

export type StorefrontCategory = {
  label: string;
  slug: string;
};

export const storefrontCategories: StorefrontCategory[] = [
  { label: "Wellness", slug: "wellness" },
  { label: "Beauty & Skincare", slug: "beauty-skincare" },
  { label: "Personal Care", slug: "personal-care" },
  { label: "Lifestyle", slug: "lifestyle" },
  { label: "Electronics", slug: "electronics" },
  { label: "Bundles & Sets", slug: "bundles-sets" },
];

export const homepageFeaturedSlugs = [
  "luxxe-white-ultima-60-s",
  "luxxe-slim",
  "luxxe-renew",
  "luxxe-white-protect-45-s",
  "by-aivee-lumi-cushion-beige",
  "luxxe-white-coffee",
];

export function categorySlug(category: string) {
  return category
    .normalize("NFKD")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function storefrontCategorySlug(product: Product) {
  const searchable = `${product.category} ${product.name}`.toLowerCase();

  if (/\b(bundle|bundles|kit|kits|package|packages|set|sets)\b/.test(searchable)) return "bundles-sets";
  if (/\b(electronic|electronics|device|devices|gadget|gadgets)\b/.test(searchable)) return "electronics";
  if (product.category === "Lifestyle") return "lifestyle";
  if (product.category === "Supplements" || product.category === "Coffee") return "wellness";
  if (product.category === "Skincare") return "personal-care";
  if (product.category === "By Aivee" && /\b(soap|lip sleep|hair cushion)\b/.test(searchable)) return "personal-care";
  if (product.category === "By Aivee") return "beauty-skincare";

  return categorySlug(product.category);
}

export function formatPeso(price: number) {
  return new Intl.NumberFormat("en-PH", { style: "currency", currency: "PHP", minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(price);
}
