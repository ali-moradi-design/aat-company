"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/shared/lib/cn";

/**
 * Splits a heading into masked lines that slide up one after another, the way
 * the reference site animates its hero and page headings. The split is done on
 * words and then re-grouped into lines after layout so it stays correct across
 * breakpoints and reflows.
 */
export function SplitHeading({
  children,
  as: Tag = "h1",
  className,
  stagger = 0.18,
  id,
}: {
  children: string;
  as?: "h1" | "h2" | "h3" | "h4";
  className?: string;
  stagger?: number;
  id?: string;
}) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const words = children.split(/\s+/).filter(Boolean);
    if (words.length === 0) return;

    let frame = 0;

    const measure = () => {
      // Rebuild the word spans before every measurement: after a rebuild the
      // previous nodes are detached, and their rects would all read as zero.
      const spans = words.map((word, index) => {
        const span = document.createElement("span");
        span.textContent = index < words.length - 1 ? `${word} ` : word;
        return span;
      });
      node.replaceChildren(...spans);

      const lineTops = new Map<number, string[]>();
      for (const span of spans) {
        const top = Math.round(span.getBoundingClientRect().top);
        const bucket = lineTops.get(top) ?? [];
        bucket.push(span.textContent ?? "");
        lineTops.set(top, bucket);
      }

      const lines = Array.from(lineTops.entries())
        .sort((a, b) => a[0] - b[0])
        .map(([, group]) => group.join("").trim());

      node.replaceChildren(
        ...lines.map((line, lineIndex) => {
          const outer = document.createElement("span");
          outer.className = "split-heading__line";

          const inner = document.createElement("span");
          inner.className = "split-heading__inner";
          inner.style.setProperty("--reveal-delay", `${lineIndex * stagger}s`);
          inner.textContent = line;

          outer.appendChild(inner);
          return outer;
        }),
      );
    };

    // Wait for fonts so line-breaking matches the final rendering.
    const start = () => {
      frame = requestAnimationFrame(measure);
    };

    if (document.fonts?.ready) {
      document.fonts.ready.then(start);
    } else {
      start();
    }

    const onResize = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(measure);
    };
    window.addEventListener("resize", onResize);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(node);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
      observer.disconnect();
    };
  }, [children, stagger]);

  // Split into word spans on the server (and first paint) so line grouping has
  // something to measure; the effect replaces them with real lines.
  const words = children.split(/\s+/).filter(Boolean);

  return (
    <Tag
      ref={ref}
      id={id}
      className={cn("split-heading", className)}
      aria-label={children}
    >
      {words.map((word, i) => (
        <span key={`${word}-${i}`} data-word="" aria-hidden="true">
          {word}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </Tag>
  );
}
