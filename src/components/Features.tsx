import Image from "next/image";
import Link from "next/link";

export default function Features() {
  return (
    <section id="hakkimizda" className="section-space bg-background">
      <div className="container-wide grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/4] lg:aspect-[4/5]">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80"
            alt="Aydınlık ve modern bir konut cephesi"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div>
          <p className="section-eyebrow">01 — Hakkımızda</p>
          <h2 className="mt-4 font-serif text-4xl text-cream sm:text-5xl">Vizyonu olan bir inşaat anlayışı.</h2>
          <div className="editorial-rule mt-6 w-20" />
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            AKN Life İnşaat, güvenilir, modern ve kaliteli yaşam alanları inşa etmek üzere Said Akın liderliğinde faaliyet gösterir. İstanbul ve Marmara’daki işlerimizde her yapıyı uzun yıllar yaşanacak bir değer olarak ele alırız.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Doğru mühendislik, seçici malzeme, şeffaf süreç ve estetik bütünlük aynı ilkenin parçasıdır: söz verilen kaliteyi planlı ve izlenebilir biçimde hayata geçirmek.
          </p>
          <Link href="/kurumsal" className="mt-8 inline-flex h-11 items-center border border-[#2b2c2e]/15 px-5 text-xs font-semibold tracking-[0.16em] text-[#2b2c2e] uppercase hover:border-[#c5a880] hover:text-gold-dark">
            Kurumsal sayfa
          </Link>
        </div>
      </div>
    </section>
  );
}
