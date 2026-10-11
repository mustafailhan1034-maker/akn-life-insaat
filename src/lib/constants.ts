import { SERVICES } from "./service-data";

export { SERVICES };
export const SITE = {
  name: "AKN Life İnşaat",
  nameDisplay: "AKN LİFE İNŞAAT",
  legalName: "AKN LİFE İNŞAAT - KEREM AKAN",
  founder: "Kerem Akan",
  domain: "aknlifeinsaat.com",
  tagline: "Güvenle yükselen yaşam alanları",
  description:
    "AKN Life İnşaat, Kerem Akan liderliğinde Pendik merkezli müteahhitlik, kentsel dönüşüm, konut ve yenileme hizmeti sunar.",
  phone: "",
  phoneDisplay: "",
  whatsappNumber: "",
  hours: "",
  taxOffice: "Pendik V.D.",
  taxNumber: "0120212888",
  address: {
    full: "Velibaba Mah. Hukukçular Cad. No:38 İç Kapı No:22 Pendik / İSTANBUL",
    line1: "Velibaba Mah. Hukukçular Cad. No:38 İç Kapı No:22",
    line2: "Pendik / İSTANBUL",
    short: "Pendik, İstanbul",
  },
  mapsEmbed:
    "https://www.google.com/maps?q=Velibaba+Mah.+Hukuk%C3%A7ular+Cad.+No:38+Pendik+%C4%B0stanbul&hl=tr&z=16&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Velibaba%20Mah.%20Hukuk%C3%A7ular%20Cad.%20No%3A38%20Pendik%20%C4%B0stanbul",
  social: {
    instagram: "",
    facebook: "",
  },
} as const;

export function hasPhone() {
  return SITE.phone.length > 0;
}

export function hasWhatsapp() {
  return SITE.whatsappNumber.length > 0;
}

export function whatsappHref(text?: string) {
  if (!hasWhatsapp()) return "";
  const base = `https://wa.me/${SITE.whatsappNumber}`;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}

export type Lang = "tr" | "en";

export const NAV_LINKS = [
  { href: "/", label: { tr: "Ana Sayfa", en: "Home" } },
  {
    href: "/kurumsal",
    label: { tr: "Kurumsal", en: "Studio" },
    children: [
      { href: "/kurumsal/hakkimizda", label: "Hakkımızda" },
      { href: "/kurumsal/biz-kimiz", label: "Biz Kimiz" },
      { href: "/kurumsal/misyon-ve-vizyon", label: "Misyon ve Vizyon" },
    ],
  },
  {
    href: "/hizmetlerimiz",
    label: { tr: "Hizmetlerimiz", en: "Services" },
    children: [
      { href: "/hizmetlerimiz/insaat-ve-muteahhitlik", label: "İnşaat ve Müteahhitlik" },
      { href: "/hizmetlerimiz/kentsel-donusum-projeleri", label: "Kentsel Dönüşüm Projeleri" },
      { href: "/hizmetlerimiz/anahtar-teslim-insaat", label: "Anahtar Teslim İnşaat" },
      { href: "/hizmetlerimiz/konut-ve-toplu-yapi", label: "Konut ve Toplu Yapı" },
      { href: "/hizmetlerimiz/ticari-ve-endustriyel-yapilar", label: "Ticari ve Endüstriyel Yapılar" },
      { href: "/hizmetlerimiz/proje-gelistirme-ve-muhendislik", label: "Proje Geliştirme ve Mühendislik" },
      { href: "/hizmetlerimiz/kaba-ve-ince-insaat", label: "Kaba ve İnce İnşaat" },
      { href: "/hizmetlerimiz/bina-yenileme-ve-renovasyon", label: "Bina Yenileme ve Renovasyon" },
    ],
  },
  {
    href: "/projelerimiz",
    label: { tr: "Projelerimiz", en: "Projects" },
    children: [
      { href: "/projelerimiz#tamamlanan", label: "Tamamlanan" },
      { href: "/projelerimiz#devam-eden", label: "Devam Eden" },
      { href: "/projelerimiz#planlanan", label: "Planlanan" },
    ],
  },
  { href: "/kentsel-donusum", label: { tr: "Kentsel Dönüşüm", en: "Renewal" } },
  { href: "/iletisim", label: { tr: "İletişim", en: "Contact" } },
] as const;

export const FEATURES = [
  {
    title: "Şeffaf maliyet",
    description:
      "Kapsam baştan konuşulur. Ek kalem oluşursa süreç içinde ayrıca ve açıkça paylaşılır.",
    icon: "shield",
  },
  {
    title: "Tam özelleştirme",
    description:
      "Hazır iki seçeneğe sıkışmadan, arsanın ve yaşam beklentisinin gerektirdiği planı kurarız.",
    icon: "sparkles",
  },
  {
    title: "İşi doğru yapmak",
    description:
      "Detay, malzeme ve işçilik aynı standartta ilerler. Amaç, işi ilk seferde sağlam teslim etmektir.",
    icon: "award",
  },
  {
    title: "Kalıcı yaşam alanı",
    description:
      "Her yapıyı kısa ömürlü bir bina olarak değil, uzun yıllar yaşanacak bir değer olarak ele alırız.",
    icon: "ruler",
  },
] as const;

export const PROCESS = [
  {
    step: "01",
    title: "Keşif",
    text: "Arsa, mevcut yapı veya ihtiyacı yerinde dinler; beklentiyi ve kısıtları netleştiririz.",
  },
  {
    step: "02",
    title: "Kapsam ve plan",
    text: "İş programı, malzeme çerçevesi ve sorumluluklar baştan yazılır. Sürpriz maliyet hedeflenmez.",
  },
  {
    step: "03",
    title: "Uygulama",
    text: "Şantiye, iç mimari veya dönüşüm işi kayıt altında ve izlenebilir biçimde ilerler.",
  },
  {
    step: "04",
    title: "Teslim",
    text: "İş, konuşulan kaliteyle ve kullanıma hazır bir bütün olarak teslim edilir.",
  },
] as const;

