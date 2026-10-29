import type { Metadata } from "next";
import { ProjectsList } from "@/widgets/projects-list/ui/ProjectsList";
import { projects } from "@/entities/project/model/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "An overview of projects by AAT|Architecten: public buildings, schools, businesses and homes.",
};

export default function ProjectsPage() {
  return <ProjectsList projects={projects} />;
}
