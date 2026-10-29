import { ArrowLink } from "@/shared/ui/ArrowLink";
import { Reveal } from "@/features/reveal/ui/Reveal";

/**
 * Closing call-to-action: a wide heading on the left, an arrow link pinned to
 * the bottom-right on desktop.
 */
export function CTA({
  heading,
  linkLabel = "Contact us",
  href = "/contact",
}: {
  heading: string;
  linkLabel?: string;
  href?: string;
}) {
  return (
    <section className="row block-cta mb-g" aria-label="Contact">
      <Reveal
        className="block-cta__grid-item--heading col-d"
        style={{ ["--dc" as string]: "main-start / 16" }}
      >
        <p className="block-cta__heading m-0">{heading}</p>
      </Reveal>

      <div
        className="block-cta__grid-item--links col-d mt-6 flex lg:mt-auto"
        style={{ ["--dc" as string]: "20 / main-end" }}
      >
        <div className="block-cta__links w-full">
          <ArrowLink href={href} spread>
            {linkLabel}
          </ArrowLink>
        </div>
      </div>
    </section>
  );
}
