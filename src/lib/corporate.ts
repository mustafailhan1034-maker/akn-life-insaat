const frame = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1920&q=80`;

export const CORPORATE_PAGES = [
  {
    slug: "hakkimizda",
    name: "Hakkımızda",
    eyebrow: "Kurumsal · Hakkımızda",
    title: "Kayıtlı ofisten, şantiyede izlenen bir inşaat pratiği.",
    lead: "AKN Life İnşaat, Said Akın liderliğinde İstanbul ve Marmara Bölgesi’nde çalışan bir müteahhitlik firmasıdır. İşin adı, konuşulan kapsamın teslim edilen yapıda karşılık bulmasıdır.",
    image: frame("photo-1600585154340-be6161a56a0c"),
    alt: "Aydınlık, modern bir konut cephesi",
    portrait: frame("photo-1503387762-592deb58ef4e"),
    portraitAlt: "Mimari plan ve maket üzerinde çalışma",
    seoTitle: "Hakkımızda",
    seoDescription:
      "AKN Life İnşaat hakkında: Said Akın liderliğinde İstanbul ve Marmara Bölgesi’nde müteahhitlik, kentsel dönüşüm, konut ve yenileme.",
    chapters: [
      {
        heading: "Kayıtlı kimlik",
        text: "Firmanın unvanı AKN LİFE İNŞAAT - SAİD AKIN’dır. Merkez, Velibaba Mah. Hukukçular Cad. No:38 İç Kapı No:22, Pendik / İstanbul adresindedir. Vergi kaydı Pendik Vergi Dairesi 0120212888.",
      },
      {
        heading: "Ne yapılır",
        text: "Konut, apartman, villa ve ticari yapı; kentsel dönüşüm; anahtar teslim inşaat; kaba ve ince iş; yenileme. Kapsam, arsanın ve mevcut yapının verisi okunmadan yazılmaz.",
      },
      {
        heading: "İşin sırası",
        text: "Plan, ruhsat çerçevesi, şantiye ve teslim aynı cümlede kalır. Ek kalem oluşursa süreç içinde ayrıca söylenir. Amaç, vaadi şantiyede kaybetmemektir.",
      },
    ],
    notes: [
      { title: "Çizim", text: "Cephe, plan ve detay işe başlamadan aynı masada durur." },
      { title: "Malzeme", text: "Seçim, görüntü için değil; yapının ömrü ve kullanımı için yapılır." },
      { title: "Şantiye", text: "İşçilik, yazılan kapsamın dışına sessizce çıkmaz." },
    ],
  },
  {
    slug: "biz-kimiz",
    name: "Biz Kimiz",
    eyebrow: "Kurumsal · Biz Kimiz",
    title: "Karar, malzeme ve takvim aynı masada.",
    lead: "Firmayı Said Akın yönetir. İşler İstanbul ve Marmara ölçeğinde okunur. Ekip dili sadedir: ölçülen kapsam, izlenen şantiye.",
    image: frame("photo-1600210492486-724fe5c67fb0"),
    alt: "Taş ve ahşap detaylı, aydınlık bir iç mekân",
    portrait: frame("photo-1613490493576-7fde63acd811"),
    portraitAlt: "Bahçeli modern bir konut",
    seoTitle: "Biz Kimiz",
    seoDescription:
      "AKN Life İnşaat’ı Said Akın yönetir. Ekip, konut, dönüşüm ve yenilemede tek bir iş disipliniyle çalışır.",
    chapters: [
      {
        heading: "Yönetim",
        text: "İşi Said Akın sahiplenir. Kapsam, malzeme ve takvim ayrı odalarda dağılmaz. Hak sahibiyle konuşulan cümle, uygulamada aynı kalır.",
      },
      {
        heading: "Çalışma alanı",
        text: "İşler İstanbul ve Marmara Bölgesi ölçeğinde, yapının kendi koşuluna göre ele alınır. Her parsel kendi dosyasıyla yürür.",
      },
      {
        heading: "Üslup",
        text: "Gösterişli bir vaat yerine izlenebilir bir süreç kurulur. Konut, ticari yapı, dönüşüm ve yenileme aynı titizlikle okunur.",
      },
    ],
    notes: [
      { title: "Tek masa", text: "Tasarım, maliyet ve saha aynı kararda buluşur." },
      { title: "Yerinde okuma", text: "Arsa ya da mevcut yapı, işe başlamadan tarif edilir." },
      { title: "Sakin teslim", text: "Kapanış, başta yazılan düzene göre yapılır." },
    ],
  },
  {
    slug: "misyon-ve-vizyon",
    name: "Misyon ve Vizyon",
    eyebrow: "Kurumsal · Misyon ve Vizyon",
    title: "Sözü şantiyede duran bir inşaat anlayışı.",
    lead: "Misyon, konuşulan kapsamı teslim etmektir. Vizyon, İstanbul ve Marmara Bölgesi’nde uzun yıllar yaşanacak, ölçüsü kaçmamış yapılar kurmaktır.",
    image: frame("photo-1487958449943-2429e8be8625"),
    alt: "Heykelsi, modern bir yapı cephesi",
    portrait: frame("photo-1600607687939-ce8a6c25118c"),
    portraitAlt: "Geniş pencereli sade bir yaşam alanı",
    seoTitle: "Misyon ve Vizyon",
    seoDescription:
      "AKN Life İnşaat misyon ve vizyonu: şeffaf kapsam, kalıcı işçilik ve İstanbul ile Marmara Bölgesi’nde sakin, güvenli yapılar.",
    chapters: [
      {
        heading: "Misyon",
        text: "Planlama, uygulama ve teslim aynı disiplinle yürüsün. Malzeme, takvim ve sorumluluk baştan kayıtlı kalsın. Değişiklik olursa kapsam yeniden yazılsın.",
      },
      {
        heading: "Vizyon",
        text: "Konut, dönüşüm ve yenilemede güncel yaşamın gerektirdiği sağlamlığı, sakin bir mimari dille kurmak. Bölgedeki işlerimiz bu ölçüyle yürür.",
      },
      {
        heading: "Ölçü",
        text: "İş, kısa ömürlü bir bina olarak değil, içinde yaşanacak bir düzen olarak ele alınır. Estetik, mühendisliğin yerine geçmez; onunla aynı cümlede durur.",
      },
    ],
    notes: [
      { title: "Şeffaf kapsam", text: "Ek kalem, süreç içinde açıkça paylaşılır." },
      { title: "Kalıcı işçilik", text: "Detay, ilk seferde sağlam teslim için tutulur." },
      { title: "Yerel bağ", text: "İşler İstanbul ve Marmara Bölgesi ölçeğinde yürür." },
    ],
  },
] as const;

export type CorporatePage = (typeof CORPORATE_PAGES)[number];

export function getCorporatePage(slug: string) {
  return CORPORATE_PAGES.find((page) => page.slug === slug);
}
