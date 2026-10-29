export type NavItem = {
  href: string;
  label: string;
  external?: boolean;
  /** Renders the arrow glyph after the label. */
  withArrow?: boolean;
};

export const primaryNav: NavItem[] = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact", withArrow: true },
];

export const footerNav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

/** Full-screen overlay menu: home plus every primary route. */
export const menuNav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact", withArrow: true },
];

/**
 * Placeholder contact details for the demo build. Nothing here points at the
 * real studio, so the page can be shared without exposing live contact data.
 */
export const contact = {
  company: "AAT|Architecten",
  street: "Voorbeeldstraat 12",
  postalCode: "2000",
  city: "Antwerpen",
  country: "Belgium",
  email: "hello@example.com",
  phone: "+32 3 456 78 90",
  phoneHref: "tel:+3234567890",
  mapsHref: "https://www.google.com/maps/search/?api=1&query=Antwerpen",
  order: "Demo practice — Order of Architects 000000",
  copyright: "©2026",
} as const;

/** Demo build: the labels stay, but the profiles are intentionally unlinked. */
export const socials = [
  { label: "LinkedIn", href: "" },
  { label: "Instagram", href: "" },
] as const;

export type SocialLabel = (typeof socials)[number]["label"];
