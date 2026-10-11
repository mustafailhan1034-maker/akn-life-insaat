"use client";

import { useCallback, useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import Image from "next/image";
import Link from "next/link";

const FRAME = "auto=format&fit=crop&w=1920&h=1080&q=75";
const FALLBACK_IMAGE = `https://images.unsplash.com/photo-1600585154340-be6161a56a0c?${FRAME}`;
const SLIDE_INTERVAL_MS = 6000;
const SWIPE_THRESHOLD = 48;

type Slide = {
  id: string;
  service: string;
  src: string;
  alt: string;
  heading: string;
  subheading: string;
  href: string;
};

const SLIDES: readonly Slide[] = [
  {
    id: "muteahhitlik",
    service: "İnşaat ve Müteahhitlik",
    src: `https://images.unsplash.com/photo-1541888946425-d81bb19240f5?${FRAME}`,
    alt: "Donatı döşemesi üzerinde saha ekibi olan geniş bir şantiye",
    heading: "Planlamadan anahtar teslime.",
    subheading: "Konut, villa ve ticari yapıda inşaat süreci tek bir disiplinle yürür.",
    href: "/hizmetlerimiz/insaat-ve-muteahhitlik",
  },
  {
    id: "donusum",
    service: "Kentsel Dönüşüm",
    src: `https://images.unsplash.com/photo-1565008447742-97f6f38c985c?${FRAME}`,
    alt: "Vinçlerle yükselen çok katlı konut blokları",
    heading: "Riskli yapıdan, oturulabilir düzene.",
    subheading: "Ekonomik ömrünü tamamlamış yapılar, güncel yönetmelik çerçevesinde yeniden kurulur.",
    href: "/hizmetlerimiz/kentsel-donusum-projeleri",
  },
  {
    id: "anahtar",
    service: "Anahtar Teslim",
    src: `https://images.unsplash.com/photo-1600585154340-be6161a56a0c?${FRAME}`,
    alt: "Tamamlanmış, geniş camlı modern bir konut",
    heading: "Ruhsattan çevre düzenine.",
    subheading: "Proje, kaba inşaat, ince işçilik ve çevre aynı teslim cümlesinde kalır.",
    href: "/hizmetlerimiz/anahtar-teslim-insaat",
  },
  {
    id: "konut",
    service: "Konut ve Toplu Yapı",
    src: `https://images.unsplash.com/photo-1460317442991-0ec209397118?${FRAME}`,
    alt: "Balkonlu, çok katlı konut cepheleri",
    heading: "Apartman, rezidans ve site.",
    subheading: "Toplu konutun ölçeği büyür; plan, ortak alan ve işçilik aynı titizlikte kalır.",
    href: "/hizmetlerimiz/konut-ve-toplu-yapi",
  },
  {
    id: "ticari",
    service: "Ticari ve Endüstriyel",
    src: `https://images.unsplash.com/photo-1448630360428-65456885c650?${FRAME}`,
    alt: "Geniş pencereli modern bir ticari yapı cephesi",
    heading: "İşin ölçüsüne göre yapı.",
    subheading: "Ofis, mağaza, depo ve üretim alanı, kullanım ritmine göre planlanır.",
    href: "/hizmetlerimiz/ticari-ve-endustriyel-yapilar",
  },
  {
    id: "muhendislik",
    service: "Proje ve Mühendislik",
    src: `https://images.unsplash.com/photo-1503387762-592deb58ef4e?${FRAME}`,
    alt: "Mimari plan ve maket üzerinde çalışma",
    heading: "Çizim, statik ve maliyet.",
    subheading: "Tasarım, teknik plan ve uygulama koordinasyonu tek masada ilerler.",
    href: "/hizmetlerimiz/proje-gelistirme-ve-muhendislik",
  },
  {
    id: "kaba-ince",
    service: "Kaba ve İnce İnşaat",
    src: `https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?${FRAME}`,
    alt: "Donatı demirleri üzerinde çalışan şantiye ekibi",
    heading: "Temelden son kata.",
    subheading: "Betonarme ve çatıdan sıva, boya, seramik ve zemine kadar aynı işçilik.",
    href: "/hizmetlerimiz/kaba-ve-ince-insaat",
  },
  {
    id: "yenileme",
    service: "Bina Yenileme",
    src: `https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?${FRAME}`,
    alt: "Sıvası açılmış, yenilenen bir iç mekânda çalışan usta",
    heading: "Mevcut yapıyı güncele taşımak.",
    subheading: "Tadilat ve modernizasyon, yapının kendi teknik koşuluna göre yazılır.",
    href: "/hizmetlerimiz/bina-yenileme-ve-renovasyon",
  },
];

function ArrowIcon({ direction }: { direction: "prev" | "next" }) {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
      {direction === "prev" ? <path d="M15 4 7 12l8 8" /> : <path d="m9 4 8 8-8 8" />}
    </svg>
  );
}

