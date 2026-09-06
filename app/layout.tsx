import type { Metadata } from "next";
import localFont from "next/font/local";
import { StoreProvider } from "../components/store-provider";
import "./globals.css";

const cormorant = localFont({
  src: [
    { path: "../public/fonts/cormorant-400.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/cormorant-500.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/cormorant-600.ttf", weight: "600", style: "normal" },
    { path: "../public/fonts/cormorant-italic-400.ttf", weight: "400", style: "italic" },
  ],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = localFont({
  src: [
    { path: "../public/fonts/montserrat-400.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/montserrat-500.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/montserrat-600.ttf", weight: "600", style: "normal" },
  ],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VANGUARD by VELORIAN",
  description: "Premium business ecosystem for wellness, beauty, and lifestyle.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body><StoreProvider>{children}</StoreProvider></body>
    </html>
  );
}
