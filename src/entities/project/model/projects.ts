import {
  HERO_RATIO,
  LANDSCAPE_RATIO,
  PORTRAIT_RATIO,
  type Project,
} from "@/entities/project/model/types";

/**
 * The reference site's project list, in the same order. Copy is the English
 * translation of the studio's own project descriptions; the hero images are the
 * original photographs from each project page.
 */
export const projects: Project[] = [
  {
    slug: "van-raak-l-ravels",
    title: "Van Raak L.",
    category: "Commercial",
    ratio: PORTRAIT_RATIO,
    image: "/images/van-raak.jpg",
    hero: "/images/projects/van-raak-l-ravels.jpg",
    heroRatio: HERO_RATIO,
    credit: "Lumine",
    description:
      "For Van Raak L. in Ravels we designed a building that seamlessly connects office and production hall. The austere concrete facade gives the company a recognisable face, while inside an open staircase, glass walls and a green moss wall create a working environment that puts light and space first. Exposed concrete, wood and steel translate the logic of the inside into a clear form on the outside.",
    alt: "Van Raak L., Ravels",
    location: "Ravels",
  },
  {
    slug: "schooltje-van-de-hei-mol",
    title: "Schooltje van de Hei",
    category: "Education",
    ratio: LANDSCAPE_RATIO,
    image: "/images/schooltje.jpg",
    hero: "/images/projects/schooltje-van-de-hei-mol.jpg",
    heroRatio: HERO_RATIO,
    credit: "Lumine",
    description:
      "For Schooltje van de Hei in Mol we planted the new school buildings along the edges of the plot. That creates a pleasant, enclosed outdoor play area in which the valuable existing chestnut tree takes centre stage and naturally shades the play area and the building. The volumes in light brick and black joinery combine a calm street front with openness towards the playground, where large glazed sections bring plenty of daylight into the classrooms.",
    alt: "Schooltje van de Hei, Mol",
    location: "Mol",
  },
  {
    slug: "woning-c-mol",
    title: "House C",
    category: "Residential",
    ratio: PORTRAIT_RATIO,
    image: "/images/woning-c.jpg",
    hero: "/images/projects/woning-c-mol.jpg",
    heroRatio: HERO_RATIO,
    description:
      "For House C in Mol we designed a contemporary extension to a private house. The existing house is listed in the inventory of architectural heritage and was renovated by the clients with respect for its original elements. The extension houses a kitchen, a seating area, a hall with a toilet and a covered terrace, built in a dark grey brick combined with black aluminium cladding and white plaster where the covered terrace sits. The kitchen has a mint green finish with a marble back wall, while black joinery connects the new, heavily glazed extension to the garden.",
    alt: "House C, Mol",
    location: "Mol",
  },
  {
    slug: "jakob-smits-museum-mol",
    title: "Jakob Smits Museum",
    category: "Public",
    ratio: PORTRAIT_RATIO,
    image: "/images/jakob-smits.jpg",
    hero: "/images/projects/jakob-smits-museum-mol.jpg",
    heroRatio: HERO_RATIO,
    credit: "Lumine",
    description:
      "At the Jakob Smits Museum in Mol, listed in the inventory of architectural heritage, we converted the former caretaker's house into offices, a meeting room and a workshop space. The renovation happened in close consultation with the heritage service k.ERF. We added a number of new elements, with respect for the building's original, valuable features.",
    alt: "Jakob Smits Museum, Mol",
    location: "Mol",
  },
  {
    slug: "woning-s-ravels",
    title: "House S",
    category: "Residential",
    ratio: LANDSCAPE_RATIO,
    image: "/images/woning-s.jpg",
    hero: "/images/projects/woning-s-ravels.jpg",
    heroRatio: HERO_RATIO,
    credit: "Lumine",
    description:
      "For House S in Ravels we created a crisp white volume with flat roofs and an asymmetric composition. Large glazed sections and a double-height space let light fall deep into the house, while black joinery and dark furniture contrast with the white walls and floors. Upstairs everything becomes lighter, with parquet softening the rooms and a bathroom with a calm atmosphere.",
    alt: "House S, Ravels",
    location: "Ravels",
  },
  {
    slug: "bko-rauw-mol",
    title: "BKO Rauw",
    category: "Public",
    ratio: PORTRAIT_RATIO,
    image: "/images/bko-rauw.jpg",
    hero: "/images/projects/bko-rauw-mol.jpg",
    heroRatio: HERO_RATIO,
    credit: "Lumine",
    description:
      "Kinderclub Loewie in Mol accommodates 70 children, with its own entrance separate from the school next door. From the reception desk there is a complete overview of the play areas, which gain a playful spatiality from varying ceiling heights. The sensory room sits lower than the other rooms for a calmer character. Outside, a canopy provides a covered entrance, while the traditional brick building ties in with the existing school site.",
    alt: "BKO Rauw, Mol",
    location: "Mol",
  },
  {
    slug: "tumag-turnhout",
    title: "Tumag",
    category: "Commercial",
    ratio: PORTRAIT_RATIO,
    image: "/images/tumag.jpg",
    hero: "/images/projects/tumag-turnhout.jpg",
    heroRatio: HERO_RATIO,
    credit: "Lumine",
    description:
      "The building for Tumag in Turnhout combines a sleek office volume in black and white with an extensive production hall. Large glazed sections and an open stairwell bring light into the offices, while inside a neutral, functional finish in plenty of white and wood keeps the workspaces calm. The production hall itself is a clear, well-organised space with gantry cranes and a considered layout for precision work.",
    alt: "Tumag, Turnhout",
    location: "Turnhout",
  },
  {
    slug: "bko-sluis-mol",
    title: "BKO Sluis",
    category: "Public",
    ratio: PORTRAIT_RATIO,
    image: "/images/bko-sluis.jpg",
    hero: "/images/projects/bko-sluis-mol.jpg",
    heroRatio: HERO_RATIO,
    credit: "Lumine",
    description:
      "The out-of-school childcare centre at Mol Sluis is housed in the former presbytery and municipal boys' school. The building is on the heritage inventory, so we drew up our design in consultation with k.ERF. The centre accommodates 63 children across six play rooms on the ground floor and first floor, plus a sensory room. Inside, white walls, tall windows and wooden accents create a calm, bright atmosphere, with mint green tiles as a playful accent in the sanitary areas. A new canopy at the rear creates covered outdoor play space.",
    alt: "BKO Sluis, Mol",
    location: "Mol",
  },
  {
    slug: "de-dobbelsteen-antwerpen",
    title: "De Dobbelsteen",
    category: "Education",
    ratio: LANDSCAPE_RATIO,
    image: "/images/de-dobbelsteen.jpg",
    hero: "/images/projects/de-dobbelsteen-antwerpen.jpg",
    heroRatio: HERO_RATIO,
    credit: "Lumine",
    description:
      "De Dobbelsteen in Antwerp consists of volumes in a sand-coloured tone, accented by white canopies above the entrance zones. Inside, oak joinery brings warmth to the corridors and classrooms, while glass walls and a central courtyard with a pitched roof let daylight fall deep into the building. The sports hall has a bright, functional look with plenty of natural light.",
    alt: "De Dobbelsteen, Antwerp",
    location: "Antwerp",
  },
  {
    slug: "kmo-park-de-zillen-mol",
    title: "Business Park De Zillen",
    category: "Commercial",
    ratio: PORTRAIT_RATIO,
    image: "/images/kmo-park.jpg",
    hero: "/images/projects/kmo-park-de-zillen-mol.jpg",
    heroRatio: HERO_RATIO,
    credit: "Lumine",
    description:
      "Business Park De Zillen in Mol consists of a series of compact business units, built up from white and dark facade panels that give each volume a different rhythm. Large glazed sections give the office parts their own identity, while the units themselves are functionally finished with gates and paved business yards.",
    alt: "Business Park De Zillen, Mol",
    location: "Mol",
  },
  {
    slug: "meneer-miel-mol",
    title: "Meneer Miel",
    category: "Public",
    ratio: PORTRAIT_RATIO,
    image: "/images/meneer-miel.jpg",
    hero: "/images/projects/meneer-miel-mol.jpg",
    heroRatio: HERO_RATIO,
    credit: "Lumine",
    description:
      "Day-care centre Meneer Miel in Mol is an inclusive centre for 36 children, divided over two living groups, with additional care rooms for Stijn vzw. The building is in brick that ties in with the surrounding buildings, accented with fibre cement panels. Large glazed sections give a view of the green surroundings and bring filtered light inside, while each living group has its own terrace with a canopy.",
    alt: "Meneer Miel, Mol",
    location: "Mol",
  },
  {
    slug: "heilig-graf-internaat-turnhout",
    title: "Heilig Graf Boarding School",
    category: "Education",
    ratio: PORTRAIT_RATIO,
    image: "/images/heilig-graf-internaat.jpg",
    hero: "/images/projects/heilig-graf-internaat-turnhout.jpg",
    heroRatio: HERO_RATIO,
    credit: "Dimitri Janssens",
    description:
      "The Heilig Graf boarding school in Turnhout is housed in a monumental building with vaulted corridors, brick arches and wooden doors in the communal rooms. The bedrooms and shared living areas were given a contemporary treatment with colourful doors, parquet and functional furniture, so that the historic character is preserved alongside a fresh, modern finish.",
    alt: "Heilig Graf Boarding School, Turnhout",
    location: "Turnhout",
  },
  {
    slug: "heilig-graf-apostoliekenstraat-turnhout",
    title: "Heilig Graf Apostoliekenstraat",
    category: "Education",
    ratio: LANDSCAPE_RATIO,
    image: "/images/heilig-graf-apostoliekenstraat.jpg",
    hero: "/images/projects/heilig-graf-apostoliekenstraat-turnhout.jpg",
    heroRatio: HERO_RATIO,
    credit: "Dimitri Janssens",
    description:
      "The listed monument on the Apostoliekenstraat in Turnhout was restored in phases, keeping the wooden panelling, stained glass windows and black and white tiled floors. Corridors with high ceilings and wooden doors lead to classrooms that were given a fresh, functional layout without losing the historic character.",
    alt: "Heilig Graf Apostoliekenstraat, Turnhout",
    location: "Turnhout",
  },
  {
    slug: "sint-annacollege-middenschool-antwerpen",
    title: "Sint-Annacollege Middle School",
    category: "Education",
    ratio: PORTRAIT_RATIO,
    image: "/images/sint-annacollege.jpg",
    hero: "/images/projects/sint-annacollege-middenschool-antwerpen.jpg",
    heroRatio: HERO_RATIO,
    credit: "Lumine",
    description:
      "Sint-Annacollege Middle School in Antwerp combines a dark brick facade with white concrete accents and bright green canopies above the entrance zones. Inside, white walls, green wall accents and plenty of glass create light, functional classrooms and labs, while wooden sliding panels allow flexible divisions between the rooms.",
    alt: "Sint-Annacollege Middle School, Antwerp",
    location: "Antwerp",
  },
  {
    slug: "b-b-met-woonst-balen-2",
    title: "B&B with Residence",
    category: "Residential",
    ratio: LANDSCAPE_RATIO,
    image: "/images/bb-met-woonst.jpg",
    hero: "/images/projects/b-b-met-woonst-balen-2.jpg",
    heroRatio: HERO_RATIO,
    credit: "Stefanie Faveere",
    description:
      "B&B De Tannerie combines a classic, white-painted facade with a well-kept garden and pool. Inside, authentic elements such as wooden panelling, a marble fireplace and tiled floors were preserved, complemented by a contemporary finish in the bedrooms and bathrooms. The residence and the B&B share the same authentic character.",
    alt: "B&B with Residence, Balen",
    location: "Balen",
  },
  {
    slug: "wouters-cutting-welding-turnhout",
    title: "Wouters Cutting & Welding",
    category: "Commercial",
    ratio: PORTRAIT_RATIO,
    image: "/images/wouters.jpg",
    hero: "/images/projects/wouters-cutting-welding-turnhout.jpg",
    heroRatio: HERO_RATIO,
    credit: "Lumine",
    description:
      "Wouters Cutting & Welding in Turnhout combines a dark, textured facade with red accents that subtly bring the corporate identity back into the building. Inside, a white stairwell with sharp lines and glass office walls puts the offices in the light, while a spacious warehouse hall with tall racking and heavy machinery houses production.",
    alt: "Wouters Cutting & Welding, Turnhout",
    location: "Turnhout",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/** Projects that appear on the home page, in reference order. */
export const featuredProjects = projects.slice(0, 4);
