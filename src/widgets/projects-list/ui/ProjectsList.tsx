"use client";

import { useMemo, useState } from "react";
import {
  batchWithSequence,
  buildBatches,
  REFERENCE_BATCH_SEQUENCE,
} from "@/entities/project/model/batch";
import type { Project, ProjectCategory } from "@/entities/project/model/types";
import { ProjectBatches } from "@/entities/project/ui/ProjectBatches";
import { ProjectFilters } from "@/features/project-filter/ui/ProjectFilters";
import { SplitHeading } from "@/features/reveal/ui/SplitHeading";

const HEADING = "An overview of projects that start from the space within.";

/**
 * The projects page: heading, category filter, and the batch grid. Client-side
 * state drives the filter — no query string — so the page stays static.
 */
export function ProjectsList({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<ProjectCategory[]>([]);

  const filtered = useMemo(
    () =>
      active.length === 0
        ? projects
        : projects.filter((project) => active.includes(project.category)),
    [active, projects],
  );

  const batches = useMemo(
    () =>
      active.length === 0
        ? batchWithSequence(filtered, REFERENCE_BATCH_SEQUENCE)
        : buildBatches(filtered),
    [active.length, filtered],
  );

  return (
    <section aria-labelledby="projects-heading">
      <div className="row project-items__row">
        <SplitHeading as="h1" id="projects-heading" className="project-items__heading">
          {HEADING}
        </SplitHeading>

        <div className="project-items__inner--filters">
          <ProjectFilters active={active} onChange={setActive} />
        </div>
      </div>

      <div className="row">
        <div className="col-main project-items__list-wrapper">
          <div className="project-items__list" aria-live="polite">
            <ProjectBatches batches={batches} />
          </div>
        </div>
      </div>
    </section>
  );
}
