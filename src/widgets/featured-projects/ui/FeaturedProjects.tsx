import { ArrowLink } from "@/shared/ui/ArrowLink";
import { Reveal } from "@/features/reveal/ui/Reveal";
import { ProjectCard } from "@/entities/project/ui/ProjectCard";
import type { Project } from "@/entities/project/model/types";

/**
 * Home page teaser. Desktop shows the "Projects" heading and the "All
 * projects" link in one row above the cards; mobile moves the link below the
 * cards. The four cards reuse the reference's `pl` / `p-gap-p` batches:
 * portrait + landscape, then two portraits with a gutter column between.
 */
export function FeaturedProjects({ projects }: { projects: Project[] }) {
  const [first, second, third, fourth] = projects;

  return (
    <section className="mb-g" aria-labelledby="featured-projects-heading">
      {/* Header row — desktop only */}
      <div className="row mb-g-half hidden items-end lg:grid">
        <h2
          id="featured-projects-heading"
          className="col-d text-h4 font-normal text-grey-500"
          style={{ ["--dc" as string]: "main-start / 8" }}
        >
          Projects
        </h2>

        <div
          className="col-d flex justify-end"
          style={{ ["--dc" as string]: "20 / main-end" }}
        >
          <ArrowLink href="/projects" spread>
            All projects
          </ArrowLink>
        </div>
      </div>

      {/* Header row — mobile only */}
      <div className="row mb-g-half lg:hidden">
        <h2 className="col-main text-h4 font-normal text-grey-500">Projects</h2>
      </div>

      {/* Cards */}
      <div className="row">
        <div className="col-main flex flex-col gap-y-[15rem]">
          <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:gap-x-10">
            <Reveal
              className="batch-item"
              style={{ ["--item-column" as string]: "1 / span 1" }}
            >
              <ProjectCard project={first} priority />
            </Reveal>
            <Reveal
              delay={0.08}
              className="batch-item"
              style={{ ["--item-column" as string]: "2 / span 2" }}
            >
              <ProjectCard project={second} />
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:gap-x-10">
            <Reveal
              className="batch-item"
              style={{ ["--item-column" as string]: "1 / span 1" }}
            >
              <ProjectCard project={third} />
            </Reveal>
            <Reveal
              delay={0.08}
              className="batch-item"
              style={{ ["--item-column" as string]: "3 / span 1" }}
            >
              <ProjectCard project={fourth} />
            </Reveal>
          </div>
        </div>
      </div>

      {/* Footer row — mobile only */}
      <div className="row mt-g lg:hidden">
        <div className="col-main">
          <ArrowLink href="/projects" spread>
            All projects
          </ArrowLink>
        </div>
      </div>
    </section>
  );
}
