const shot = (id: string, alt: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=80`;

export const SERVICES = [
  {
    slug: "insaat-ve-muteahhitlik",
    name: "İnşaat ve Müteahhitlik Hizmetleri",
    scope: "Planlamadan anahtar teslime",
    focus: "Müteahhitlik",
    meta: "Konut · Ticari · Villa",
    description:
      "Konut, apartman, villa ve ticari yapı projelerinde planlama aşamasından anahtar teslimine kadar tüm inşaat süreçlerini profesyonel şekilde yönetiyoruz.",
    details: [
      "İş, arsanın ve yapının verisi okunarak başlar. Kapsam, takvim ve sorumluluklar şantiyeye inmeden yazılır.",
      "Kaba inşaat, ince işçilik ve teslim aynı disiplinle ilerler. Amaç, konuşulan yapının karşılığını üretmektir.",
    ],
    features: ["Planlama ve şantiye koordinasyonu", "Konut, villa ve ticari yapı", "Malzeme ve işçilik takibi", "Anahtar teslim kapanış"],
    gallery: [
      { src: shot("photo-1600585154340-be6161a56a0c", ""), alt: "Modern bir konut cephesi" },
      { src: shot("photo-1487958449943-2429e8be8625", ""), alt: "Heykelsi beyaz bir yapı cephesi" },
    ],
    seoTitle: "İnşaat ve Müteahhitlik Hizmetleri",
    seoDescription:
      "AKN Life İnşaat müteahhitlik: İstanbul ve Marmara Bölgesi’nde konut, villa ve ticari yapılarda planlamadan teslime inşaat yönetimi.",
    image: shot("photo-1600585154340-be6161a56a0c", ""),
    alt: "Geniş camlı modern bir konut",
  },
  {
    slug: "kentsel-donusum-projeleri",
    name: "Kentsel Dönüşüm Projeleri",
    scope: "Riskli yapıdan yeni düzene",
    focus: "Dönüşüm",
    meta: "Deprem yönetmeliği · Güvenli yaşam",
    description:
      "Ekonomik ömrünü tamamlamış ve riskli yapıların güncel deprem yönetmeliklerine uygun, güvenli ve modern yaşam alanlarına dönüştürülmesi için kapsamlı çözümler sunuyoruz.",
    details: [
      "Dönüşümde dil net olmalıdır. Hak sahipleri, kapsam ve sıra kayıt altında ilerler.",
      "Amaç yalnızca binayı değiştirmek değil; güncel yönetmelik çerçevesinde oturulabilir bir sonuç kurmaktır.",
    ],
    features: ["Riskli yapı okuması", "Yönetmelik çerçevesinde plan", "Hak sahipleriyle yazılı süreç", "Güvenli yaşam kurgusu"],
    gallery: [
      { src: shot("photo-1487958449943-2429e8be8625", ""), alt: "Yenilenmiş modern bir cephe" },
      { src: shot("photo-1503387762-592deb58ef4e", ""), alt: "Mimari plan üzerinde çalışma" },
    ],
    seoTitle: "Kentsel Dönüşüm Projeleri",
    seoDescription:
      "AKN Life İnşaat kentsel dönüşüm: İstanbul ve Marmara Bölgesi’nde riskli yapıları güvenli ve modern yaşam alanlarına taşıyan planlı süreç.",
    image: shot("photo-1487958449943-2429e8be8625", ""),
    alt: "Modern bir yapı cephesi",
  },
  {
    slug: "anahtar-teslim-insaat",
    name: "Anahtar Teslim İnşaat",
    scope: "Ruhsattan çevre düzenine",
    focus: "Teslim",
    meta: "Proje · Ruhsat · İnce iş",
    description:
      "Projelendirme, ruhsat, kaba inşaat, ince işçilik ve çevre düzenlemesi süreçlerini kapsayan anahtar teslim inşaat hizmetleri sunuyoruz.",
    details: [
      "Anahtar teslim, dağınık ekiplerin yan yana gelmesi değil; tek kapsamın baştan sona taşınmasıdır.",
      "Ruhsat, kaba yapı, ince işçilik ve çevre aynı teslim cümlesinde kalır.",
    ],
    features: ["Projelendirme ve ruhsat takibi", "Kaba inşaat", "İnce işçilik", "Çevre düzenlemesi"],
    gallery: [
      { src: shot("photo-1545324418-cc1a3fa10c00", ""), alt: "Çok katlı modern bir konut bloğu" },
      { src: shot("photo-1600596542815-ffad4c1539a9", ""), alt: "Akşam ışığında bir konut" },
    ],
    seoTitle: "Anahtar Teslim İnşaat",
    seoDescription:
      "AKN Life İnşaat anahtar teslim: projelendirme, ruhsat, kaba ve ince inşaat ile çevre düzenlemesini tek kapsamda yürütür.",
    image: shot("photo-1545324418-cc1a3fa10c00", ""),
    alt: "Balkonlu modern bir konut bloğu",
  },
  {
    slug: "konut-ve-toplu-yapi",
    name: "Konut ve Toplu Yapı Projeleri",
    scope: "Apartmandan siteye",
    focus: "Konut",
    meta: "Apartman · Rezidans · Site",
    description:
      "Modern yaşam ihtiyaçlarına uygun apartman, rezidans, site ve toplu konut projelerinin geliştirilmesi ve inşasını gerçekleştiriyoruz.",
    details: [
      "Daire planı, ortak alan ve cephe aynı titizlikle ele alınır. Amaç, uzun yıllar yaşanacak bir düzen kurmaktır.",
      "Toplu yapıda ölçek büyür; iş programı ve malzeme disiplini aynı kalır.",
    ],
    features: ["Apartman ve rezidans planı", "Site ve toplu konut", "Ortak alan kurgusu", "Uygulama takvimi"],
    gallery: [
      { src: shot("photo-1600596542815-ffad4c1539a9", ""), alt: "Alacakaranlıkta modern konut" },
      { src: shot("photo-1613490493576-7fde63acd811", ""), alt: "Bahçeli modern bir villa" },
    ],
    seoTitle: "Konut ve Toplu Yapı Projeleri",
    seoDescription:
      "AKN Life İnşaat konut ve toplu yapı: apartman, rezidans, site ve toplu konut projelerinin geliştirilmesi ve inşası.",
    image: shot("photo-1600596542815-ffad4c1539a9", ""),
    alt: "Modern bir konutun akşam görünümü",
  },
  {
    slug: "ticari-ve-endustriyel-yapilar",
    name: "Ticari ve Endüstriyel Yapılar",
    scope: "İşin ölçüsüne göre yapı",
    focus: "Ticari",
    meta: "Ofis · Mağaza · Tesis",
    description:
      "İş merkezleri, ofisler, mağazalar, depolar ve üretim tesisleri gibi ticari yapıların ihtiyaçlarına uygun inşaat çözümleri geliştiriyoruz.",
    details: [
      "Ticari yapı, vitrin kadar yükleme, açıklık ve kullanım ritmiyle de kurulur.",
      "Ofis, mağaza, depo veya üretim alanı için kapsam, yapının işleyişine göre yazılır.",
    ],
    features: ["İş merkezi ve ofis", "Mağaza ve depo", "Üretim tesisi kurgusu", "Kullanım ritmine göre plan"],
    gallery: [
      { src: shot("photo-1487958449943-2429e8be8625", ""), alt: "Ticari ölçekte modern bir cephe" },
      { src: shot("photo-1487958449943-2429e8be8625", ""), alt: "Aydınlık bir ofis katı" },
    ],
    seoTitle: "Ticari ve Endüstriyel Yapılar",
    seoDescription:
      "AKN Life İnşaat ticari yapılar: ofis, mağaza, depo ve üretim tesisleri için ihtiyaç odaklı inşaat çözümleri.",
    image: shot("photo-1487958449943-2429e8be8625", ""),
    alt: "Aydınlık modern bir ofis içi",
  },
  {
    slug: "proje-gelistirme-ve-muhendislik",
    name: "Proje Geliştirme ve Mühendislik",
    scope: "Çizimden koordinasyona",
    focus: "Mühendislik",
    meta: "Tasarım · Statik · Maliyet",
    description:
      "Mimari tasarım, statik proje, teknik planlama, maliyet analizi ve uygulama koordinasyonu süreçlerinde bütüncül proje yönetimi hizmetleri sunuyoruz.",
    details: [
      "Proje geliştirme, işe başlamadan önce doğru sırayı kurmak içindir. Erken netlik, maliyeti ve takvimi korur.",
      "Mimari, statik ve uygulama koordinasyonu ayrı dillerde dağılmaz; tek çerçevede ilerler.",
    ],
    features: ["Mimari tasarım çerçevesi", "Statik ve teknik plan", "Maliyet analizi", "Uygulama koordinasyonu"],
    gallery: [
      { src: shot("photo-1503387762-592deb58ef4e", ""), alt: "Proje planı ve maket" },
      { src: shot("photo-1503387762-592deb58ef4e", ""), alt: "Teknik çizim üzerinde değerlendirme" },
    ],
    seoTitle: "Proje Geliştirme ve Mühendislik",
    seoDescription:
      "AKN Life İnşaat mühendislik: mimari tasarım, statik proje, maliyet analizi ve uygulama koordinasyonu.",
    image: shot("photo-1503387762-592deb58ef4e", ""),
    alt: "Mimari plan ve maket",
  },
  {
    slug: "kaba-ve-ince-insaat",
    name: "Kaba ve İnce İnşaat İşleri",
    scope: "Temelden son kata",
    focus: "Uygulama",
    meta: "Betonarme · İnce işçilik",
    description:
      "Temel, betonarme, duvar ve çatı uygulamalarından sıva, boya, seramik, zemin kaplama ve diğer ince işçilik aşamalarına kadar kapsamlı hizmet veriyoruz.",
    details: [
      "Kaba yapı, ince işin taşıyıcısıdır. Temel, betonarme ve çatı aynı işçilik standardında ilerler.",
      "Sıva, boya, seramik ve zemin kaplama, çizilen detayın şantiyedeki karşılığıdır.",
    ],
    features: ["Temel ve betonarme", "Duvar ve çatı", "Sıva, boya, seramik", "Zemin kaplama"],
    gallery: [
      { src: shot("photo-1503387762-592deb58ef4e", ""), alt: "Şantiye planı ve uygulama" },
      { src: shot("photo-1600210492486-724fe5c67fb0", ""), alt: "İnce işçiliği tamamlanmış bir iç mekân" },
    ],
    seoTitle: "Kaba ve İnce İnşaat İşleri",
    seoDescription:
      "AKN Life İnşaat kaba ve ince iş: temel, betonarme, çatı, sıva, boya, seramik ve zemin uygulamaları.",
    image: shot("photo-1600210492486-724fe5c67fb0", ""),
    alt: "Taş ve ahşap detaylı bir iç mekân",
  },
  {
    slug: "bina-yenileme-ve-renovasyon",
    name: "Bina Yenileme ve Renovasyon",
    scope: "Mevcut yapıyı güncele taşımak",
    focus: "Yenileme",
    meta: "Tadilat · Modernizasyon",
    description:
      "Mevcut yapıların kullanım ihtiyaçlarına ve teknik koşullarına uygun olarak kapsamlı tadilat, modernizasyon ve yenileme projeleri gerçekleştiriyoruz.",
    details: [
      "Yenileme, boş bir arsa gibi başlamaz. Mevcut taşıyıcı, tesisat ve kullanım önce okunur.",
      "Tadilat kapsamı baştan yazılır. Amaç, yapıyı güncel bir kullanıma taşımaktır.",
    ],
    features: ["Mevcut yapı okuması", "Kapsamlı tadilat", "Modernizasyon", "Teknik koşullara uygun yenileme"],
    gallery: [
      { src: shot("photo-1600210492486-724fe5c67fb0", ""), alt: "Yenilenmiş aydınlık bir iç mekân" },
      { src: shot("photo-1600607687939-ce8a6c25118c", ""), alt: "Geniş pencereli sade bir yaşam alanı" },
    ],
    seoTitle: "Bina Yenileme ve Renovasyon",
    seoDescription:
      "AKN Life İnşaat renovasyon: mevcut yapıların tadilat, modernizasyon ve yenileme projeleri.",
    image: shot("photo-1600607687939-ce8a6c25118c", ""),
    alt: "Yenilenmiş sade bir yaşam alanı",
  },
] as const;
