"use client";

import { FormEvent, useState } from "react";
import { hasWhatsapp, whatsappHref } from "@/lib/constants";

type InquiryFormProps = {
  heading?: string;
  subject?: string;
};

export default function InquiryForm({ heading = "Mesaj bırakın", subject }: InquiryFormProps) {
  const [note, setNote] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const message = String(data.get("message") || "").trim();
    const topic = subject ? ` Konu: ${subject}.` : "";
    const text = `Merhaba, ben ${name}. Telefon: ${phone}.${topic} Mesajım: ${message}`;
    const href = whatsappHref(text);

    if (href) {
      window.open(href, "_blank", "noopener,noreferrer");
      setNote("Talebiniz WhatsApp’a yönlendirildi.");
    } else {
      setNote("Telefon hattı henüz tanımlı değil. Mesajınızı ofis adresimiz üzerinden iletebilirsiniz.");
    }
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="border border-gold/20 bg-surface p-7 sm:p-9">
      <h3 className="font-serif text-2xl text-cream">{heading}</h3>
      <p className="mt-2 text-sm text-muted">
        {hasWhatsapp()
          ? "Form WhatsApp üzerinden iletilir."
          : "WhatsApp numarası eklenince form doğrudan sohbete açılır. Şimdilik ofis adresini kullanın."}
      </p>
      <div className="mt-6 space-y-4">
        <label className="block">
          <span className="sr-only">Adınız soyadınız</span>
          <input name="name" required autoComplete="name" placeholder="Adınız soyadınız" className="min-h-12 w-full border border-white/15 bg-[#181D23] px-4 py-3 text-base text-[#E2E8F0] outline-none focus:border-[#7B90A8]" />
        </label>
        <label className="block">
          <span className="sr-only">Telefon numaranız</span>
          <input name="phone" required type="tel" autoComplete="tel" placeholder="Telefon numaranız" className="min-h-12 w-full border border-white/15 bg-[#181D23] px-4 py-3 text-base text-[#E2E8F0] outline-none focus:border-[#7B90A8]" />
        </label>
        <label className="block">
          <span className="sr-only">Proje veya talebiniz</span>
          <textarea name="message" required rows={4} placeholder="Proje veya talebiniz" className="w-full resize-none border border-white/15 bg-[#181D23] px-4 py-3 text-base text-[#E2E8F0] outline-none focus:border-[#7B90A8]" />
        </label>
        <button type="submit" className="min-h-12 w-full bg-gold px-5 py-3.5 text-xs font-semibold tracking-[0.14em] text-navy uppercase hover:bg-gold-soft">
          {hasWhatsapp() ? "WhatsApp ile gönder" : "Mesajı hazırla"}
        </button>
        {note ? <p className="text-sm text-gold-dark">{note}</p> : null}
      </div>
    </form>
  );
}