function preload(src: string) {
  const image = new window.Image();
  image.src = src;
}

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageSources, setImageSources] = useState(SLIDES.map((slide) => slide.src));
  const [isPaused, setIsPaused] = useState(false);
  const dragStartX = useRef<number | null>(null);
  const dragDeltaX = useRef(0);
  const isDragging = useRef(false);
  const reduceMotion = useRef(false);
  const activeRef = useRef(0);

  useEffect(() => {
    const motionMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotion = () => {
      reduceMotion.current = motionMq.matches;
    };
    syncMotion();
    motionMq.addEventListener("change", syncMotion);
    return () => motionMq.removeEventListener("change", syncMotion);
  }, []);

  const goTo = useCallback((index: number) => {
    const next = ((index % SLIDES.length) + SLIDES.length) % SLIDES.length;
    if (next === activeRef.current) return;
    activeRef.current = next;
    setActiveIndex(next);
  }, []);

  const goNext = useCallback(() => goTo(activeRef.current + 1), [goTo]);
  const goPrev = useCallback(() => goTo(activeRef.current - 1), [goTo]);

  useEffect(() => {
    preload(SLIDES[(activeIndex + 1) % SLIDES.length].src);
    preload(SLIDES[(activeIndex - 1 + SLIDES.length) % SLIDES.length].src);
  }, [activeIndex]);

  useEffect(() => {
    if (isPaused || reduceMotion.current) return;
    const timer = window.setInterval(() => {
      goTo(activeRef.current + 1);
    }, SLIDE_INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [activeIndex, isPaused, goTo]);

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest("a, button")) return;
    if (event.pointerType === "mouse" && event.button !== 0) return;
    dragStartX.current = event.clientX;
    dragDeltaX.current = 0;
    isDragging.current = true;
    setIsPaused(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!isDragging.current || dragStartX.current === null) return;
    dragDeltaX.current = event.clientX - dragStartX.current;
  };

  const finishDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    if (dragDeltaX.current <= -SWIPE_THRESHOLD) goNext();
    else if (dragDeltaX.current >= SWIPE_THRESHOLD) goPrev();
    isDragging.current = false;
    dragStartX.current = null;
    dragDeltaX.current = 0;
    setIsPaused(false);
    try {
      event.currentTarget.releasePointerCapture(event.pointerId);
    } catch {
      /* pointer already released */
    }
  };

  const slide = SLIDES[activeIndex];
  const arrowClass =
    "grid h-12 w-12 place-items-center text-white/90 transition duration-300 hover:text-white";

  return (
    <section id="anasayfa" className="relative w-full overflow-hidden bg-[#1a1c1e]" aria-roledescription="carousel" aria-label="AKN Life İnşaat mimari slaytları">
      <div
        className="relative h-[78svh] min-h-[34rem] w-full overflow-hidden lg:h-[min(76svh,56.25vw)] lg:min-h-[28rem]"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={finishDrag}
        onPointerCancel={finishDrag}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{ touchAction: "pan-y" }}
      >
        <div
          className="hero-track absolute inset-y-0 left-0 flex h-full"
          style={{
            width: `${SLIDES.length * 100}%`,
            transform: `translate3d(-${(activeIndex * 100) / SLIDES.length}%, 0, 0)`,
          }}
        >
          {SLIDES.map((item, index) => (
            <div key={item.id} className="relative h-full" style={{ width: `${100 / SLIDES.length}%` }} aria-hidden={index !== activeIndex}>
              <Image
                src={imageSources[index]}
                alt={item.alt}
                fill
                priority={index === 0}
                {...(index === 0 ? {} : { loading: "eager" as const })}
                quality={75}
                sizes="100vw"
                className="object-cover"
                onError={() =>
                  setImageSources((current) => {
                    if (current[index] === FALLBACK_IMAGE) return current;
                    const next = [...current];
                    next[index] = FALLBACK_IMAGE;
                    return next;
                  })
                }
              />
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-0 bg-[#1a1c1e]/42" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1a1c1e]/55 via-transparent to-[#1a1c1e]/35" />

        <div className="absolute inset-0 z-10 flex items-center justify-center px-16 pt-24 pb-16 text-center sm:px-28">
          <div key={slide.id} className="hero-stagger-2 w-full max-w-3xl">
            <p className="text-[11px] font-medium tracking-[0.32em] text-white/80 uppercase">
              {String(activeIndex + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")} — {slide.service}
            </p>
            <h1 className="mt-4 font-serif text-[2.15rem] leading-[1.05] text-white sm:text-5xl lg:text-6xl">{slide.heading}</h1>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">{slide.subheading}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href={slide.href} className="pointer-events-auto inline-flex min-h-12 items-center justify-center bg-[#C5A880] px-6 text-xs font-semibold tracking-[0.16em] text-[#1a1c1e] uppercase transition duration-300 hover:bg-[#E6D3B3]">
                Hizmeti incele
              </Link>
              <Link href="/iletisim" className="pointer-events-auto inline-flex min-h-12 items-center justify-center border border-white/55 px-6 text-xs font-semibold tracking-[0.16em] text-white uppercase transition duration-300 hover:border-[#C5A880] hover:text-[#E6D3B3]">
                İletişime geçin
              </Link>
            </div>
          </div>
        </div>

        <button type="button" className={`${arrowClass} absolute top-1/2 left-1 z-20 -translate-y-1/2 sm:left-4`} aria-label="Önceki slayt" onClick={goPrev}>
          <ArrowIcon direction="prev" />
        </button>
        <button type="button" className={`${arrowClass} absolute top-1/2 right-1 z-20 -translate-y-1/2 sm:right-4`} aria-label="Sonraki slayt" onClick={goNext}>
          <ArrowIcon direction="next" />
        </button>
      </div>
    </section>
  );
}
