import Image from "next/image";
import { AspectRatioBox } from "@/shared/ui/AspectRatioBox";
import { cn } from "@/shared/lib/cn";

export type MediaColumn = {
  src: string;
  alt: string;
  /** height / width for this image */
  ratio: number;
};

/**
 * `block-media-columns` — the project gallery. One centred image, a pair of
 * images, or a portrait-format single image.
 */
export function MediaColumns({
  images,
  portrait = false,
  sizes = "(min-width: 1024px) 45vw, 100vw",
  className,
}: {
  images: MediaColumn[];
  portrait?: boolean;
  sizes?: string;
  className?: string;
}) {
  const count = images.length === 2 ? 2 : 1;

  return (
    <section
      className={cn(
        "row block-media-columns mb-g",
        `block-media-columns--count-${count}`,
        portrait && "block-media-columns--portrait",
        className,
      )}
      aria-hidden={images.length === 0 || undefined}
    >
      {images.map((image, index) => (
        <div
          key={`${image.src}-${index}`}
          className="block-media-columns__column"
        >
          <figure className="block-media-columns__figure m-0 h-full w-full">
            <AspectRatioBox
              ratio={image.ratio}
              className={count === 2 ? "h-full" : undefined}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes={sizes}
                className="object-cover"
              />
            </AspectRatioBox>
          </figure>
        </div>
      ))}
    </section>
  );
}
