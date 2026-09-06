"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { assetPath } from "./asset-path";
import { navigation } from "./site-data";
import { useStore } from "./store-provider";

function SearchIcon() { return <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="1.5"><circle cx="11" cy="11" r="6.5" /><path d="m16 16 5 5" /></svg>; }
function BagIcon() { return <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="1.5"><path d="M5 8h14l-1 13H6L5 8Z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" /></svg>; }

export function Header() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();
  const { cartCount } = useStore();
  const submitSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const search = query.trim();
    router.push(search ? `/shop?search=${encodeURIComponent(search)}` : "/shop");
    setOpen(false);
    setSearchOpen(false);
  };

  return <header className="sticky top-0 z-50 border-b border-emerald/10 bg-ivory">
    <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-4 lg:px-6">
      <Link href="/#home" aria-label="VANGUARD home" className="flex items-center"><Image src={assetPath("/vanguard-logo.png")} alt="VANGUARD by VELORIAN" width={250} height={250} className="h-[62px] w-[62px] object-contain" priority /><span className="sr-only">VANGUARD by VELORIAN</span></Link>
      <nav className="hidden items-center gap-8 lg:flex">{navigation.map((item) => <Link key={item.href} href={item.href} className="border-b border-transparent py-2 text-[11px] uppercase tracking-[0.16em] text-emerald transition hover:border-gold hover:text-gold">{item.label}</Link>)}</nav>
      <div className="flex items-center gap-5"><div className="hidden items-center gap-5 sm:flex"><button type="button" aria-label={searchOpen ? "Close search" : "Search"} aria-expanded={searchOpen} onClick={() => setSearchOpen((value) => !value)} className="relative text-emerald transition hover:text-gold"><SearchIcon /></button><Link href="/cart" aria-label={`Cart with ${cartCount} items`} className="relative text-emerald transition hover:text-gold"><BagIcon /><span className="absolute -right-2 -top-2 flex h-3.5 min-w-3.5 items-center justify-center rounded-full bg-gold px-1 text-[8px] text-emerald">{cartCount}</span></Link></div><button type="button" aria-label={open ? "Close menu" : "Open menu"} className="border-l border-emerald/15 pl-4 text-[11px] uppercase tracking-[0.16em] text-emerald lg:hidden" onClick={() => setOpen((value) => !value)}>{open ? "Close" : "Menu"}</button></div>
    </div>
    {searchOpen ? <HeaderSearch query={query} setQuery={setQuery} onSubmit={submitSearch} /> : null}
    {open ? <div className="border-t border-emerald/10 bg-ivory lg:hidden"><nav className="mx-auto flex max-w-7xl flex-col px-4 py-5">{navigation.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="border-b border-emerald/10 py-4 text-xs uppercase tracking-[0.18em] text-emerald">{item.label}</Link>)}<div className="flex items-center gap-5 py-4 sm:hidden"><button type="button" aria-label={searchOpen ? "Close search" : "Search"} aria-expanded={searchOpen} onClick={() => setSearchOpen((value) => !value)} className="text-emerald"><SearchIcon /></button><Link href="/cart" aria-label={`Cart with ${cartCount} items`} className="relative text-emerald"><BagIcon /><span className="absolute -right-2 -top-2 flex h-3.5 min-w-3.5 items-center justify-center rounded-full bg-gold px-1 text-[8px] text-emerald">{cartCount}</span></Link></div></nav></div> : null}
  </header>;
}

function HeaderSearch({ query, setQuery, onSubmit }: { query: string; setQuery: (value: string) => void; onSubmit: (event: React.FormEvent<HTMLFormElement>) => void }) {
  return <div className="border-t border-emerald/10 bg-ivory"><form role="search" onSubmit={onSubmit} className="mx-auto flex max-w-7xl gap-2 px-4 py-3 lg:px-6"><label className="sr-only" htmlFor="header-product-search">Search products</label><input id="header-product-search" value={query} onChange={(event) => setQuery(event.target.value)} autoFocus type="search" placeholder="Search products..." className="h-11 min-w-0 flex-1 border border-emerald/20 bg-white/60 px-4 text-sm text-emerald outline-none transition placeholder:text-emerald/45 focus:border-gold focus:ring-2 focus:ring-gold/20" /><button type="submit" className="h-11 shrink-0 bg-emerald px-5 text-[10px] uppercase tracking-[0.15em] text-ivory transition hover:bg-gold hover:text-emerald sm:px-7">Search</button></form></div>;
}
