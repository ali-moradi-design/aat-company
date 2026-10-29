import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getProjectBySlug, projects } from "@/entities/project/model/projects";
import { projectGalleries } from "@/entities/project/model/galleries";
import { HERO_RATIO } from "@/entities/project/model/types";
import { Reveal } from "@/features/reveal/ui/Reveal";
import { CTA } from "@/widgets/cta/ui/CTA";
import { ImageCredit } from "@/widgets/image-credit/ui/ImageCredit";
import { MediaColumns } from "@/widgets/media-columns/ui/MediaColumns";
import { ProjectIntro } from "@/widgets/project-intro/ui/ProjectIntro";
import { RelatedProjects } from "@/widgets/related-projects/ui/RelatedProjects";
import { StickyContact } from "@/widgets/sticky-contact/ui/StickyContact";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return { title: "Project not found" };

  return {
    title: project.title,
    description: project.description,
  };
}

/**
 * The route's URL data is read inside a Suspense boundary, so the shared shell
 * can render instantly and the project content streams in behind it.
 */
export default function ProjectPage({ params }: PageProps) {
  return (
    <Suspense fallback={<ProjectHeroFallback />}>
      <ProjectDetail params={params} />
    </Suspense>
  );
}

/** Keeps the hero's footprint while the project content resolves. */
function ProjectHeroFallback() {
  return (
    <section className="row project-intro-block mt-g-half mb-g" aria-busy>
      <div className="project-intro-block__media">
        <div
          className="aspect-ratio-box bg-grey-100"
          style={{ ["--ratio" as string]: String(HERO_RATIO) }}
        />
      </div>
    </section>
  );
}

async function ProjectDetail({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const index = projects.findIndex((item) => item.slug === project.slug);
  const rotate = (offset: number) =>
    projects[(index + offset + projects.length) % projects.length];

  const gallery = projectGalleries[project.slug] ?? [];
  const related = [rotate(1), rotate(2)];

  return (
    <>
      <Reveal>
        <ProjectIntro project={project} heroRatio={project.heroRatio} />
      </Reveal>

      <StickyContact />

      {gallery.map((block, blockIndex) => {
        const count = block.images.length;
        const sizes =
          count === 2
            ? "(min-width: 1024px) 30vw, 100vw"
            : block.portrait
              ? "(min-width: 1024px) 40vw, 100vw"
              : "(min-width: 1024px) 65vw, 100vw";

        return (
          <Reveal key={`${project.slug}-${blockIndex}`}>
            <MediaColumns
              images={block.images}
              portrait={block.portrait}
              sizes={sizes}
            />
          </Reveal>
        );
      })}

      {project.credit ? (
        <ImageCredit text={`Image: ${project.credit}`} />
      ) : null}

      <CTA
        heading="One point of contact, from first sketch to handover. Let's talk."
        linkLabel="Contact us"
      />

      <RelatedProjects heading="More inspiration" projects={related} />
    </>
  );
}
