import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import JsonLd from "@/components/JsonLd";
import { faqJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Kentsel Dönüşüm",
  description:
    "AKN Life İnşaat kentsel dönüşüm: Pendik ve İstanbul’da riskli yapılar için süreç, başvuru rehberi ve sık sorulan sorular.",
  path: "/kentsel-donusum",
});

const STEPS = [
  { n: "01", title: "Ön okuma", text: "Yapının durumu, hak sahipleri ve beklenti aynı masada konuşulur. Kapsam yazılmadan vaat verilmez." },
  { n: "02", title: "Çerçeve", text: "Güncel deprem yönetmeliği ve teknik koşullar, işin sınırını belirler. Sıra ve sorumluluk kayıt altına alınır." },
  { n: "03", title: "Uygulama", text: "Yıkım, yeni yapı ve ince iş aynı programın içinde ilerler. Değişiklik olursa kapsam yeniden yazılır." },
  { n: "04", title: "Teslim", text: "Yeni yaşam alanı, konuşulan düzene göre kapanır. Süreç sayfası genel çerçevedir; her parsel kendi dosyasıyla yürür." },
];

const GUIDE = [
  { title: "Yapıyı tarif edin", text: "Adres, kat sayısı ve varsa mevcut raporlar görüşmenin ilk cümlesidir. Eksik bilgiyle süre verilmez." },
  { title: "Hak sahiplerini netleştirin", text: "Dönüşüm, tek bir daire kararı değildir. Katılanlar ve beklenti baştan yazılır." },
  { title: "Ofise yazın", text: "Başvuru, iletişim formundan veya Pendik ofisinden yapılır. Telefon hattı kayıtlarda yoksa form yeterlidir." },
];

const FAQ = [
  {
    question: "Kentsel dönüşüm ne zaman başlar?",
    answer: "Yapının durumu, hak sahipleri ve resmi çerçeve netleşmeden takvim başlamaz. Her parsel kendi dosyasıyla ilerler.",
  },
  {
    question: "Riskli yapı ile ekonomik ömrünü tamamlamış yapı aynı mıdır?",
    answer: "Hayır. İkisi farklı teknik ve idari başlıklardır. Hangi çerçevenin geçerli olduğu, yerindeki veriye göre konuşulur.",
  },
  {
    question: "Başvuru için hangi bilgiler gerekir?",
    answer: "Adres, yapı hakkında bildikleriniz ve ulaşılacak kişi. Resmi evrak görüşmede netleşir; bu sayfa başvuru formu yerine geçmez.",
  },
  {
    question: "Süreç sayfasındaki adımlar bağlayıcı mıdır?",
    answer: "Hayır. Adımlar genel bir rehberdir. Sözleşme ve resmi süreç, o işin kendi koşullarıyla kurulur.",
  },
];

export default function UrbanPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-background">
        <section className="relative flex min-h-[70svh] items-end bg-[#1a1c1e] text-[#f4f3ef]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(to top, rgba(26,28,30,0.92), rgba(26,28,30,0.35)), url(https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1920&h=1080&q=80)",
            }}
            role="img"
            aria-label="Kentsel dönüşüm için modern bir cephe"
          />
          <div className="container-wide relative pb-16 pt-36">
            <p className="text-[11px] tracking-[0.28em] text-gold-soft uppercase">Pendik · İstanbul</p>
            <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-tight sm:text-6xl">Kentsel dönüşüm, sakin bir dille.</h1>
            <p className="mt-6 max-w-xl text-white/75">
              Ekonomik ömrünü tamamlamış ve riskli yapıları, güncel yönetmelik çerçevesinde güvenli yaşam alanlarına taşımak için genel süreç.
            </p>
          </div>
        </section>

        <section id="surec" className="section-space bg-background">
          <div className="container-wide">
            <p className="section-eyebrow">Süreç</p>
            <h2 className="mt-4 max-w-xl font-serif text-4xl text-cream">Dört adım, tek çerçeve.</h2>
            <ol className="mt-12 grid gap-px bg-black/[0.08] md:grid-cols-2">
              {STEPS.map((step) => (
                <li key={step.n} className="bg-[#fbfbfa] p-8">
                  <p className="font-serif text-3xl text-gold-dark">{step.n}</p>
                  <h3 className="mt-4 font-serif text-2xl text-cream">{step.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="basvuru" className="section-space bg-beige">
          <div className="container-wide grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="section-eyebrow">Başvuru rehberi</p>
              <h2 className="mt-4 font-serif text-4xl text-cream">Görüşmeye neyle gelinir.</h2>
              <Link href="/iletisim" className="mt-8 inline-flex h-12 items-center bg-[#1a1c1e] px-6 text-xs font-semibold tracking-[0.16em] text-[#f4f3ef] uppercase hover:bg-gold hover:text-navy">
                Teklif formu
              </Link>
            </div>
            <ol className="space-y-8 lg:col-span-7 lg:col-start-6">
              {GUIDE.map((item, index) => (
                <li key={item.title} className="border-t border-black/[0.08] pt-6">
                  <p className="text-[11px] tracking-[0.2em] text-gold-dark uppercase">0{index + 1}</p>
                  <h3 className="mt-2 font-serif text-2xl text-cream">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{item.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="sss" className="section-space bg-background">
          <div className="container-wide max-w-3xl">
            <p className="section-eyebrow">Sık sorulan sorular</p>
            <h2 className="mt-4 font-serif text-4xl text-cream">Kısa ve açık cevaplar.</h2>
            <div className="mt-10 divide-y divide-black/[0.08] border-y border-black/[0.08]">
              {FAQ.map((item) => (
                <details key={item.question} className="group py-5">
                  <summary className="cursor-pointer list-none font-serif text-2xl text-cream marker:content-none [&::-webkit-details-marker]:hidden">
                    {item.question}
                  </summary>
                  <p className="mt-4 max-w-2xl leading-relaxed text-muted">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <JsonLd data={faqJsonLd(FAQ)} />
      <Footer />
      <FloatingActions />
    </>
  );
}
