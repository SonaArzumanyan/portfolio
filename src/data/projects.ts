export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: "portfolio",
    title: "Portfolio Website",
    description:
      "Personal branding site with React, TypeScript, and a dark engineering aesthetic. Includes AI-assisted CV tooling.",
    tags: ["React", "TypeScript", "Vite"],
    featured: true,
  },
  {
    id: "habit-tracker",
    title: "Full-Stack Habit Tracker",
    description:
      "CRUD application with Node.js and MySQL, focusing on database schema optimization and API performance.",
    tags: ["Node.js", "MySQL", "REST"],
    featured: true,
  },
  {
    id: "automation-suite",
    title: "Automation Test Suite",
    description:
      "End-to-end testing framework using Playwright for enterprise web applications with CI integration.",
    tags: ["Playwright", "TypeScript", "CI/CD"],
    featured: true,
  },
  {
    id: "pm-dashboard",
    title: "Project Management Dashboard",
    description:
      "Dashboard for organizing development sprints and tracking deliverables using Agile workflows.",
    tags: ["React", "Agile", "Jira"],
    featured: true,
  },
  {
    id: "admin-dashboard",
    title: "Admin Dashboard UI",
    description: "Admin dashboard with charts, authentication, and role-based access control.",
    tags: ["React", "Ant Design", "REST API"],
  },
];
