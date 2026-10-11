export function scrollToHomeTop(behavior: ScrollBehavior = "smooth") {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: 0, left: 0, behavior: reduce ? "auto" : behavior });
  if (window.location.hash) {
    window.history.replaceState(null, "", window.location.pathname);
  }
}

export function onCurrentHomeClick(
  event: { preventDefault: () => void },
  pathname: string,
  href: string,
) {
  const toHome = href === "/" || href === "/#anasayfa" || href === "#anasayfa";
  if (!toHome || pathname !== "/") return false;
  event.preventDefault();
  scrollToHomeTop("smooth");
  return true;
}
