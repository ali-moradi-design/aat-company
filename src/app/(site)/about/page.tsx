import type { Metadata } from "next";
import { AboutIntro } from "@/widgets/about-intro/ui/AboutIntro";
import { TeamBlock } from "@/widgets/team-block/ui/TeamBlock";
import { TextAndMedia } from "@/widgets/text-and-media/ui/TextAndMedia";

export const metadata: Metadata = {
  title: "About",
  description:
    "AAT|Architecten is an architecture studio in Turnhout, led by Luc Vaes and An Belmans.",
};

export default function AboutPage() {
  return (
    <>
      <AboutIntro />
      <TeamBlock />
      <TextAndMedia
        heading="We design buildings that work for public spaces, schools and businesses, and always start from the space within."
        image="/images/about-wide.jpg"
        alt="Project by AAT|Architecten"
        ratio={1.4492753623188}
        linkLabel="Contact us"
        href="/contact"
      />
    </>
  );
}
