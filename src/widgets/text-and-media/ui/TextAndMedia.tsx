import Image from "next/image";
import { ArrowLink } from "@/shared/ui/ArrowLink";
import { AspectRatioBox } from "@/shared/ui/AspectRatioBox";
import { Reveal } from "@/features/reveal/ui/Reveal";
import { cn } from "@/shared/lib/cn";

/**
 * `block-text-and-media` — a tall image next to a bottom-aligned heading and
 * arrow link. Used at the end of the about page.
 */
export function TextAndMedia({
  heading,
  image,
  alt,
  ratio,
  linkLabel,
  href,
  mediaSide = "left",
}: {
  heading: string;
  image: string;
  alt: string;
  ratio: number;
  linkLabel: string;
  href: string;
  mediaSide?: "left" | "right";
}) {
  return (
    <Reveal>
      <section
        className={cn(
          "row block-text-and-media mb-g",
          mediaSide === "left"
            ? "block-text-and-media--media-left"
            : "block-text-and-media--media-right",
        )}
      >
        <div className="block-text-and-media__grid-item block-text-and-media__grid-item--media">
          <figure className="m-0 w-full">
            <AspectRatioBox ratio={ratio}>
              <Image
                src={image}
                alt={alt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </AspectRatioBox>
          </figure>
        </div>

        <div className="block-text-and-media__grid-item block-text-and-media__grid-item--content">
          <h2 className="block-text-and-media__heading m-0">{heading}</h2>

          <div className="block-text-and-media__links">
            <ArrowLink href={href} spread>
              {linkLabel}
            </ArrowLink>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
