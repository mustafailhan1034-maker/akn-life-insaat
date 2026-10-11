import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Projects from "@/components/Projects";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Projelerimiz",
  description:
    "AKN Life İnşaat temsili proje kurguları: tamamlanan, devam eden ve planlanan çalışma örnekleri. Kartlar gerçek teslim listesi değildir.",
  path: "/projelerimiz",
});

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-background pt-36">
        <Projects titleTag="h1" />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
