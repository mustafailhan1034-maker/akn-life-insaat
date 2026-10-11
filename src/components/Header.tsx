"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { NAV_LINKS } from "@/lib/constants";
import { onCurrentHomeClick, scrollToHomeTop } from "@/lib/home-scroll";

type NavChild = { href: string; label: string };
type NavItem = (typeof NAV_LINKS)[number] & { children?: readonly NavChild[] };

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpenKey, setMobileOpenKey] = useState<string | null>(null);
  const [desktopMenu, setDesktopMenu] = useState<string | null>(null);
  const closeTimer = useRef<number | null>(null);
  const overlaysMedia =
    pathname === "/" ||
    pathname === "/kentsel-donusum" ||
    pathname === "/kurumsal" ||
    /^\/kurumsal\/.+/.test(pathname) ||
    /^\/hizmetlerimiz\/.+/.test(pathname);

  const linkActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMobile = () => {
    setOpen(false);
    setMobileOpenKey(null);
    document.body.style.overflow = "";
  };

  const goHome = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    const stayed = onCurrentHomeClick(event, pathname, href);
    closeMobile();
    if (stayed) window.setTimeout(() => scrollToHomeTop("smooth"), 0);
  };

  const clearCloseTimer = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
  };

  const showDesktopMenu = (key: string) => {
    clearCloseTimer();
    setDesktopMenu(key);
  };

  const hideDesktopMenu = () => {
    clearCloseTimer();
    closeTimer.current = window.setTimeout(() => setDesktopMenu(null), 180);
  };

  useEffect(() => clearCloseTimer, []);

  const headerLinks = (NAV_LINKS as readonly NavItem[]).filter((link) => link.href !== "/iletisim");
  const solid = scrolled || !overlaysMedia;
  const linkClass = (active: boolean) =>
    solid
      ? active
        ? "text-gold-dark"
        : "text-[#2b2c2e]/75 hover:text-gold-dark"
      : active
        ? "text-gold-soft"
        : "text-white/90 hover:text-gold-soft";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 w-full px-8 py-2.5 transition duration-300 lg:px-16 ${
          solid
            ? "border-b border-[#2b2c2e]/10 bg-[#fbfbfa]/92 shadow-sm backdrop-blur"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="flex w-full items-center justify-between gap-4 xl:gap-8">
          <BrandLogo tone="light" priority size="header" onClick={(event) => goHome(event, "/")} />
          <nav className="hidden min-w-0 items-center gap-4 xl:flex 2xl:gap-7" aria-label="Ana menü">
            {headerLinks.map((link) => {
              const isActive = linkActive(link.href);
              const key = link.href + link.label.tr;
              if (!link.children?.length) {
                return (
                  <Link
                    key={key}
                    href={link.href}
                    scroll
                    onClick={(event) => goHome(event, link.href)}
                    className={`font-sans text-base font-medium tracking-wider whitespace-nowrap 2xl:text-lg ${linkClass(isActive)}`}
                  >
                    {link.label.tr}
                  </Link>
                );
              }
              const menuOpen = desktopMenu === key;
              return (
                <div
                  key={key}
                  className="relative"
                  onMouseEnter={() => showDesktopMenu(key)}
                  onMouseLeave={hideDesktopMenu}
                  onFocus={() => showDesktopMenu(key)}
                  onBlur={(event) => {
                    const next = event.relatedTarget;
                    if (next instanceof Node && event.currentTarget.contains(next)) return;
                    hideDesktopMenu();
                  }}
                >
                  <Link
                    href={link.href}
                    aria-haspopup="true"
                    aria-expanded={menuOpen}
                    className={`inline-flex items-center py-1.5 font-sans text-base font-medium tracking-wider whitespace-nowrap 2xl:text-lg ${linkClass(isActive || menuOpen)}`}
                  >
                    {link.label.tr}
                    <ChevronDown className={`ml-1 h-4 w-4 transition ${menuOpen ? "rotate-180" : ""}`} />
                  </Link>
                  <div className={`absolute top-full left-1/2 z-50 -translate-x-1/2 pt-4 ${menuOpen ? "visible" : "invisible"}`}>
                    <div className={`max-h-[70vh] min-w-[280px] overflow-y-auto border border-[#2b2c2e]/10 bg-[#fbfbfa] p-2 shadow-2xl transition duration-150 ${menuOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0"}`}>
                      <ul>
                        {link.children.map((child) => (
                          <li key={child.href + child.label}>
                            <Link
                              href={child.href}
                              className="block min-h-12 px-4 py-3 font-sans text-base font-medium tracking-wide text-[#2b2c2e] hover:bg-gold/15 hover:text-gold-dark"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>
          <Link
            href="/iletisim"
            className={`hidden shrink-0 items-center gap-2 px-5 py-2 font-sans text-sm font-medium tracking-wider uppercase xl:inline-flex ${
              solid ? "bg-navy text-[#f4f3ef] hover:bg-gold hover:text-navy" : "border border-gold text-gold-soft hover:bg-gold hover:text-navy"
            }`}
          >
            İletişim
          </Link>
          <button
            type="button"
            className={`inline-flex h-11 w-11 shrink-0 items-center justify-center border xl:hidden ${solid ? "border-[#2b2c2e]/20 text-[#2b2c2e]" : "border-white/40 text-white"}`}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[70] bg-[#fbfbfa] text-[#2b2c2e] transition xl:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
        aria-hidden={!open}
      >
        <div className="flex h-full flex-col px-8 pt-2.5 pb-10">
          <div className="flex items-center justify-between border-b border-[#2b2c2e]/10">
            <BrandLogo tone="light" priority size="header" onClick={(event) => goHome(event, "/")} />
            <button type="button" className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-[#2b2c2e]/20 text-[#2b2c2e]" aria-label="Menüyü kapat" onClick={closeMobile}>
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="mt-4 flex flex-1 flex-col overflow-y-auto" aria-label="Mobil menü">
            {headerLinks.map((link) => {
              const key = link.href + link.label.tr;
              const expanded = mobileOpenKey === key;
              if (!link.children?.length) {
                return (
                  <Link key={key} href={link.href} scroll className="border-b border-[#2b2c2e]/10 py-4 font-serif text-3xl text-[#2b2c2e]" onClick={(event) => goHome(event, link.href)}>
                    {link.label.tr}
                  </Link>
                );
              }
              return (
                <div key={key} className="border-b border-[#2b2c2e]/10">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-4 text-left font-serif text-3xl text-[#2b2c2e]"
                    aria-expanded={expanded}
                    onClick={() => setMobileOpenKey((current) => (current === key ? null : key))}
                  >
                    {link.label.tr}
                    <ChevronDown className={`h-5 w-5 transition ${expanded ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`overflow-hidden transition-[max-height] duration-200 ${expanded ? "max-h-[40rem] pb-3" : "max-h-0"}`}>
                    <Link href={link.href} className="flex min-h-12 items-center px-2 text-sm font-semibold text-gold-dark" onClick={closeMobile}>
                      Tümünü gör
                    </Link>
                    {link.children.map((child) => (
                      <Link key={child.href} href={child.href} className="flex min-h-12 items-center px-2 text-base text-[#2b2c2e]/80" onClick={closeMobile}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </nav>
          <Link href="/iletisim" onClick={closeMobile} className="mt-4 inline-flex items-center justify-center bg-gold px-6 py-4 text-sm font-semibold tracking-wide text-navy uppercase">
            İletişim
          </Link>
        </div>
      </div>
    </>
  );
}
