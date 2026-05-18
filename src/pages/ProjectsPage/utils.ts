import type { Project, ProjectCategory } from "../../data/projects";

export function filterProjectsByCategory(
  projects: Project[],
  category: ProjectCategory,
): Project[] {
  if (category === "all") {
    return projects;
  }
  return projects.filter((project) => project.category === category);
}

export function getProjectCardClassName(
  baseClass: string,
  largeClass: string,
  size?: Project["size"],
): string {
  return size === "large" ? `${baseClass} ${largeClass}` : baseClass;
}
