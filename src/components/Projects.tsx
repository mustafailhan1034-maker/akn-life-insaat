"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/lib/constants";

const TABS = [
  { id: "tamamlanan", key: "completed", label: "Tamamlanan" },
  { id: "devam-eden", key: "ongoing", label: "Devam Eden" },
  { id: "planlanan", key: "planned", label: "Planlanan" },
] as const;

type TabId = (typeof TABS)[number]["id"];

const BADGE: Record<TabId, string> = {
  tamamlanan: "Tamamlandı",
  "devam-eden": "Devam ediyor",
  planlanan: "Planlandı",
};

export default function Projects({ titleTag = "h2" }: { titleTag?: "h1" | "h2" }) {
  const [tab, setTab] = useState<TabId>("tamamlanan");
  const Title = titleTag;

  useEffect(() => {
    const apply = () => {
      const hash = window.location.hash.replace("#", "") as TabId;
      if (TABS.some((item) => item.id === hash)) setTab(hash);
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, []);

  const select = (id: TabId) => {
    setTab(id);
    const url = `${window.location.pathname}#${id}`;
    window.history.replaceState(null, "", url);
  };

  const current = TABS.find((item) => item.id === tab) ?? TABS[0];
  const items = PROJECTS[current.key];

  return (
    <section id="projeler" className="section-space bg-beige">
      <div className="container-wide">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="section-eyebrow">03 — Projeler</p>
            <Title className="mt-4 font-serif text-4xl text-cream sm:text-5xl">Seçilmiş iş kurguları.</Title>
            <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">
              Kartlar firmanın çalışma dilini göstermek için hazırlanmış temsili örneklerdir. Teslim edilmiş gerçek bir iş listesi olarak sunulmaz.
            </p>
          </div>
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Proje durumu">
            {TABS.map((item) => {
              const active = item.id === tab;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  id={item.id}
                  aria-selected={active}
                  onClick={() => select(item.id)}
                  className={`h-11 px-4 text-[11px] font-semibold tracking-[0.16em] uppercase transition ${
                    active ? "bg-[#1a1c1e] text-[#f4f3ef]" : "border border-black/10 bg-[#fbfbfa] text-[#2b2c2e] hover:border-[#c5a880]"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2" role="tabpanel">
          {items.map((project, index) => (
            <Link
              key={project.title}
              href={project.href}
              className={`group relative block min-h-[22rem] overflow-hidden border border-black/[0.08] ${index === 0 ? "md:min-h-[28rem]" : ""}`}
            >
              <Image
                src={project.image}
                alt={project.alt}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c1e] via-[#1a1c1e]/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-[#f4f3ef] sm:p-8">
                <p className="text-[11px] tracking-[0.22em] text-gold-soft uppercase">{BADGE[tab]} · {project.kind}</p>
                <h3 className="mt-3 font-serif text-3xl">{project.title}</h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-white/75">{project.text}</p>
                <p className="mt-4 text-xs tracking-[0.16em] text-gold-soft uppercase">{project.place} · Detayı incele</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
