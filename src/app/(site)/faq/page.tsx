import type { Metadata } from "next";
import { CTA } from "@/widgets/cta/ui/CTA";
import { Faq } from "@/widgets/faq/ui/Faq";
import { SplitHeading } from "@/features/reveal/ui/SplitHeading";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about how we work, permits and the kinds of projects we take on.",
};

export default function FaqPage() {
  return (
    <>
      <div className="row mb-g">
        <div className="faq-list-intro__heading-wrapper">
          <SplitHeading as="h1" className="faq-list-intro__heading m-0">
            Frequently asked questions
          </SplitHeading>
        </div>
      </div>

      <Faq />

      <CTA
        heading="If you have any further questions, we would be happy to answer them during a first, no-obligation conversation."
        linkLabel="Contact us"
      />
    </>
  );
}
