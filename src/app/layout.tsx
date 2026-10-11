import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import ScrollOnNavigate from "@/components/ScrollOnNavigate";
import { localBusinessJsonLd, OG_IMAGE, SEO, websiteJsonLd } from "@/lib/seo";
import { SITE } from "@/lib/constants";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${SITE.domain}`),
  title: {
    default: SEO.title,
    template: "%s | AKN Life İnşaat",
  },
  description: SEO.description,
  keywords: [...SEO.keywords],
  authors: [{ name: SITE.legalName }],
  creator: SITE.legalName,
  publisher: SITE.legalName,
  category: "construction",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: `https://${SITE.domain}`,
    siteName: SITE.nameDisplay,
    title: SEO.title,
    description: SEO.description,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.description,
    images: [OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "theme-color": "#fbfbfa",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={`${outfit.variable} ${display.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground" suppressHydrationWarning>
        <ScrollOnNavigate />
        <JsonLd data={localBusinessJsonLd} />
        <JsonLd data={websiteJsonLd} />
        {children}
      </body>
    </html>
  );
}
