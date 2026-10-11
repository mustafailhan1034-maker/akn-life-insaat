import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section id="referanslar" className="section-space bg-background">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Referanslar</p>
          <h2 className="mt-4 font-serif text-4xl text-cream sm:text-5xl">İşten beklenen netlik.</h2>
          <div className="editorial-rule mx-auto mt-6 w-20" />
          <p className="mt-5 text-sm text-muted">
            Aşağıdaki kartlar gerçek müşteri yorumu değildir. Çalışma anlayışını anlatan örnek ifadelerdir.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {TESTIMONIALS.map((item) => (
            <article key={item.role} className="flex flex-col border border-gold/20 bg-surface px-6 py-8 transition duration-300 hover:border-gold/50">
              <div className="mb-5 flex gap-1" aria-hidden>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="flex-1 font-serif text-xl leading-relaxed text-cream">“{item.text}”</p>
              <div className="mt-8 border-t border-gold/20 pt-5">
                <p className="font-serif text-lg text-cream">{item.name}</p>
                <p className="mt-1 text-sm text-muted">{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
