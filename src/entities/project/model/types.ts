export const PROJECT_CATEGORIES = [
  "Commercial",
  "Education",
  "Public",
  "Residential",
] as const;

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  /** height / width for the card image — 1.3032367972743 or 0.63066776586974 */
  ratio: number;
  /** Card image in `public/images` */
  image: string;
  /** Wide hero image used on the detail page, in `public/images/projects` */
  hero: string;
  /** height / width of the detail hero, taken from the reference markup */
  heroRatio: number;
  /** Photographer credit, shown under the gallery. */
  credit?: string;
  description: string;
  alt: string;
  location?: string;
  year?: string;
};

export const PORTRAIT_RATIO = 1.3032367972743;
export const LANDSCAPE_RATIO = 0.63066776586974;

/** Every project on the reference site uses the same wide hero crop. */
export const HERO_RATIO = 0.59782608695652;

export type GalleryImage = {
  /** File in `public/images/projects/<slug>` */
  src: string;
  alt: string;
  /** height / width, from the reference markup */
  ratio: number;
};

/** One `block-media-columns` row: a single image, a portrait, or a pair. */
export type GalleryBlock = {
  portrait: boolean;
  images: GalleryImage[];
};
