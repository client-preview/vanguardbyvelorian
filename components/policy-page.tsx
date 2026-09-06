import { StorefrontShell } from "./storefront-shell";

export type PolicySection = { title: string; paragraphs?: string[]; items?: string[] };

type PolicyPageProps = { title: string; intro: string; sections: PolicySection[] };

export function PolicyPage({ title, intro, sections }: PolicyPageProps) {
  return <StorefrontShell>
    <section className="bg-ivory px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
      <article className="mx-auto max-w-[960px]">
        <header className="border-b border-gold/35 pb-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">VANGUARD Customer Care</p>
          <h1 className="mt-3 font-serif text-4xl font-semibold uppercase tracking-[0.06em] text-emerald sm:text-5xl">{title}</h1>
          <p className="mt-4 text-sm text-emerald/60">Last Updated: September 4, 2026</p>
          <p className="mt-6 max-w-3xl font-sans text-[15px] leading-7 text-emerald/75 sm:text-base">{intro}</p>
        </header>
        <div className="divide-y divide-emerald/10">
          {sections.map((section) => <section key={section.title} className="py-8 sm:py-9">
            <h2 className="font-serif text-2xl font-semibold uppercase tracking-[0.06em] text-emerald">{section.title}</h2>
            {section.paragraphs?.map((paragraph) => <p key={paragraph} className="mt-4 font-sans text-[15px] leading-7 text-emerald/75 sm:text-base">{paragraph}</p>)}
            {section.items ? <ul className="mt-4 grid gap-2.5 pl-5 font-sans text-[15px] leading-7 text-emerald/75 marker:text-gold sm:text-base">{section.items.map((item) => <li key={item}>{item}</li>)}</ul> : null}
          </section>)}
        </div>
      </article>
    </section>
  </StorefrontShell>;
}
