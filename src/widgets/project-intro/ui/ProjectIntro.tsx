import Image from "next/image";
import Link from "next/link";
import { AspectRatioBox } from "@/shared/ui/AspectRatioBox";
import { ArrowIcon } from "@/shared/ui/icons";
import type { Project } from "@/entities/project/model/types";

/**
 * `project-intro-block` — full-width hero image, then one row holding the back
 * link, the location/category pair and the title with its description.
 */
export function ProjectIntro({
  project,
  heroRatio,
}: {
  project: Project;
  heroRatio: number;
}) {
  const location = project.location
    ? `${project.location}, Antwerp`
    : "Antwerp";

  return (
    <section className="row project-intro-block mt-g-half mb-g">
      <div className="project-intro-block__media">
        <figure className="project-intro-block__figure m-0 w-full">
          <AspectRatioBox ratio={heroRatio}>
            <Image
              src={project.image}
              alt={project.alt}
              fill
              priority
              sizes="100vw"
              className="project-intro-block__image object-cover"
            />
          </AspectRatioBox>
        </figure>
      </div>

      <div className="project-intro-block__back">
        <Link
          href="/projects"
          className="project-intro-block__back-link focus-ring"
        >
          <ArrowIcon className="project-intro-block__back-icon rotate-180" />
          <span>Back</span>
        </Link>
      </div>

      <div className="project-intro-block__location">
        <span className="project-intro-block__location-value">{location}</span>
        <br />
        <span className="project-intro-block__categories">
          {project.category}
        </span>
      </div>

      <div className="project-intro-block__content">
        <h1 className="project-intro-block__heading">{project.title}</h1>
        <div className="project-intro-block__text">
          <p className="m-0">{project.description}</p>
        </div>
      </div>
    </section>
  );
}
