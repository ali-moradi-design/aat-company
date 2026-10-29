"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { SplitHeading } from "@/features/reveal/ui/SplitHeading";
import { cn } from "@/shared/lib/cn";

const LOGO_PATH =
  "M30.278 30h-4.314L15.143 5.799 4.315 30H0L13.38 0h3.518zm42.061 0h-4.314L57.205 5.799 46.376 30h-4.315l13.38-30h3.517zM103 0v3.824h-9.085V30h-3.99V3.832h-9.091V0z";

const LANDSCAPE = [
  "/images/about-land-1.jpg",
  "/images/about-land-2.jpg",
  "/images/about-land-3.jpg",
];

const PORTRAIT = [
  "/images/about-port-1.jpg",
  "/images/about-port-2.jpg",
  "/images/about-port-3.jpg",
  "/images/about-port-4.jpg",
];

const LEAD =
  "We believe architecture is, first and foremost, experience. A building only succeeds when people feel good in it, when the spaces make sense and the design respects the budget. We also work ever more consciously around sustainable building, with attention to light and open structures as a basic principle.";

/**
 * Cross-fades through a set of slides on a fixed interval. The two slots run on
 * different periods so the pair rarely lands on a matching image.
 */
function useSlideIndex(length: number, interval: number) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(() => {
      setIndex((value) => (value + 1) % length);
    }, interval);

    return () => window.clearInterval(id);
  }, [length, interval]);

  return index;
}

function Slot({
  variant,
  images,
  alt,
  index,
  sizes,
}: {
  variant: "landscape" | "portrait";
  images: string[];
  alt: string;
  index: number;
  sizes: string;
}) {
  return (
    <div
      className={cn(
        "about-intro-block__media-slot",
        variant === "landscape"
          ? "about-intro-block__media-slot--landscape"
          : "about-intro-block__media-slot--portrait",
      )}
      aria-hidden="true"
    >
      {images.map((src, i) => (
        <div
          key={src}
          className={cn("about-intro-block__slide", i === index && "is-active")}
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}

export function AboutIntro() {
  const landscapeIndex = useSlideIndex(LANDSCAPE.length, 3600);
  const portraitIndex = useSlideIndex(PORTRAIT.length, 4600);

  return (
    <section className="row about-intro-block mt-g-half mb-g">
      <SplitHeading as="h1" className="about-intro-block__heading">
        Architecture that starts with the people who live and work in it every
        day.
      </SplitHeading>

      <div className="about-intro-block__stage">
        <Slot
          variant="landscape"
          images={LANDSCAPE}
          alt=""
          index={landscapeIndex}
          sizes="(min-width: 1024px) 28vw, 34vw"
        />

        <div className="about-intro-block__logo">
          <svg
            viewBox="0 0 103 30"
            fill="currentColor"
            role="img"
            aria-label="AAT"
            className="about-intro-block__logo-svg"
          >
            <path d={LOGO_PATH} />
          </svg>
        </div>

        <Slot
          variant="portrait"
          images={PORTRAIT}
          alt=""
          index={portraitIndex}
          sizes="(min-width: 1024px) 15vw, 25vw"
        />
      </div>

      <p className="about-intro-block__text">{LEAD}</p>
    </section>
  );
}
