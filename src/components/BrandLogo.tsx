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

  return (
    <Link
      href={href}
      scroll
      aria-label="AKN Life İnşaat"
      className={`inline-flex shrink-0 items-center ${align === "center" ? "justify-center" : ""}`}
      onClick={(event) => {
        onClick?.(event);
        if (event.defaultPrevented) return;
        onCurrentHomeClick(event, pathname, href);
      }}
    >
      <Image
        src="/logo.png"
        alt="AKN Life İnşaat"
        width={519}
        height={639}
        priority={priority}
        className={
          size === "header"
            ? "block h-12 w-auto bg-transparent sm:h-14 xl:h-16"
            : "block h-14 w-auto bg-transparent sm:h-[4.5rem]"
        }
      />
    </Link>
  );
}
