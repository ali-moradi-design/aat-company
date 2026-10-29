import { socials } from "@/shared/config/site";
import { cn } from "@/shared/lib/cn";

type SocialLinksVariant = "footer" | "menu" | "intro";

const LIST: Record<SocialLinksVariant, string> = {
  // `.social-nav--footer`
  footer: "flex-col items-start gap-y-4 lg:gap-y-6",
  // `.social-nav--mobile-nav`
  menu: "flex-col gap-y-2",
  // `.social-nav--contact-intro-block`
  intro: "flex-col items-start gap-y-6",
};

const LINK: Record<SocialLinksVariant, string> = {
  footer: "text-16 leading-none text-black-500 lg:text-20",
  menu: "text-16 leading-21 text-grey-500",
  intro: "text-h5 leading-9 text-black-500 lg:text-24",
};

/**
 * The reference renders these as labels only — the brand icons are hidden in
 * the footer, the overlay menu and the contact intro (`social-nav--only-label`).
 */
export function SocialLinks({
  variant = "footer",
  className,
}: {
  variant?: SocialLinksVariant;
  className?: string;
}) {
  return (
    <ul className={cn("flex w-fit max-w-full", LIST[variant], className)}>
      {socials.map((social) => (
        <li key={social.label} className="block leading-none">
          <a
            {...(social.href
              ? { href: social.href, target: "_blank", rel: "noreferrer noopener" }
              : { "aria-disabled": true })}
            className={cn(
              "focus-ring block whitespace-nowrap transition-colors duration-[600ms] hover:text-grey-500",
              LINK[variant],
            )}
          >
            {social.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
