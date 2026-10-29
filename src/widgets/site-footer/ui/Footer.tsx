import Link from "next/link";
import { Logo } from "@/shared/ui/Logo";
import { SocialLinks } from "@/shared/ui/SocialLinks";
import { contact, footerNav } from "@/shared/config/site";

/**
 * Mirrors the reference footer: two subgrid bands inside the site grid, so the
 * column boundaries of the brand row and the legal row line up exactly.
 */
export function Footer() {
  return (
    <footer className="row gap-y-20 border-t border-grey-300 bg-white pt-20 pb-12 text-black-500 lg:gap-y-32 lg:pt-32">
      <div className="col-main grid grid-cols-subgrid items-start gap-y-8 lg:gap-y-12">
        <div className="col-span-6 mb-12 w-fit max-w-full justify-self-start lg:mb-0">
          <Link
            href="/"
            className="focus-ring inline-block"
            aria-label="Go to the home page"
          >
            <Logo variant="footer" />
          </Link>
        </div>

        <nav
          aria-label="Footer"
          className="hidden w-fit max-w-full justify-self-start lg:col-span-4 lg:block"
        >
          <ul className="flex flex-col items-start gap-y-6">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="focus-ring block text-20 leading-none text-grey-500 transition-colors duration-[600ms] hover:text-black-500"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <address className="col-span-6 w-fit max-w-full justify-self-start not-italic lg:col-span-5">
          <div className="flex flex-col items-start gap-y-4 lg:gap-y-6">
            <a
              href={contact.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring flex flex-col items-start gap-y-4 text-16 leading-none text-black-500 transition-colors duration-[600ms] hover:text-grey-500 lg:gap-y-6 lg:text-20"
            >
              <span>{contact.street}</span>
              <span>
                {contact.postalCode} {contact.city}
              </span>
            </a>
          </div>
        </address>

        <div className="col-span-6 w-fit max-w-full justify-self-start lg:col-span-5">
          <ul className="flex flex-col items-start gap-y-4 lg:gap-y-6">
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="focus-ring block text-16 leading-none whitespace-nowrap text-black-500 transition-colors duration-[600ms] hover:text-grey-500 lg:text-20"
              >
                {contact.email}
              </a>
            </li>
            <li>
              <a
                href={contact.phoneHref}
                className="focus-ring block text-16 leading-none whitespace-nowrap text-black-500 transition-colors duration-[600ms] hover:text-grey-500 lg:text-20"
              >
                {contact.phone}
              </a>
            </li>
          </ul>
        </div>

        <div className="col-span-6 w-fit max-w-full justify-self-start lg:col-span-2">
          <SocialLinks variant="footer" />
        </div>
      </div>

      <div className="col-main flex flex-wrap items-center justify-between gap-y-8 lg:grid lg:grid-cols-subgrid lg:items-end lg:gap-y-12">
        <div className="lg:col-span-6">
          <p className="text-13 leading-none lg:text-16">{contact.copyright}</p>
        </div>

        <div className="lg:col-span-4 lg:col-start-7">
          <Link
            href="/privacy-policy"
            className="focus-ring block text-13 leading-none transition-colors duration-[600ms] hover:text-grey-500 lg:text-16"
          >
            Privacy policy
          </Link>
        </div>

        <div className="lg:col-span-5 lg:col-start-11">
          <Link
            href="/cookie-policy"
            className="focus-ring block text-13 leading-none transition-colors duration-[600ms] hover:text-grey-500 lg:text-16"
          >
            Cookies
          </Link>
        </div>

        <div className="flex w-full items-end justify-between lg:contents">
          <div className="lg:col-span-5 lg:col-start-16">
            <p className="text-13 leading-none lg:text-16">{contact.order}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
