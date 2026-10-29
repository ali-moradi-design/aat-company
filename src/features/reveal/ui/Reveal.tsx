"use client";

import { useEffect, useRef, type ElementType } from "react";
import { cn } from "@/shared/lib/cn";

/**
 * Reveals its child once it scrolls into view by adding `.is-visible`,
 * which the `[data-reveal]` rule in globals.css animates against.
 */
export function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  className,
  style,
  once = true,
  ...props
}: {
  children: React.ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  once?: boolean;
} & React.HTMLAttributes<HTMLElement>) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (
      typeof window === "undefined" ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      node.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            entry.target.classList.remove("is-visible");
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref}
      data-reveal=""
      className={cn(className)}
      style={{
        ...style,
        ["--reveal-delay" as string]: `${delay}s`,
      }}
      {...props}
    >
      {children}
    </Tag>
  );
}
