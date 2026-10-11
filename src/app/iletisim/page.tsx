import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import InfoPanel from "@/components/InfoPanel";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "İletişim",
  description:
    "AKN Life İnşaat iletişim: İstanbul ofisi ve teklif formu. Velibaba Mah. Hukukçular Cad. No:38 İç Kapı No:22.",
  path: "/iletisim",
});

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-background pt-40">
        <div className="container-wide pb-4 pt-8">
          <p className="section-eyebrow">İletişim</p>
          <h1 className="mt-4 max-w-2xl font-serif text-5xl text-cream">Teklif için yazın.</h1>
        </div>
        <InfoPanel />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
