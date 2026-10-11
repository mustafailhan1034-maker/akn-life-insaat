import Image from "next/image";
import Link from "next/link";
import TrustBadges from "@/components/TrustBadges";
import { SERVICES } from "@/lib/constants";

export default function Services() {
  return (
    <section id="hizmetler" className="section-space bg-background">
      <div className="mx-auto mb-14 max-w-3xl px-6 text-center">
        <p className="section-eyebrow">02 — Hizmetlerimiz</p>
        <h2 className="mt-4 font-serif text-4xl text-cream sm:text-5xl">Tek çatı altında, uçtan uca inşaat.</h2>
        <div className="editorial-rule mx-auto mt-6 w-24" />
        <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
          Fikirden teslime kadar her hizmet ölçülebilir bir iş programıyla yürür. Kartın detayı kendi sayfasında.
        </p>
        <TrustBadges className="mt-6 justify-center" />
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 md:grid-cols-2 lg:px-12">
        {SERVICES.map((service) => (
          <article key={service.slug} className="group flex h-full flex-col overflow-hidden border border-gold/20 bg-surface transition duration-300 hover:-translate-y-1 hover:border-gold/50">
            <Link href={`/hizmetlerimiz/${service.slug}`} className="relative block h-64 overflow-hidden">
              <Image src={service.image} alt={service.alt} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
            </Link>
            <div className="flex flex-1 flex-col p-6">
              <Link href={`/hizmetlerimiz/${service.slug}`}>
                <h3 className="font-serif text-3xl text-cream hover:text-gold-dark">{service.name}</h3>
              </Link>
              <span className="mt-3 inline-flex w-fit border border-gold/40 px-3 py-1 text-sm font-semibold text-gold-dark">{service.meta}</span>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{service.description}</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link href={`/hizmetlerimiz/${service.slug}`} className="inline-flex h-11 flex-1 items-center justify-center border border-gold text-xs font-semibold tracking-wide text-gold-dark uppercase hover:bg-gold hover:text-navy">
                  Detaylı incele
                </Link>
                <Link href="/iletisim" className="inline-flex h-11 flex-1 items-center justify-center bg-gold text-xs font-semibold tracking-wide text-navy uppercase hover:bg-gold-soft">
                  İletişime geç
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
