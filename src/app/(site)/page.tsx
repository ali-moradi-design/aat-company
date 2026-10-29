import { FeaturedProjects } from "@/widgets/featured-projects/ui/FeaturedProjects";
import { HomeIntro } from "@/widgets/home-intro/ui/HomeIntro";
import { TextAndPortrait } from "@/widgets/text-and-portrait/ui/TextAndPortrait";
import { featuredProjects } from "@/entities/project/model/projects";

export default function HomePage() {
  return (
    <>
      <HomeIntro />
      <FeaturedProjects projects={featuredProjects} />
      <TextAndPortrait
        image="/images/home-text.jpg"
        alt="Interior of a project by AAT|Architecten"
        linkLabel="More about us"
        href="/about"
      />
    </>
  );
}
