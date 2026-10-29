import { ProjectBatches } from "@/entities/project/ui/ProjectBatches";
import type { Project } from "@/entities/project/model/types";

/**
 * "More inspiration" strip at the foot of a project page: two cards in the
 * reference's gutter-separated portrait pair.
 */
export function RelatedProjects({
  heading,
  projects,
}: {
  heading: string;
  projects: Project[];
}) {
  return (
    <section className="mb-g" aria-labelledby="related-projects-heading">
      <div className="row mb-g-half">
        <h2
          id="related-projects-heading"
          className="col-d m-0 text-h4 font-normal text-grey-500"
          style={{ ["--dc" as string]: "main-start / 8" }}
        >
          {heading}
        </h2>
      </div>

      <div className="row">
        <div className="col-main">
          <ProjectBatches batches={[{ variant: "p-gap-p", items: projects }]} />
        </div>
      </div>
    </section>
  );
}
