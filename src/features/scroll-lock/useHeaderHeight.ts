"use client";

import { useEffect, useRef } from "react";

/**
 * Publishes the rendered header height as `--header-height` so the home intro
 * can pad its content below the (transparent, overlapping) header.
 */
export function useHeaderHeight() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const update = () => {
      document.documentElement.style.setProperty(
        "--header-height",
        `${node.offsetHeight}px`,
      );
    };

    update();

    const observer = new ResizeObserver(update);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return ref;
}
