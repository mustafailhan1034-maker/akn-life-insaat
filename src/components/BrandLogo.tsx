"use client";

import { type MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { onCurrentHomeClick } from "@/lib/home-scroll";

export default function BrandLogo({
  href = "/",
  align = "left",
  priority = false,
  size = "default",
  onClick,
}: {
  href?: string;
  align?: "center" | "left";
  tone?: "dark" | "light";
  priority?: boolean;
  size?: "default" | "header";
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}) {
  const pathname = usePathname();
  const header = size === "header";

  return (
    <Link
      href={href}
      scroll
      aria-label="AKN Life İnşaat"
      className={`inline-flex shrink-0 items-center gap-2 sm:gap-2.5 ${align === "center" ? "justify-center" : ""}`}
      onClick={(event) => {
        onClick?.(event);
        if (event.defaultPrevented) return;
        onCurrentHomeClick(event, pathname, href);
      }}
    >
      <Image
        src="/mark.png"
        alt=""
        width={265}
        height={265}
        priority={priority}
        className={header ? "block h-10 w-auto sm:h-12 xl:h-14" : "block h-14 w-auto sm:h-16"}
      />
      <span className="flex flex-col items-start leading-none">
        <span
          className={`font-sans font-semibold tracking-[0.16em] text-[#E2E8F0] ${
            header ? "text-[0.62rem] sm:text-xs xl:text-sm" : "text-xs sm:text-sm"
          }`}
        >
          AKN LİFE
        </span>
        <span
          className={`mt-0.5 font-sans font-semibold tracking-[0.18em] text-[#7B90A8] ${
            header ? "text-[0.78rem] sm:text-base xl:text-lg" : "text-base sm:text-lg"
          }`}
        >
          İNŞAAT
        </span>
        <span
          className={`mt-1 font-sans font-medium tracking-[0.18em] text-[#94A3B8] ${
            header ? "text-[0.42rem] sm:text-[0.5rem] xl:text-[0.56rem]" : "text-[0.5rem] sm:text-[0.58rem]"
          }`}
        >
          YAPI &amp; GAYRİMENKUL
        </span>
      </span>
    </Link>
  );
}
