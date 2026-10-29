export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
  alt: string;
};

export const members: TeamMember[] = [
  {
    name: "Luc Vaes",
    role: "Architect, director",
    bio: "Luc studied architecture in Hasselt and has been a self-employed architect since 1987. After years of experience at practices in the region, he founded AAT|Architecten in 2001. His knowledge of public projects, planning procedures and building technology forms the backbone of the practice.",
    image: "/images/luc-vaes.jpg",
    alt: "Portrait of Luc Vaes",
  },
  {
    name: "An Belmans",
    role: "Architect, director",
    bio: "After her studies An worked at AIM before joining AAT|Architecten in 2012 and becoming a co-director in 2015. Together with Luc she forms a duo that combines experience and renewal, driven by the same conviction: a building only works when the experience from within is the starting point.",
    image: "/images/an-belmans.jpg",
    alt: "Portrait of An Belmans",
  },
];
