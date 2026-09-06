import type { Metadata } from "next";
import { ProductAdmin } from "../../../components/product-admin";
import { StorefrontShell } from "../../../components/storefront-shell";
export const metadata: Metadata = { title: "Product CMS | VANGUARD" };
export default function ProductAdminPage() { return <StorefrontShell><ProductAdmin /></StorefrontShell>; }

