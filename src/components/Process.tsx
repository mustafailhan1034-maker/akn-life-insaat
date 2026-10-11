import { PROCESS } from "@/lib/constants";

export default function Process() {
  return (
    <section id="surec" className="section-space bg-navy text-white">
      <div className="container-wide">
        <p className="section-eyebrow text-gold-soft">03 — Sürecimiz</p>
        <h2 className="mt-4 max-w-2xl font-serif text-4xl sm:text-5xl">Basit, izlenebilir, baştan belli.</h2>
        <p className="mt-4 max-w-2xl text-white/75">
          Önce kapsam, sonra inşaat: keşif, plan, uygulama ve teslim aynı sırayı izler.
        </p>
        <ol className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {PROCESS.map((item) => (
            <li key={item.step} className="border border-gold/20 bg-white/5 p-6 transition duration-300 hover:border-gold/50">
              <p className="font-serif text-3xl text-gold-soft">{item.step}</p>
              <h3 className="mt-4 font-serif text-2xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75">{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
