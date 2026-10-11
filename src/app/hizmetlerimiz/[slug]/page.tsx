import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import InquiryForm from "@/components/InquiryForm";
import TrustBadges from "@/components/TrustBadges";
import JsonLd from "@/components/JsonLd";
import { getServiceBySlug, SERVICES } from "@/lib/constants";
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Hizmet bulunamadı" };

  return pageMetadata({
    title: service.seoTitle,
    description: service.seoDescription,
    path: `/hizmetlerimiz/${service.slug}`,
    image: { url: service.image, alt: service.alt },
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = SERVICES.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Ana sayfa", path: "/" },
          { name: "Hizmetlerimiz", path: "/hizmetlerimiz" },
          { name: service.name, path: `/hizmetlerimiz/${service.slug}` },
        ])}
      />
      <JsonLd data={serviceJsonLd(service)} />
      <Header />
      <main className="flex-1 bg-background">
        <section className="relative h-[42vh] min-h-[280px] w-full overflow-hidden sm:h-[48vh]">
          <Image
            src={service.image}
            alt={service.alt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c1e] via-[#1a1c1e]/45 to-[#1a1c1e]/15" />
          <div className="absolute inset-x-0 bottom-0 mx-auto max-w-5xl px-6 pb-10 lg:px-12">
            <nav aria-label="Sayfa yolu" className="mb-5 text-sm text-white/75">
              <Link href="/" className="hover:text-white">Ana sayfa</Link>
              <span aria-hidden> / </span>
              <Link href="/hizmetlerimiz" className="hover:text-white">Hizmetlerimiz</Link>
              <span aria-hidden> / </span>
              <span className="text-white">{service.name}</span>
            </nav>
            <h1 className="font-serif text-4xl text-white sm:text-5xl">{service.name}</h1>
            <div className="mt-4 flex flex-wrap gap-3">
              <span className="rounded-full bg-white/15 px-3 py-1 text-sm text-white backdrop-blur-sm">
                {service.scope}
              </span>
              <span className="rounded-full bg-gold px-3 py-1 text-sm font-semibold text-navy">
                {service.focus}
              </span>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-14 lg:px-12 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-start">
            <div>
              <p className="text-lg leading-relaxed text-muted sm:text-xl">{service.description}</p>
              <div className="mt-8 space-y-6">
                {service.details.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-relaxed text-cream sm:text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <aside className="border border-gold/20 bg-surface p-6 sm:p-8">
              <h2 className="font-serif text-2xl text-cream">Bu hizmette neler var</h2>
              <ul className="mt-6 space-y-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm leading-relaxed text-cream sm:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-gold" aria-hidden />
                    {feature}
                  </li>
                ))}
              </ul>
              <TrustBadges className="mt-8" />
            </aside>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {service.gallery.map((shot) => (
              <figure key={shot.src} className="relative h-64 overflow-hidden sm:h-80">
                <Image src={shot.src} alt={shot.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </figure>
            ))}
          </div>

          <div className="mt-16 grid gap-8 bg-beige p-5 sm:p-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
            <div>
              <p className="section-eyebrow">İletişim</p>
              <h2 className="mt-4 font-serif text-3xl text-cream sm:text-4xl">{service.name} için yazın.</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                Kapsamı, arsayı veya mevcut yapıyı kısaca anlatın. Dönüş, ofis üzerinden planlanır.
              </p>
              <Link
                href="/iletisim"
                className="mt-6 inline-flex min-h-12 items-center justify-center border border-gold px-6 text-sm font-semibold text-gold-dark hover:bg-gold hover:text-navy"
              >
                Ofis bilgilerini görün
              </Link>
            </div>
            <InquiryForm heading="Mesaj bırakın" subject={service.name} />
          </div>

          <div className="mt-20">
            <h2 className="font-serif text-3xl text-cream">Diğer hizmetler</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/hizmetlerimiz/${item.slug}`}
                  className="group overflow-hidden border border-gold/20 bg-surface transition duration-300 hover:-translate-y-1 hover:border-gold/50"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif text-xl text-cream">{item.name}</h3>
                    <p className="mt-2 text-sm text-gold-dark">{item.meta}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
