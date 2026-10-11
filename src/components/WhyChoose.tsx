import { Award, Ruler, ShieldCheck, Sparkles } from "lucide-react";
import { FEATURES } from "@/lib/constants";

const ICONS = {
  shield: ShieldCheck,
  award: Award,
  sparkles: Sparkles,
  ruler: Ruler,
} as const;

export default function WhyChoose() {
  return (
    <section id="neden" className="section-space bg-stone" aria-labelledby="neden-baslik">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">İş disiplini</p>
          <h2 id="neden-baslik" className="mt-4 font-serif text-4xl text-cream sm:text-5xl">
            Hassasiyet, güvenlik ve işçilik.
          </h2>
          <div className="editorial-rule mx-auto mt-6 w-20" />
          <p className="mt-6 text-base leading-relaxed text-muted">
            Her yapı, ölçülen bir kapsam ve izlenebilir bir şantiye düzeniyle ilerler.
          </p>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => {
            const Icon = ICONS[feature.icon];
            return (
              <article key={feature.title} className="border border-white/10 bg-surface px-6 py-8 transition duration-300 hover:-translate-y-1 hover:border-[#7B90A8]">
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center border border-gold text-gold-dark">
                  <Icon className="h-4 w-4" aria-hidden />
                </div>
                <h3 className="font-serif text-2xl text-cream">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{feature.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
