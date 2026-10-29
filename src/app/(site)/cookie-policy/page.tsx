import type { Metadata } from "next";
import { LegalPage } from "@/widgets/legal-page/ui/LegalPage";

export const metadata: Metadata = {
  title: "Cookie policy",
};

export default function CookiePolicyPage() {
  return (
    <LegalPage heading="Cookie policy" updated="Last updated: 1 January 2026">
      <p>
        This site uses only functional cookies and local storage that are
        necessary for the site to work. They remember, for example, whether the
        menu is open. No tracking cookies are placed, so no prior consent is
        required.
      </p>
      <p>
        This site is protected by reCAPTCHA, which may place cookies to
        distinguish human visitors from automated traffic. The Google Privacy
        Policy and Terms of Service apply to those cookies.
      </p>
      <p>
        You can delete or block cookies at any time in your browser settings.
        Blocking functional cookies can affect how the site works.
      </p>
    </LegalPage>
  );
}
