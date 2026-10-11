import { MapPin } from "lucide-react";
import InquiryForm from "@/components/InquiryForm";
import { hasPhone, SITE } from "@/lib/constants";

export default function InfoPanel({ formTitle = "Teklif formu" }: { formTitle?: string }) {
  return (
    <section id="iletisim" className="section-space bg-beige">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">05 — İletişim</p>
          <h2 className="mt-4 font-serif text-4xl text-cream sm:text-5xl">Bir sonraki yapıyı birlikte konuşalım.</h2>
          <div className="editorial-rule mx-auto mt-6 w-20" />
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="border border-gold/20 bg-surface p-7 sm:p-9">
              <p className="text-[11px] tracking-[0.2em] text-gold-dark uppercase">Firma unvanı</p>
              <p className="mt-2 font-serif text-3xl text-cream">{SITE.legalName}</p>
              <div className="editorial-rule my-6" />
              <div className="mb-3 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gold-dark" aria-hidden />
                <p className="text-[11px] tracking-[0.2em] text-gold-dark uppercase">Adres</p>
              </div>
              <p className="leading-relaxed text-cream">
                {SITE.address.line1}
                <br />
                {SITE.address.line2}
              </p>
              <div className="editorial-rule my-6" />
              <p className="text-[11px] tracking-[0.2em] text-gold-dark uppercase">Vergi dairesi ve no</p>
              <p className="mt-2 text-cream">{SITE.taxOffice}: {SITE.taxNumber}</p>
              <div className="editorial-rule my-6" />
              <p className="text-[11px] tracking-[0.2em] text-gold-dark uppercase">Telefon</p>
              {hasPhone() ? (
                <a href={`tel:${SITE.phone}`} className="mt-2 inline-flex font-serif text-3xl text-cream hover:text-gold">{SITE.phoneDisplay}</a>
              ) : (
                <p className="mt-2 leading-relaxed text-muted">Doğrudan hat bu kayıtlarda yer almıyor. Teklif için yandaki formu kullanın.</p>
              )}
              {SITE.hours ? (
                <>
                  <div className="editorial-rule my-6" />
                  <p>{SITE.hours}</p>
                </>
              ) : null}
              <a href={SITE.mapsLink} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex bg-gold px-5 py-3 text-sm font-semibold text-navy hover:bg-gold-soft">
                Yol tarifi al
              </a>
            </div>
            <InquiryForm heading={formTitle} subject="Teklif talebi" />
          </div>
          <div className="min-h-[520px] overflow-hidden border border-gold/20 bg-surface">
            <iframe title="AKN Life İnşaat konumu" src={SITE.mapsEmbed} className="h-full min-h-[520px] w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </div>
    </section>
  );
}
