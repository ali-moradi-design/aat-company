import type { Metadata } from "next";
import { LegalPage } from "@/widgets/legal-page/ui/LegalPage";
import { contact } from "@/shared/config/site";

export const metadata: Metadata = {
  title: "Privacy policy",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage heading="Privacy policy" updated="Last updated: 1 January 2026">
      <p>
        AAT|Architecten, {contact.street}, {contact.postalCode} {contact.city},
        is responsible for processing the personal data described in this
        statement.
      </p>
      <p>
        When you contact us by email, telephone or through the form on this
        site, we record your name, email address, telephone number and the
        information you send us. We use that data only to answer your question
        and to prepare a possible assignment.
      </p>
      <p>
        We do not share your data with third parties, unless this is necessary
        to carry out an assignment or to comply with a legal obligation. We keep
        the data no longer than is necessary for the purpose for which it was
        collected.
      </p>
      <p>
        This site is protected by reCAPTCHA. Google therefore processes
        technical data about your visit. The Google Privacy Policy and Terms of
        Service apply to that processing.
      </p>
      <p>
        You have the right to inspect, correct or delete your data. Send a
        message to {contact.email} and we will handle your request.
      </p>
    </LegalPage>
  );
}
