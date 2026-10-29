import { ProjectCard } from "@/entities/project/ui/ProjectCard";
import {
  BATCH_ITEM_COLUMNS,
  type ProjectBatch,
} from "@/entities/project/model/batch";
import { Reveal } from "@/features/reveal/ui/Reveal";
import { cn } from "@/shared/lib/cn";

/**
 * Renders a list of project batches as the reference site's 3-column grid.
 * Each batch is its own grid row-set; the per-item column comes from
 * `--item-column`, which only applies at the desktop breakpoint. Cards fade in
 * eight hundredths of a second apart as they reach the lower fifth of the
 * viewport, matching the reference's reveal group.
 */
export function ProjectBatches({
  batches,
  className,
}: {
  batches: ProjectBatch[];
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-y-[15rem]", className)}>
      {batches.map((batch, batchIndex) => (
        <div
          key={`${batch.variant}-${batchIndex}`}
          className="grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-0"
        >
          {batch.items.map((project, itemIndex) => (
            <Reveal
              key={project.slug}
              className="batch-item"
              delay={itemIndex * 0.08}
              style={{
                ["--item-column" as string]:
                  BATCH_ITEM_COLUMNS[batch.variant][itemIndex + 1],
              }}
            >
              <ProjectCard
                project={project}
                priority={batchIndex === 0 && itemIndex === 0}
              />
            </Reveal>
          ))}
        </div>
      ))}
    </div>
  );
}
