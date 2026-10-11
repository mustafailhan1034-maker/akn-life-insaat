import Link from "next/link";

export default function UrbanBanner() {
  return (
    <section className="relative isolate min-h-[32rem] overflow-hidden bg-[#181D23] text-[#E2E8F0]">
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-fixed"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(26,28,30,0.88) 0%, rgba(26,28,30,0.55) 55%, rgba(26,28,30,0.35) 100%), url(https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1920&q=80)",
        }}
        role="img"
        aria-label="Modern bir yapı cephesi"
      />
      <div className="container-wide relative grid min-h-[32rem] items-center py-20 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="text-[11px] tracking-[0.28em] text-gold-soft uppercase">Kentsel dönüşüm</p>
          <h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight sm:text-6xl">Riskli yapıdan, oturulabilir bir düzene.</h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/75">
            Ekonomik ömrünü tamamlamış yapılar için süreç, başvuru adımları ve sık sorulan sorular tek sayfada.
          </p>
          <Link href="/kentsel-donusum" className="mt-8 inline-flex h-12 items-center bg-gold px-6 text-xs font-semibold tracking-[0.16em] text-navy uppercase hover:bg-gold-soft">
            Dönüşüm sayfasına git
          </Link>
        </div>
      </div>
    </section>
  );
}
