import type { Metadata } from "next";
import { SERVICES, SITE } from "@/lib/constants";

export const OG_IMAGE = {
  url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
  width: 1200,
  height: 630,
  alt: "AKN Life İnşaat, Pendik merkezli modern konut mimarisi",
} as const;

export const SEO = {
  title: "AKN Life İnşaat | Pendik Konut ve Kentsel Dönüşüm",
  description:
    "AKN Life İnşaat, Kerem Akan liderliğinde Pendik’te müteahhitlik, kentsel dönüşüm, anahtar teslim konut ve yenileme yürütür. Velibaba Mah. Hukukçular Cad. No:38.",
  keywords: [
    "AKN Life İnşaat",
    "Kerem Akan",
    "Pendik inşaat firması",
    "Pendik kentsel dönüşüm",
    "anahtar teslim inşaat",
    "konut ve toplu yapı",
    "bina yenileme Pendik",
  ],
} as const;

const siteUrl = `https://${SITE.domain}`;

export function pageMetadata({
  title,
  description,
  path,
  image,
  absolute = false,
}: {
  title: string;
  description: string;
  path: string;
  image?: { url: string; alt: string };
  absolute?: boolean;
}): Metadata {
  const visual = image
    ? { url: image.url, alt: image.alt }
    : { url: OG_IMAGE.url, alt: OG_IMAGE.alt };

  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "tr_TR",
      url: path,
      siteName: SITE.nameDisplay,
      title,
      description,
      images: [visual],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [visual.url],
    },
  };
}

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["HomeAndConstructionBusiness", "GeneralContractor"],
  "@id": `${siteUrl}/#business`,
  name: SITE.legalName,
  alternateName: [SITE.nameDisplay, SITE.name],
  description: SEO.description,
  url: siteUrl,
  image: OG_IMAGE.url,
  founder: { "@type": "Person", name: SITE.founder },
  vatID: SITE.taxNumber,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.line1,
    addressLocality: "Pendik",
    addressRegion: "İstanbul",
    addressCountry: "TR",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Pendik" },
    { "@type": "City", name: "İstanbul" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "İnşaat hizmetleri",
    itemListElement: SERVICES.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        url: `${siteUrl}/hizmetlerimiz/${service.slug}`,
        areaServed: "İstanbul",
      },
    })),
  },
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: SITE.nameDisplay,
  description: SEO.description,
  inLanguage: "tr-TR",
  publisher: { "@id": `${siteUrl}/#business` },
};

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}

export function serviceJsonLd(service: (typeof SERVICES)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.seoDescription,
    url: `${siteUrl}/hizmetlerimiz/${service.slug}`,
    image: service.image,
    provider: { "@id": `${siteUrl}/#business` },
    areaServed: { "@type": "City", name: "İstanbul" },
    serviceType: service.focus,
  };
}

export function faqJsonLd(items: readonly { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
