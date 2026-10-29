import Image from "next/image";
import { Reveal } from "@/features/reveal/ui/Reveal";

/** `block-media` — a single full-bleed image. */
export function MediaBand({
  src,
  alt,
  ratio,
  sizes = "100vw",
}: {
  src: string;
  alt: string;
  ratio: number;
  sizes?: string;
}) {
  return (
    <Reveal>
      <section className="row block-media mb-g">
        <figure className="block-media__figure col-full m-0 w-full">
          <div
            className="aspect-ratio-box"
            style={{ ["--ratio" as string]: String(ratio) }}
          >
            <Image
              src={src}
              alt={alt}
              fill
              sizes={sizes}
              className="object-cover"
            />
          </div>
        </figure>
      </section>
    </Reveal>
  );
}