export const SERVICE_AREA = ["Pendik", "İstanbul"] as const;

export type Service = (typeof SERVICES)[number];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((service) => service.slug === slug);
}

export const PROJECTS = {
  ongoing: [
    {
      title: "Velibaba Yaşam Evleri",
      place: "Pendik",
      kind: "Konut",
      text: "Aile yaşamına göre kurgulanmış daire planları ve sakin bir avlu düzeni. Uygulama süreci devam etmektedir.",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=80",
      alt: "Devam eden konut bloğu örneği",
      href: "/hizmetlerimiz/konut-ve-toplu-yapi",
    },
    {
      title: "Hukukçular Dönüşüm",
      place: "Pendik",
      kind: "Kentsel Dönüşüm",
      text: "Mevcut dokuyu güçlendiren, güncel yaşam standartlarına taşınan bir dönüşüm kurgusu.",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
      alt: "Dönüşüm planı örneği",
      href: "/hizmetlerimiz/kentsel-donusum-projeleri",
    },
  ],
  completed: [
    {
      title: "AKN Corner Rezidans",
      place: "İstanbul",
      kind: "Konut",
      text: "Cephe ritmi, ortak alanlar ve daire içi konforu birlikte ele alınmış bir konut kurgusu.",
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=80",
      alt: "Tamamlanmış modern konut cephesi örneği",
      href: "/hizmetlerimiz/konut-ve-toplu-yapi",
    },
    {
      title: "Sahil İç Mekân",
      place: "İstanbul",
      kind: "İç Mimari",
      text: "Malzeme, ışık ve kullanım akışının birlikte çözüldüğü bir iç mimari ve taahhüt çalışması.",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80",
      alt: "Tamamlanmış iç mekân örneği",
      href: "/hizmetlerimiz/bina-yenileme-ve-renovasyon",
    },
  ],
  planned: [
    {
      title: "Velibaba Atölye",
      place: "Pendik",
      kind: "Ticari",
      text: "Küçük ölçekli bir ticari yapı için hazırlanmış temsili bir plan kurgusu. Henüz uygulanmış bir iş değildir.",
      image:
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1400&q=80",
      alt: "Planlanan ticari mekân örneği",
      href: "/hizmetlerimiz/ticari-ve-endustriyel-yapilar",
    },
    {
      title: "Pendik Konut Adası",
      place: "Pendik",
      kind: "Toplu konut",
      text: "Ortak avlulu bir konut yerleşimi için hazırlanmış temsili bir plan. Teslim edilmiş bir proje değildir.",
      image:
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1400&q=80",
      alt: "Planlanan konut yerleşimi örneği",
      href: "/hizmetlerimiz/konut-ve-toplu-yapi",
    },
  ],
} as const;

export const GALLERY = [
  {
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80",
    alt: "Alacakaranlıkta modern konut cephesi",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    alt: "Bahçeli modern konut",
  },
  {
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    alt: "Aydınlık iç mekân",
  },
  {
    src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    alt: "Çok katlı konut bloğu",
  },
  {
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    alt: "Mimari çalışma masası",
  },
  {
    src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=80",
    alt: "Beyaz mimari cephe",
  },
] as const;

export const FAQ = [
  {
    question: "Ofis nerede?",
    answer:
      "AKN Life İnşaat — Kerem Akan, Velibaba Mah. Hukukçular Cad. No:38 İç Kapı No:22, Pendik / İstanbul adresindedir. Vergi dairesi Pendik V.D., vergi numarası 0120212888.",
  },
  {
    question: "Hangi işleri üstleniyorsunuz?",
    answer:
      "Konut projeleri, kentsel dönüşüm, iç mimari ve taahhüt ile proje danışmanlığı. Çalışma merkezimiz Pendik, hizmet bölgemiz İstanbul.",
  },
  {
    question: "Süreç nasıl ilerler?",
    answer:
      "Keşif, kapsam ve plan, uygulama, teslim. Maliyet ve sorumluluk işe başlamadan yazılır; ek kalem oluşursa ayrıca paylaşılır.",
  },
  {
    question: "Sitedeki proje kartları tamamlanmış işler mi?",
    answer:
      "Hayır. Proje kartları ve galeri görselleri çalışma alanlarını anlatan sembolik örneklerdir. Belirli bir teslimatın fotoğrafı olarak sunulmaz.",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Konut sahibi",
    role: "Örnek ifade · Pendik",
    text: "Kapsam baştan yazılsın, sürpriz kalem çıkmasın ve teslim edilen ev anlatılan ev olsun.",
  },
  {
    name: "Hak sahibi",
    role: "Örnek ifade · Dönüşüm",
    text: "Dönüşüm sürecinde neyin ne zaman olacağı belli olsun; kararlar sonradan değişen bir listeye dönmesin.",
  },
  {
    name: "Yatırımcı",
    role: "Örnek ifade · Danışmanlık",
    text: "İşe girmeden önce fizibilite ve sıra netsin. Doğru soru, yanlış metrekareden daha değerlidir.",
  },
  {
    name: "Mekân sahibi",
    role: "Örnek ifade · İç mimari",
    text: "Çizilen detay şantiyede kaybolmasın. Malzeme, ışık ve kullanım aynı cümlede bitsin.",
  },
] as const;
