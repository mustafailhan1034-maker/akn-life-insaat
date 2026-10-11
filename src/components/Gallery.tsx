import Image from "next/image";
import { GALLERY } from "@/lib/constants";

export default function Gallery() {
  return (
    <section id="galeri" className="section-space bg-stone">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Galeri</p>
          <h2 className="mt-4 font-serif text-4xl text-cream sm:text-5xl">Yapı ve mekân atmosferi.</h2>
          <div className="editorial-rule mx-auto mt-6 w-20" />
          <p className="mt-5 text-sm text-muted">Görseller temsilidir; firmanın teslim ettiği belirli bir yapının fotoğrafı değildir.</p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {GALLERY.map((item, index) => (
            <div key={item.src} className={`group relative overflow-hidden ${index === 0 ? "col-span-2 aspect-[16/9] md:row-span-2 md:aspect-auto md:min-h-[28rem]" : "aspect-square"}`}>
              <Image src={item.src} alt={item.alt} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
