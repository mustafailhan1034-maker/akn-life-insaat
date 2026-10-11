"use client";

import { MapPin, MessageSquare, Phone } from "lucide-react";
import { hasPhone, hasWhatsapp, SITE, whatsappHref } from "@/lib/constants";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.52 3.48A11.78 11.78 0 0 0 12.02 0C5.47 0 .14 5.33.14 11.88c0 2.1.55 4.15 1.6 5.96L0 24l6.33-1.66a11.86 11.86 0 0 0 5.69 1.45h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.18-1.24-6.16-3.39-8.43ZM12.03 21.5h-.01a9.6 9.6 0 0 1-4.9-1.34l-.35-.21-3.76.99 1-3.66-.23-.38a9.6 9.6 0 0 1-1.48-5.12c0-5.3 4.31-9.61 9.63-9.61a9.55 9.55 0 0 1 6.81 2.82 9.55 9.55 0 0 1 2.81 6.8c0 5.3-4.32 9.61-9.62 9.61Zm5.28-7.2c-.29-.14-1.7-.84-1.97-.93-.26-.1-.45-.14-.64.14-.19.29-.74.93-.9 1.12-.17.19-.33.21-.62.07-.29-.14-1.22-.45-2.32-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43s1.02 2.82 1.17 3.01c.14.19 2 3.05 4.85 4.28 1.8.78 2.5.85 3.4.72.55-.08 1.7-.7 1.94-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.33Z" />
    </svg>
  );
}

export default function FloatingActions() {
  const primaryHref = hasWhatsapp() ? whatsappHref() : SITE.mapsLink;
  const secondaryHref = hasPhone() ? `tel:${SITE.phone}` : "/iletisim";

  return (
    <>
      <div className="animate-float-soft fixed right-4 bottom-5 z-50 hidden flex-col gap-3 md:flex">
        <a href={primaryHref} target="_blank" rel="noopener noreferrer" aria-label={hasWhatsapp() ? "WhatsApp ile yazın" : "Yol tarifi"} className={`inline-flex h-14 w-14 items-center justify-center rounded-full shadow-lg ${hasWhatsapp() ? "bg-[#25D366] text-white" : "bg-gold text-navy"}`}>
          {hasWhatsapp() ? <WhatsAppIcon className="h-7 w-7" /> : <MapPin className="h-5 w-5" />}
        </a>
        <a href={secondaryHref} aria-label={hasPhone() ? "Hemen ara" : "İletişim"} className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-[#2b2c2e]/15 bg-[#fbfbfa] text-[#2b2c2e] shadow-lg hover:bg-navy hover:text-[#f4f3ef]">
          {hasPhone() ? <Phone className="h-5 w-5" /> : <MessageSquare className="h-5 w-5" />}
        </a>
      </div>
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#2b2c2e]/10 bg-[#fbfbfa]/95 px-3 pt-2.5 pb-[max(0.65rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden">
        <div className="mx-auto grid max-w-lg grid-cols-2 gap-2">
          <a href={secondaryHref} className="flex h-12 items-center justify-center gap-2 border border-[#2b2c2e]/15 text-[13px] font-semibold text-[#2b2c2e]">
            {hasPhone() ? <Phone className="h-4 w-4" aria-hidden /> : <MessageSquare className="h-4 w-4" aria-hidden />}
            {hasPhone() ? "Ara" : "İletişim"}
          </a>
          <a href={primaryHref} target="_blank" rel="noopener noreferrer" className={`flex h-12 items-center justify-center gap-2 text-[13px] font-semibold ${hasWhatsapp() ? "bg-[#25D366] text-white" : "bg-gold text-navy"}`}>
            {hasWhatsapp() ? <WhatsAppIcon className="h-4 w-4" /> : <MapPin className="h-4 w-4" />}
            {hasWhatsapp() ? "WhatsApp" : "Yol tarifi"}
          </a>
        </div>
      </div>
    </>
  );
}
