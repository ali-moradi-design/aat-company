"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { SplitHeading } from "@/features/reveal/ui/SplitHeading";
import { cn } from "@/shared/lib/cn";

const HEADING =
  "We design buildings that work for public spaces, schools and businesses, and always start from the space within.";

export function HomeIntro({ className }: { className?: string }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const media = node.querySelector<HTMLElement>(".home-intro-block__media");

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => {
      // The figure keeps the box's uncollapsed width so shrinking the box
      // clips it from the left instead of squashing it.
      if (media) {
        node.style.setProperty(
          "--home-intro-media-w",
          `${media.clientWidth}px`,
        );
      }

      if (reduced.matches) {
        node.style.setProperty("--home-intro-media-width", "100%");
        node.style.setProperty("--home-intro-inset", "0px");
        return;
      }

      // 0 while the hero fills the viewport, 1 once it has scrolled away.
      const height = node.offsetHeight || window.innerHeight;
      const progress = Math.min(Math.max(window.scrollY / height, 0), 1);

      node.style.setProperty(
        "--home-intro-media-width",
        `${(1 - progress) * 100}%`,
      );
      node.style.setProperty("--home-intro-inset", `${progress * 100}%`);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    const observer = new ResizeObserver(update);
    if (media) observer.observe(media);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={ref}
      className={cn("home-intro-block row mb-g", className)}
      aria-label="Introduction"
    >
      <div className="home-intro-block__content">
        <SplitHeading
          as="h1"
          className="home-intro-block__heading"
          stagger={0.18}
        >
          {HEADING}
        </SplitHeading>
      </div>

      <p className="home-intro-block__scroll">scroll</p>

      <div className="home-intro-block__media">
        <figure className="home-intro-block__figure m-0">
          <Image
            src="/images/home-hero.jpg"
            alt="Interior designed by AAT|Architecten"
            fill
            priority
            sizes="(min-width: 1024px) 80vw, 100vw"
            className="home-intro-block__image object-cover"
          />
        </figure>
      </div>
    </section>
  );
}
