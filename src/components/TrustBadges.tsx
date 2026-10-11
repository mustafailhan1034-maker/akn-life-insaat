const BADGES = ["Şeffaf süreç", "Kaliteli işçilik", "İstanbul / Marmara"] as const;

export default function TrustBadges({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex flex-wrap items-center gap-2 ${className}`} aria-label="Güven rozetleri">
      {BADGES.map((badge) => (
        <li
          key={badge}
          className="rounded-full border border-gold/50 px-3 py-1.5 text-[11px] font-semibold tracking-wide text-gold-dark sm:text-xs"
        >
          {badge}
        </li>
      ))}
    </ul>
  );
}
