import Image from "next/image";
import Link from "next/link";
import { assetPath } from "./asset-path";
import { homepageContent, site } from "./site-data";

const premiumIconClass = "h-[38px] w-[38px] sm:h-11 sm:w-11 lg:h-[50px] lg:w-[50px]";

function PremiumQualityIcon() {
  return <svg aria-hidden="true" viewBox="0 0 56 56" className={premiumIconClass} fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 20 16 10h24l8 10-20 27L8 20Z" />
    <path d="M8 20h40M16 10l6 10 6-10 6 10 6-10M22 20l6 27 6-27" />
    <path className="text-[#d8b45c]" d="M47 6v6M44 9h6" />
  </svg>;
}

function TrustedIcon() {
  return <svg aria-hidden="true" viewBox="0 0 56 56" className={premiumIconClass} fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">
    <path d="M28 5.5c5.8 4.1 11.8 5.7 18 6.8v14.2c0 11.1-6.7 19.4-18 24-11.3-4.6-18-12.9-18-24V12.3c6.2-1.1 12.2-2.7 18-6.8Z" />
    <path d="M28 11.5c4.2 2.7 8.4 4 12.8 4.9v10.1c0 7.8-4.5 13.8-12.8 17.8-8.3-4-12.8-10-12.8-17.8V16.4c4.4-.9 8.6-2.2 12.8-4.9Z" opacity=".72" />
    <path className="text-[#d8b45c]" d="m20.5 27.5 5 5 10-11" />
  </svg>;
}

function FastDeliveryIcon() {
  return <svg aria-hidden="true" viewBox="0 0 56 56" className={premiumIconClass} fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 18h9M3 24h11M7 30h7" />
    <path d="M16 13h23v24H16V13ZM39 21h7l7 9v7h-6" />
    <path d="M16 37h5M29 37h10M53 31H39" />
    <circle cx="25" cy="38" r="4.5" /><circle cx="43" cy="38" r="4.5" />
    <circle className="text-[#d8b45c]" cx="25" cy="38" r="1.3" /><circle className="text-[#d8b45c]" cx="43" cy="38" r="1.3" />
  </svg>;
}

function SellingPointIcon({ type }: { type: string }) {
  const icons: Record<string, React.ReactNode> = {
    diamond: <PremiumQualityIcon />,
    shield: <TrustedIcon />,
    truck: <FastDeliveryIcon />,
  };
  return <span className="flex h-14 w-14 shrink-0 items-center justify-center text-gold transition duration-200 ease-out group-hover:-translate-y-0.5 group-hover:text-[#d8b45c]">{icons[type] ?? icons.diamond}</span>;
}

export function HeroSection() {
  const { hero } = homepageContent;
  return <section id="home" className="hero-scene relative isolate min-h-[560px] overflow-hidden text-ivory sm:min-h-[590px] lg:min-h-0">
    <div className="hero-scene-image absolute inset-0 -z-20" style={hero.desktopHeroImage ? { backgroundImage: `url(${assetPath(hero.desktopHeroImage)})` } : undefined} aria-hidden="true" />
    <div className="hero-scene-shade absolute inset-0 -z-10" aria-hidden="true" />
    <div className="mx-auto flex min-h-[560px] max-w-7xl items-center px-4 py-16 sm:min-h-[590px] sm:px-8 lg:h-full lg:min-h-0 lg:px-10 lg:py-16">
      <div className="hero-copy relative z-10 w-full max-w-[440px] lg:-translate-y-8 2xl:-translate-y-10">
        <div className="mb-6 flex w-full justify-center lg:mb-5 2xl:mb-7">
          <Image src={assetPath("/vanguard-logo.png")} alt="VANGUARD by VELORIAN Business Ecosystem" width={520} height={520} priority className="h-auto w-[clamp(180px,55vw,220px)] object-contain sm:w-[240px] lg:w-[250px] 2xl:w-[270px]" />
        </div>
        <h1 className="hero-heading max-w-[600px] font-serif text-[clamp(2.625rem,12vw,3rem)] font-semibold leading-[1] tracking-[-0.015em] text-[#fff9ee] sm:text-[3.375rem] sm:leading-[0.98] md:text-[3.75rem] lg:text-[3.875rem] xl:text-[clamp(4.125rem,5.2vw,4.875rem)] xl:leading-[0.97]">Elevate<br /><span className="sm:whitespace-nowrap">Your Best <span className="text-gold">Life.</span></span></h1>
        <p className="mt-5 max-w-[440px] text-base leading-[1.55] text-ivory/88 sm:mt-6 sm:text-[17px] lg:mt-6 lg:text-lg lg:leading-[1.575]">{hero.description}</p>
        <Link href={hero.ctaUrl} className="mt-6 inline-flex h-12 items-center justify-center bg-gold px-7 text-xs uppercase tracking-[0.15em] text-emerald transition hover:bg-ivory sm:mt-7 lg:h-[52px] lg:px-8 lg:text-sm">{hero.ctaLabel}</Link>
      </div>
    </div>
  </section>;
}

