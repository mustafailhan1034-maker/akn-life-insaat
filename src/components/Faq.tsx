import { FAQ } from "@/lib/constants";

export default function Faq() {
  return (
    <section id="sss" className="section-space bg-stone" aria-labelledby="sss-baslik">
      <div className="container-wide grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="section-eyebrow">Sık sorulanlar</p>
          <h2 id="sss-baslik" className="mt-4 font-serif text-4xl text-cream sm:text-5xl">
            Karar vermeden önce netleşen başlıklar.
          </h2>
        </div>
        <div className="divide-y divide-gold/20 border-y border-gold/20">
          {FAQ.map((item) => (
            <details key={item.question} className="group py-5">
              <summary className="cursor-pointer list-none font-serif text-2xl text-cream marker:content-none">
                <span className="flex items-start justify-between gap-6">
                  {item.question}
                  <span className="mt-1 text-gold-dark transition group-open:rotate-45" aria-hidden>
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
