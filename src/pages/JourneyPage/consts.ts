export type JourneyEntry = {
  id: string;
  period: string;
  title: string;
  organization: string;
  description: string;
  type: "work" | "education" | "certification";
};

export const JOURNEY_ENTRIES: JourneyEntry[] = [
  {
    id: "role-current",
    period: "2024 — Present",
    title: "Full-Stack & QA Automation Engineer",
    organization: "Freelance / Personal Projects",
    description:
      "Building React frontends, Node.js APIs, and Playwright-based test automation with a focus on reliable delivery.",
    type: "work",
  },
  {
    id: "role-qa",
    period: "2022 — 2024",
    title: "QA Automation Specialist",
    organization: "Software Teams",
    description:
      "Designed E2E suites, API checks, and CI pipelines to catch regressions early across web products.",
    type: "work",
  },
  {
    id: "edu-degree",
    period: "2018 — 2022",
    title: "Computer Science & Engineering",
    organization: "University",
    description:
      "Coursework in algorithms, databases, software design, and web development fundamentals.",
    type: "education",
  },
  {
    id: "cert-playwright",
    period: "2023",
    title: "Test Automation with Playwright",
    organization: "Professional Development",
    description: "Advanced patterns for stable selectors, parallel runs, and reporting in CI.",
    type: "certification",
  },
];

export const PAGE_TITLE = "Journey";
export const PAGE_SUBTITLE = "Roles, education, and certifications that shaped my engineering path.";