export function SellingPointsSection() {
  return <section className="bg-emerald text-ivory"><div className="mx-auto grid max-w-7xl divide-y divide-gold/20 sm:grid-cols-3 sm:divide-y-0">{homepageContent.sellingPoints.map((point, index) => <article key={point.title} className="group relative flex items-center gap-6 px-6 py-8 sm:gap-7 sm:px-6 sm:py-10 lg:px-12">{index > 0 ? <span aria-hidden="true" className="absolute left-0 top-[20%] hidden h-[60%] w-px bg-gold/20 sm:block" /> : null}<SellingPointIcon type={point.icon} /><div><h2 className="text-[15px] font-semibold uppercase leading-tight tracking-[0.11em] sm:text-[17px]">{point.title}</h2><p className="mt-1.5 text-sm leading-[1.45] text-ivory/68 sm:text-[15px]">{point.description}</p></div></article>)}</div></section>;
}

function CategoryArt({ index }: { index: number }) { return <div className={`category-art category-${index + 1}`}><span>{String(index + 1).padStart(2, "0")}</span></div>; }

export function CollectionSection() {
  return <section id="collections" className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16"><SectionHeading label="Shop by category" /><div id="categories" className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">{homepageContent.featuredCategories.map((category, index) => <article key={category} className="group overflow-hidden border border-emerald/10 bg-white/35"><CategoryArt index={index} /><h3 className="px-2 py-4 text-center text-[10px] uppercase tracking-[0.12em] text-emerald">{category}</h3></article>)}</div><div className="mt-14 flex items-end justify-between border-b border-emerald/15 pb-3"><div><div className="text-[10px] uppercase tracking-[0.24em] text-gold">Customer favorites</div><h2 className="mt-1 font-serif text-[2rem] font-medium uppercase leading-none tracking-[0.08em] text-emerald">Our Best Sellers</h2></div><a href="#contact" className="text-[10px] uppercase tracking-[0.15em] text-emerald">View all products →</a></div><div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">{homepageContent.bestSellers.map((product) => <article key={product.name} className="group relative border border-emerald/10 bg-white/40 p-3">{product.badge ? <span className="absolute left-3 top-3 z-10 bg-gold px-2 py-1 text-[8px] uppercase tracking-widest text-emerald">{product.badge}</span> : null}<div className={`product-art product-${product.tone}`}><span>{product.tone === "chair" ? "V" : "LUXXE\nWHITE"}</span></div><h3 className="mt-3 font-serif text-[17px] font-semibold leading-tight text-emerald">{product.name}</h3><p className="mt-1 min-h-8 text-[10px] leading-4 text-emerald/60">{product.detail}</p><div className="mt-3 flex items-center justify-between border-t border-emerald/10 pt-3 text-xs font-semibold text-emerald"><span>{product.price}</span><button type="button" aria-label={`Add ${product.name} to cart`} className="text-lg leading-none text-gold">＋</button></div></article>)}</div></section>;
}

function SectionHeading({ label }: { label: string }) { return <div className="mb-8 flex items-center justify-center gap-4"><span className="h-px w-14 bg-gold/60" /><h2 className="text-center font-serif text-xl font-medium uppercase leading-none tracking-[0.14em] text-emerald">{label}</h2><span className="h-px w-14 bg-gold/60" /></div>; }

