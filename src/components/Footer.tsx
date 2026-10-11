import { MapPin } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { hasPhone, NAV_LINKS, SITE } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#1a1c1e] text-[#f4f3ef]">
      <div className="container-wide py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <BrandLogo tone="light" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/70">
              AKN LİFE İNŞAAT — Kerem Akan. Pendik merkezli müteahhitlik, dönüşüm, konut ve yenileme.
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
              {SITE.address.full}
            </p>
            <p className="mt-2 text-sm text-white/65">{SITE.taxOffice}: {SITE.taxNumber}</p>
          </div>
          <div>
            <h3 className="text-[11px] font-medium tracking-[0.22em] text-gold-dark uppercase">Hızlı bağlantılar</h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/70 hover:text-gold-soft">{link.label.tr}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[11px] font-medium tracking-[0.22em] text-gold-dark uppercase">İletişim</h3>
            <div className="mt-5 space-y-3 text-sm text-white/70">
              {hasPhone() ? <a href={`tel:${SITE.phone}`} className="block hover:text-gold-soft">{SITE.phoneDisplay}</a> : null}
              <p>{SITE.address.line1}</p>
              <p>{SITE.address.line2}</p>
              {SITE.hours ? <p>{SITE.hours}</p> : null}
            </div>
            <a href={SITE.mapsLink} target="_blank" rel="noopener noreferrer" aria-label="Google Haritalar konumu" className="mt-6 inline-flex h-10 w-10 items-center justify-center border border-white/15 text-white/70 hover:border-gold hover:text-gold-soft">
              <MapPin className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p suppressHydrationWarning>© {year} {SITE.legalName}. Tüm hakları saklıdır.</p>
          <p className="md:pr-20">
            Designed and developed by by Ayronfy{" "}
            <a
              href="https://auronfy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white/80 underline decoration-gold/70 underline-offset-4 transition hover:text-gold-soft"
            >
              auronfy.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
