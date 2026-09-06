import Image from "next/image";
import Link from "next/link";
import { assetPath } from "./asset-path";
import { site } from "./site-data";

const shopLinks = [{ label: "Shop All", href: "/shop" }, { label: "Categories", href: "/#categories" }];
const companyLinks = [{ label: "About Us", href: "/#about" }, { label: "Contact", href: "/#contact" }];
const careLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Return & Replacement Policy", href: "/return-policy" },
  { label: "Shipping & Delivery Policy", href: "/shipping-policy" },
];

const paymentMethods = [
  { name: "GCash", src: "https://www.bworldonline.com/wp-content/uploads/2021/09/GCash_Horizontal-Full-Blue-Transparent.png", brand: "gcash" },
  { name: "Maya", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Maya_logo.svg/3840px-Maya_logo.svg.png", brand: "maya" },
  { name: "GoTyme", src: "https://www.gotyme.com.ph/static-assets/images/footer/gotyme-bank-logo.svg", brand: "gotyme" },
  { name: "Mastercard", src: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg", brand: "mastercard" },
  { name: "Visa", src: "https://c.cdnmp.net/532212699/content/Intesa/Visa_Brandmark_White_Transp.png", brand: "visa" },
  { name: "BDO", src: "https://companieslogo.com/img/orig/BDOUY.D-855a15e2.png?download=true&t=1720244491", brand: "bdo" },
];

type FooterLink = { label: string; href: string };

export function Footer() {
  return <footer id="contact" className="border-t border-gold/20 bg-emerald text-ivory">
    <div className="mx-auto grid max-w-[1240px] gap-x-8 gap-y-8 px-5 py-12 sm:grid-cols-2 sm:px-8 sm:py-12 lg:grid-cols-3 lg:px-10 lg:pb-10 xl:grid-cols-[1.4fr_.8fr_.9fr_1.5fr_1.7fr] xl:gap-x-7">
      <div><Image src={assetPath("/vanguard-logo.png")} alt="VANGUARD by VELORIAN" width={260} height={260} className="h-auto w-full max-w-[185px] object-contain" /><a href="https://www.facebook.com/profile.php?id=61593084964524" target="_blank" rel="noopener noreferrer" aria-label="Visit Vanguard by Velorian on Facebook" className="mt-3 inline-flex items-center gap-2 font-sans text-[13px] leading-5 text-ivory/85 transition-colors duration-200 hover:text-gold"><svg aria-hidden="true" viewBox="0 0 24 24" className="h-[15px] w-[15px] shrink-0 fill-current text-gold"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.438H7.078v-3.489h3.047V9.413c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.974h-1.513c-1.49 0-1.956.931-1.956 1.887v2.26h3.328l-.532 3.489h-2.796V24C19.612 23.094 24 18.1 24 12.073Z" /></svg>Facebook</a></div>
      <FooterLinks title="Shop" links={shopLinks} />
      <FooterLinks title="Company" links={companyLinks} />
      <FooterLinks title="Customer Care" links={careLinks} />
      <div><h2 className="font-serif text-[15px] font-medium uppercase tracking-[0.16em] text-gold">Contact Us</h2><a href={`mailto:${site.email}`} className="mt-4 block break-words font-sans text-[12px] leading-5 text-ivory/90 transition duration-200 hover:text-gold xl:whitespace-nowrap 2xl:text-[13px]">{site.email}</a><p className="mt-4 font-sans text-[13px] leading-5 text-ivory/80">Monday to Sunday<br />7:00 AM – 9:00 PM</p><p className="mt-4 font-sans text-[10px] uppercase tracking-[0.14em] text-gold">Payment methods</p><div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2.5 sm:flex-nowrap">{paymentMethods.map((method) => <span key={method.name} className="payment-logo-slot"><img src={method.src} alt={method.name} className={`payment-logo payment-logo--${method.brand}`} referrerPolicy="no-referrer" /></span>)}</div><p className="mt-2.5 font-sans text-[11px] font-normal leading-[1.4] text-ivory/75">and more Banks &amp; E-wallets.</p></div>
    </div>
    <div className="mx-auto max-w-[1240px] border-t border-white/10 px-5 py-4 text-center sm:px-8 lg:px-10"><p className="font-sans text-[11px] uppercase tracking-[0.16em] text-ivory/65">© {new Date().getFullYear()} VANGUARD by VELORIAN. All rights reserved.</p></div>
  </footer>;
}

function FooterLinks({ title, links }: { title: string; links: FooterLink[] }) {
  return <div><h2 className="font-serif text-[15px] font-medium uppercase tracking-[0.16em] text-gold">{title}</h2><nav className="mt-4 grid gap-2.5 font-sans text-[13px] leading-5 text-ivory/82">{links.map((link) => <Link key={link.href} href={link.href} className="transition duration-200 hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold/50">{link.label}</Link>)}</nav></div>;
}