export function BrandStorySection() {
  return <section id="about" className="bg-emerald px-[22px] py-11 text-ivory sm:px-8 sm:py-12 lg:px-10 lg:py-[52px]">
    <div className="mx-auto max-w-6xl">
      <SectionHeadingDark label="Vision & Mission" />
      <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-0">
        <article className="text-center md:px-10 lg:px-14">
          <div className="mx-auto flex h-8 w-8 items-center justify-center text-gold">
            <svg aria-hidden="true" viewBox="0 0 32 32" className="h-8 w-8 fill-none stroke-current" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3.5 16s4.7-7.5 12.5-7.5S28.5 16 28.5 16s-4.7 7.5-12.5 7.5S3.5 16 3.5 16Z" />
              <circle cx="16" cy="16" r="4.25" />
              <path d="M16 5V2.5M7.8 7.8 6 6M24.2 7.8 26 6" opacity=".55" />
            </svg>
          </div>
          <h2 className="mt-3 font-serif text-[22px] font-semibold uppercase leading-[1.2] tracking-[0.08em] text-ivory sm:text-2xl">Our Vision</h2>
          <p className="mx-auto mt-3 max-w-[470px] font-sans text-[14px] font-normal leading-[1.7] text-ivory/80 sm:text-[15px]">To become a trusted destination for premium products that inspire better choices, elevate everyday living, and bring beauty, wellness, and comfort into every home.</p>
        </article>

        <article className="border-t border-gold/25 pt-8 text-center md:border-l md:border-t-0 md:px-10 md:pt-0 lg:px-14">
          <div className="mx-auto flex h-8 w-8 items-center justify-center text-gold">
            <svg aria-hidden="true" viewBox="0 0 32 32" className="h-8 w-8 fill-none stroke-current" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="16" cy="16" r="11.5" /><circle cx="16" cy="16" r="6.5" /><circle cx="16" cy="16" r="1.75" />
              <path d="m21 11 7-7M23 4h5v5" />
            </svg>
          </div>
          <h2 className="mt-3 font-serif text-[22px] font-semibold uppercase leading-[1.2] tracking-[0.08em] text-ivory sm:text-2xl">Our Mission</h2>
          <p className="mx-auto mt-3 max-w-[500px] font-sans text-[14px] font-normal leading-[1.7] text-ivory/80 sm:text-[15px]">To curate and provide quality beauty, wellness, personal care, and lifestyle products that combine value, convenience, and an elevated customer experience—making premium living more accessible to everyone.</p>
        </article>
      </div>
    </div>
  </section>;
}

function SectionHeadingDark({ label }: { label: string }) { return <div className="mb-4 flex items-center justify-center gap-4"><span className="h-px w-14 bg-gold/60" /><h2 className="font-serif text-2xl font-semibold uppercase leading-none tracking-[0.08em] text-gold sm:text-[28px]">{label}</h2><span className="h-px w-14 bg-gold/60" /></div>; }

export function JournalSection() {
  const { newsletter } = homepageContent;
  return <section id="journal" className="border-y border-emerald/20 bg-ivory px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-[58px]">
    <div className="mx-auto flex max-w-[1220px] flex-col justify-between gap-8 lg:flex-row lg:items-center lg:gap-12">
      <div className="max-w-[540px]">
        <div className="flex items-center gap-2.5 text-gold">
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="5" width="18" height="14" rx="1" />
            <path d="m4 7 8 6 8-6" />
          </svg>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em]">{newsletter.eyebrow}</p>
        </div>
        <h2 className="mt-3 max-w-[520px] font-serif text-[28px] font-semibold leading-[1.14] text-emerald sm:text-[32px]">{newsletter.heading}</h2>
        <p className="mt-3 font-sans text-sm leading-[1.5] text-emerald/65 sm:text-[15px]">Delivered straight to your inbox.</p>
      </div>

      <form className="w-full max-w-[500px] border-t border-gold/50 pt-3">
        <div className="flex h-[52px] w-full border border-emerald/25 bg-white/60 max-[389px]:h-auto max-[389px]:flex-col max-[389px]:gap-3 max-[389px]:border-0 max-[389px]:bg-transparent">
          <input aria-label="Email address" type="email" placeholder="Enter your email address" className="min-w-0 flex-1 bg-transparent px-4 font-sans text-sm text-emerald outline-none placeholder:text-emerald/45 max-[389px]:h-[52px] max-[389px]:border max-[389px]:border-emerald/25 max-[389px]:bg-white/60" />
          <button type="button" className="shrink-0 bg-emerald px-6 font-sans text-[11px] font-medium uppercase tracking-[0.15em] text-ivory transition duration-200 hover:text-gold max-[389px]:h-[52px]">Subscribe →</button>
        </div>
      </form>
    </div>
  </section>;
}
