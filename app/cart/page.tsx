import type { Metadata } from "next";
import { CartView } from "../../components/cart-view";
import { StorefrontShell } from "../../components/storefront-shell";
export const metadata: Metadata = { title: "Cart | VANGUARD by VELORIAN" };
export default function CartPage() { return <StorefrontShell><CartView /></StorefrontShell>; }

