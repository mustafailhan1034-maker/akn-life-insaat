import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import JsonLd from "@/components/JsonLd";
import { CORPORATE_PAGES, getCorporatePage } from "@/lib/corporate";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

type CorporateRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return CORPORATE_PAGES.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: CorporateRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getCorporatePage(slug);
  if (!page) return { title: "Sayfa bulunamadı" };

  return pageMetadata({
    title: page.seoTitle,
    description: page.seoDescription,
    path: `/kurumsal/${page.slug}`,
    image: { url: page.image, alt: page.alt },
  });
}

export default async function CorporateDetailPage({ params }: CorporateRouteProps) {
  const { slug } = await params;
  const page = getCorporatePage(slug);
  if (!page) notFound();

  const siblings = CORPORATE_PAGES.filter((item) => item.slug !== page.slug);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Ana sayfa", path: "/" },
          { name: "Kurumsal", path: "/kurumsal" },
          { name: page.name, path: `/kurumsal/${page.slug}` },
        ])}
      />
      <Header />
      <main className="flex-1 bg-background">
        <section className="relative flex min-h-[68svh] items-end overflow-hidden bg-[#1a1c1e] text-[#f4f3ef]">
          <Image src={page.image} alt={page.alt} fill priority className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c1e] via-[#1a1c1e]/50 to-[#1a1c1e]/15" />
          <div className="container-wide relative pb-14 pt-40">
            <nav aria-label="Sayfa yolu" className="text-sm text-white/70">
              <Link href="/" className="hover:text-white">Ana sayfa</Link>
              <span aria-hidden> / </span>
              <Link href="/kurumsal" className="hover:text-white">Kurumsal</Link>
              <span aria-hidden> / </span>
              <span className="text-white">{page.name}</span>
            </nav>
            <p className="mt-6 text-[11px] tracking-[0.28em] text-gold-soft uppercase">{page.eyebrow}</p>
            <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-tight sm:text-6xl">{page.title}</h1>
          </div>
        </section>

        <section className="section-space bg-[#fbfbfa]">
          <div className="container-wide grid items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="max-w-md font-serif text-3xl leading-snug text-[#1a1c1e]">{page.lead}</p>
              <div className="editorial-rule mt-8 w-20" />
            </div>
            <div className="space-y-10 lg:col-span-6 lg:col-start-7">
              {page.chapters.map((chapter) => (
                <article key={chapter.heading} className="border-t border-black/[0.08] pt-6">
                  <h2 className="font-serif text-2xl text-cream">{chapter.heading}</h2>
                  <p className="mt-3 text-base leading-relaxed text-muted">{chapter.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f4f3ef]">
          <div className="container-wide grid items-stretch lg:grid-cols-12">
            <div className="relative min-h-[22rem] lg:col-span-5">
              <Image src={page.portrait} alt={page.portraitAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
            </div>
            <div className="grid gap-px bg-black/[0.08] lg:col-span-7 lg:grid-cols-1">
              {page.notes.map((note) => (
                <article key={note.title} className="bg-[#f4f3ef] px-8 py-10 sm:px-12">
                  <h2 className="font-serif text-2xl text-[#1a1c1e]">{note.title}</h2>
                  <p className="mt-3 max-w-md leading-relaxed text-muted">{note.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space bg-[#1a1c1e] text-[#f4f3ef]">
          <div className="container-wide flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[11px] tracking-[0.22em] text-gold-soft uppercase">Kurumsal içinde</p>
              <ul className="mt-6 space-y-3">
                {siblings.map((item) => (
                  <li key={item.slug}>
                    <Link href={`/kurumsal/${item.slug}`} className="font-serif text-3xl hover:text-gold-soft">
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/kurumsal" className="font-serif text-3xl text-white/70 hover:text-gold-soft">
                    Genel bakış
                  </Link>
                </li>
              </ul>
            </div>
            <Link href="/iletisim" className="inline-flex h-12 items-center bg-gold px-6 text-xs font-semibold tracking-[0.16em] text-navy uppercase hover:bg-gold-soft">
              Teklif formu
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
