import { SocialLinks } from "@/shared/ui/SocialLinks";
import { Reveal } from "@/features/reveal/ui/Reveal";
import { contact } from "@/shared/config/site";

/**
 * `contact-intro-block` — the page heading plus address, contact details and
 * socials, spread across the grid.
 */
export function ContactIntro() {
  return (
    <section className="row contact-intro-block mt-g-half mb-g">
      <div className="contact-intro-block__grid-item--heading">
        <Reveal as="h1" className="contact-intro-block__heading m-0">
          Contact us
          <br />
          for a conversation.
        </Reveal>
      </div>

      <div className="contact-intro-block__grid-item--address">
        <nav aria-label="Address" className="contact-details">
          <ul className="contact-details__list">
            <li className="contact-details__item contact-details__item--address">
              <a
                href={contact.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-details__link focus-ring"
              >
                <span className="contact-details__label">{contact.street}</span>
                <span className="contact-details__label">
                  {contact.postalCode} {contact.city}
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="contact-intro-block__grid-item--contact">
        <nav aria-label="Contact details" className="contact-details">
          <ul className="contact-details__list">
            <li className="contact-details__item contact-details__item--email">
              <a
                href={`mailto:${contact.email}`}
                className="contact-details__link focus-ring"
              >
                <span className="contact-details__label">{contact.email}</span>
              </a>
            </li>
            <li className="contact-details__item contact-details__item--telephone">
              <a
                href={contact.phoneHref}
                className="contact-details__link focus-ring"
              >
                <span className="contact-details__label">{contact.phone}</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="contact-intro-block__grid-item--social">
        <SocialLinks variant="intro" />
      </div>
    </section>
  );
}
