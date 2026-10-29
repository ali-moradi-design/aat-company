import Image from "next/image";
import { ArrowLink } from "@/shared/ui/ArrowLink";
import { Reveal } from "@/features/reveal/ui/Reveal";

const TEXT =
  "We believe architecture is, first and foremost, experience. A building only succeeds when people feel good in it, when the spaces make sense and the design respects the budget. We also work ever more consciously around sustainable building, with attention to light and open structures as a basic principle.";

/**
 * Lead block used on the home and about pages: a portrait image above-left, a
 * large indented lead paragraph, and a single wide link underneath.
 */
export function TextAndPortrait({
  image,
  alt,
  text = TEXT,
  linkLabel = "More about us",
  href = "/about",
}: {
  image: string;
  alt: string;
  text?: string;
  linkLabel?: string;
  href?: string;
}) {
  return (
    <section className="row block-text-and-portrait mb-g" aria-label="About us">
      <Reveal className="block-text-and-portrait__media">
        <figure className="relative m-0 w-full overflow-hidden">
          <div
            className="aspect-ratio-box"
            style={{ ["--ratio" as string]: "1.3913043478261" }}
          >
            <Image
              src={image}
              alt={alt}
              fill
              sizes="(min-width: 1024px) 15vw, 33vw"
              className="object-cover"
            />
          </div>
        </figure>
      </Reveal>

      <Reveal className="block-text-and-portrait__text">
        <p className="m-0">{text}</p>
      </Reveal>

      <div className="block-text-and-portrait__links">
        <ArrowLink href={href} spread>
          {linkLabel}
        </ArrowLink>
      </div>
    </section>
  );
}
