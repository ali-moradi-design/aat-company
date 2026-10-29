import type { Metadata } from "next";
import { ContactForm } from "@/widgets/contact-form/ui/ContactForm";
import { ContactIntro } from "@/widgets/contact-intro/ui/ContactIntro";
import { MediaBand } from "@/widgets/media-band/ui/MediaBand";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact AAT|Architecten: Voorbeeldstraat 12, 2000 Antwerpen. Demo contact details.",
};

export default function ContactPage() {
  return (
    <>
      <ContactIntro />
      <ContactForm />
      <MediaBand
        src="/images/contact.jpg"
        alt="Project by AAT|Architecten"
        ratio={0.66653948874475}
      />
    </>
  );
}
