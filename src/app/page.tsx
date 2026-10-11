import type { Metadata } from "next";
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import StatsBand from "@/components/StatsBand";
import Features from "@/components/Features";
import WhyChoose from "@/components/WhyChoose";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import UrbanBanner from "@/components/UrbanBanner";
import FloatingActions from "@/components/FloatingActions";
import Footer from "@/components/Footer";
import { pageMetadata, SEO } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata({
    title: SEO.title,
    description: SEO.description,
    path: "/",
    absolute: true,
  }),
  keywords: [...SEO.keywords],
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 overflow-x-hidden bg-background">
        <HeroSlider />
        <StatsBand />
        <Features />
        <Services />
        <Projects />
        <UrbanBanner />
        <WhyChoose />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
