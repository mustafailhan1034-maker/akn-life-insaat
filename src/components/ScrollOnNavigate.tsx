"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function ScrollOnNavigate() {
  const pathname = usePathname();
  const first = useRef(true);

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    if (pathname !== "/") return;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    const frame = requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
