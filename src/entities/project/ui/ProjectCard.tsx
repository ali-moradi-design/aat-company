import Image from "next/image";
import Link from "next/link";
import { AspectRatioBox } from "@/shared/ui/AspectRatioBox";
import { cn } from "@/shared/lib/cn";
import type { Project } from "@/entities/project/model/types";

export function ProjectCard({
  project,
  className,
  priority = false,
  sizes = "(min-width: 1024px) 33vw, 100vw",
}: {
  project: Project;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn("project-card focus-ring group block", className)}
    >
      <figure className="project-card__figure relative m-0 w-full overflow-hidden">
        <AspectRatioBox ratio={project.ratio}>
          <Image
            src={project.image}
            alt={project.alt}
            fill
            priority={priority}
            sizes={sizes}
            className="object-cover transition-transform duration-[1.5s] ease-in-out group-hover:scale-[1.05] group-focus-visible:scale-[1.05]"
          />
        </AspectRatioBox>
      </figure>

      <div className="project-card__footer flex flex-col items-start gap-4 pt-6">
        <span className="project-card__heading text-20 leading-30 text-black-500">
          {project.title}
        </span>
        <span className="project-card__category text-20 leading-30 text-grey-500">
          {project.category}
        </span>
      </div>
    </Link>
  );
}
