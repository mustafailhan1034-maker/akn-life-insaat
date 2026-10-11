const STATS = [
  { value: "08", label: "Hizmet alanı" },
  { value: "04", label: "Süreç adımı" },
  { value: "Pendik", label: "Merkez ofis" },
  { value: "İstanbul", label: "Çalışma bölgesi" },
] as const;

export default function StatsBand() {
  return (
    <section className="border-y border-black/[0.08] bg-[#f4f3ef]" aria-label="Kapsam">
      <div className="container-wide grid grid-cols-2 lg:grid-cols-4">
        {STATS.map((item, index) => (
          <div
            key={item.label}
            className={`px-6 py-10 sm:px-8 sm:py-14 ${index % 2 === 0 ? "border-black/[0.08]" : ""} ${index < 2 ? "border-b lg:border-b-0" : ""} ${index !== 3 ? "lg:border-r lg:border-black/[0.08]" : ""}`}
          >
            <p className="font-serif text-4xl text-[#1a1c1e] sm:text-5xl">{item.value}</p>
            <p className="mt-3 text-[11px] tracking-[0.2em] text-gold-dark uppercase">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
