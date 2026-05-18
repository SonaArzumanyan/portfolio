export type ProjectCategory = "all" | "platform" | "architecture" | "web" | "rnd";

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: Exclude<ProjectCategory, "all">;
  demoUrl?: string;
  repoUrl?: string;
  featured?: boolean;
  size?: "large" | "medium";
};

export const PROJECT_CATEGORIES: { id: ProjectCategory; label: string }[] = [
  { id: "all", label: "All Projects" },
  { id: "platform", label: "Platforms" },
  { id: "architecture", label: "Architecture" },
  { id: "web", label: "Web" },
  { id: "rnd", label: "R&D" },
];

export const PROJECTS: Project[] = [
  {
    id: "omni-compute",
    title: "OmniCompute Engine",
    description: "High-throughput data pipeline with real-time dashboards and observability hooks.",
    tags: ["React", "Node.js", "PostgreSQL"],
    category: "platform",
    featured: true,
    size: "large",
  },
  {
    id: "neural-analytics",
    title: "Neural Analytics",
    description: "Visualization layer for model metrics and experiment comparison.",
    tags: ["TypeScript", "D3", "API"],
    category: "rnd",
    featured: true,
    size: "medium",
  },
  {
    id: "atlas-crm",
    title: "Atlas CRM",
    description: "Modular CRM surfaces with role-based views and workflow automation.",
    tags: ["React", "REST", "Auth"],
    category: "web",
    featured: true,
    size: "medium",
  },
  {
    id: "prism-render",
    title: "Prism Render Core",
    description: "Rendering service abstraction for consistent UI performance budgets.",
    tags: ["Architecture", "Performance"],
    category: "architecture",
    featured: true,
    size: "medium",
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    description: "Personal site with React, TypeScript, and AI-assisted CV tooling.",
    tags: ["React", "TypeScript", "Vite"],
    category: "web",
  },
  {
    id: "habit-tracker",
    title: "Full-Stack Habit Tracker",
    description: "CRUD app with Node.js and MySQL focused on schema design and API performance.",
    tags: ["Node.js", "MySQL"],
    category: "platform",
  },
  {
    id: "automation-suite",
    title: "Automation Test Suite",
    description: "Playwright E2E framework with CI integration for enterprise web apps.",
    tags: ["Playwright", "CI/CD"],
    category: "architecture",
  },
  {
    id: "pm-dashboard",
    title: "Project Management Dashboard",
    description: "Sprint planning dashboard aligned with Agile delivery workflows.",
    tags: ["React", "Agile"],
    category: "web",
  },
];

export const DEV_INSIGHTS = [
  { id: "commits", value: "1.8k+", label: "Commits" },
  { id: "performance", value: "98/100", label: "Performance" },
  { id: "projects", value: "14", label: "Projects" },
  { id: "runtimes", value: "8", label: "Custom Runtimes" },
] as const;
