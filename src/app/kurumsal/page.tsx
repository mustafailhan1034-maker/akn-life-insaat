import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { CORPORATE_PAGES } from "@/lib/corporate";
import { SITE } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Kurumsal",
  description:
    "AKN Life İnşaat kurumsal sayfası: Said Akın liderliğinde İstanbul ve Marmara Bölgesi’nde çalışan firma. Hakkımızda, biz kimiz, misyon ve vizyon.",
  path: "/kurumsal",
});

export default function KurumsalPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-background">
        <section className="relative flex min-h-[70svh] items-end overflow-hidden bg-[#181D23] text-[#E2E8F0]">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&h=1080&q=80"
            alt="Akşam ışığında modern bir konut cephesi"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181D23] via-[#181D23]/55 to-[#181D23]/20" />
          <div className="container-wide relative pb-16 pt-40">
            <p className="text-[11px] tracking-[0.28em] text-gold-soft uppercase">AKN Life İnşaat</p>
            <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-tight sm:text-6xl">Kurumsal</h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75">
              {SITE.legalName}. İstanbul ve Marmara’da müteahhitlik; konut, dönüşüm ve yenilemede aynı iş disiplini.
            </p>
          </div>
        </section>

        <section className="section-space bg-background">
          <div className="container-wide grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="section-eyebrow">Genel bakış</p>
              <h2 className="mt-4 font-serif text-4xl text-cream">Üç sayfa, tek ofis.</h2>
              <div className="editorial-rule mt-6 w-20" />
            </div>
            <div className="space-y-5 text-base leading-relaxed text-muted lg:col-span-7 lg:col-start-6">
              <p>
                Firmayı Said Akın yönetir. Merkez adres {SITE.address.full}. Vergi kaydı {SITE.taxOffice} {SITE.taxNumber}.
              </p>
              <p>
                Aşağıdaki sayfalar firmanın kimliğini, çalışma biçimini ve yönünü ayrı ayrı anlatır. Tarihli bir kuruluş kronolojisi yayımlanmamıştır; burada kayıtlardaki unvan, adres ve iş disiplini durur.
              </p>
            </div>
          </div>
          <div className="container-wide mt-16 grid gap-6 md:grid-cols-3">
            {CORPORATE_PAGES.map((page) => (
              <Link key={page.slug} href={`/kurumsal/${page.slug}`} className="group border border-white/10 bg-[#1F2630]">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={page.image}
                    alt={page.alt}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[11px] tracking-[0.2em] text-gold-dark uppercase">{page.name}</p>
                  <h3 className="mt-3 font-serif text-2xl text-cream">{page.title}</h3>
                  <p className="mt-4 text-sm tracking-[0.14em] text-[#C4D1DF] uppercase">Sayfayı aç</p>
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
