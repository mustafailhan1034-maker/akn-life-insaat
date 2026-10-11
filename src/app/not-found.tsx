import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-navy px-6 pt-24 text-center text-white">
      <div>
        <p className="text-xs tracking-[0.28em] text-gold-soft uppercase">AKN Life İnşaat</p>
        <h1 className="mt-4 font-serif text-5xl">Sayfa bulunamadı</h1>
        <Link href="/" className="mt-8 inline-flex bg-gold px-5 py-3 text-sm font-semibold text-navy">
          Ana sayfaya dön
        </Link>
      </div>
    </main>
  );
}
