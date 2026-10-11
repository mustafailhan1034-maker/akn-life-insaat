import { SERVICE_AREA } from "@/lib/constants";

export default function ServiceArea() {
  return (
    <section className="border-y border-gold/20 bg-stone py-10" aria-label="Çalışma bölgesi">
      <div className="container-wide flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs font-semibold tracking-[0.22em] text-gold uppercase">Çalışma bölgesi</p>
        <ul className="flex flex-wrap gap-3">
          {SERVICE_AREA.map((area) => (
            <li key={area} className="border border-gold/30 px-4 py-2 text-sm font-semibold text-cream">
              {area}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
