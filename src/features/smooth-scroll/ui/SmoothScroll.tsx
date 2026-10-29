"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

/**
 * The reference site drives its scroll feel with Lenis. This provider smooths
 * wheel/touch scrolling globally and stays out of the way for users who ask for
 * reduced motion.
 *
 * It also owns route changes: Lenis keeps its own scroll target, so a new page
 * has to be reset through the instance as well as the window, otherwise the
 * next frame pulls the viewport back to the previous page's offset (which made
 * project pages open halfway down).
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });
    lenisRef.current = lenis;

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true, force: true });
    window.scrollTo(0, 0);

    // The new route's media can change the document height after paint.
    const frame = requestAnimationFrame(() => lenisRef.current?.resize());
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return <>{children}</>;
}
