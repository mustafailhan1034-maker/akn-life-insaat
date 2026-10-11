import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { SERVICES } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Hizmetlerimiz",
  description:
    "AKN Life İnşaat hizmetleri: müteahhitlik, kentsel dönüşüm, anahtar teslim, konut, ticari yapı, mühendislik, kaba-ince iş ve renovasyon.",
  path: "/hizmetlerimiz",
});

export default function ServicesIndexPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-background">
        <section className="section-space !pt-40">
          <div className="mx-auto mb-14 max-w-3xl px-6 text-center">
            <p className="section-eyebrow">AKN Life İnşaat</p>
            <h1 className="mt-5 font-serif text-4xl font-semibold text-cream sm:text-5xl">
              Hizmetlerimiz
            </h1>
            <div className="editorial-rule mx-auto mt-6 w-24" />
            <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
              Sekiz hizmet, aynı iş disiplini. Her kart kendi sayfasında açılır.
            </p>
          </div>
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 md:grid-cols-2 lg:px-12">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/hizmetlerimiz/${service.slug}`}
                className="group overflow-hidden border border-gold/20 bg-surface transition duration-300 hover:-translate-y-1 hover:border-gold/50"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <h2 className="font-serif text-3xl text-cream">{service.name}</h2>
                  <p className="mt-3 text-sm font-semibold text-gold-dark">{service.meta}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
