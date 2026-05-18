export type Skill = {
  id: string;
  label: string;
  percent: number;
};

export type EvolutionCard = {
  id: string;
  title: string;
  description: string;
};

export type TimelineEntry = {
  id: string;
  period: string;
  title: string;
  description: string;
};

export const PAGE_TITLE = "Engineering Human-Centric Technical Ecosystems";

export const PROFESSIONAL_BIO =
  "I connect economic thinking, organizational design, and software craft to build products that scale without losing clarity for the people who use them. My work spans React frontends, Node.js services, and automation that keeps releases predictable.";

export const SKILLS: Skill[] = [
  { id: "design", label: "Strategic Tech Design", percent: 95 },
  { id: "architecture", label: "Systems Architecture", percent: 90 },
  { id: "frontend", label: "Frontend Engineering", percent: 88 },
];

export const EVOLUTION_CARDS: EvolutionCard[] = [
  {
    id: "quant",
    title: "Quantitative Modeling",
    description: "Analytical foundations for trade-offs, capacity planning, and measurable outcomes.",
  },
  {
    id: "org",
    title: "Organizational Logic",
    description: "HR and operations experience informing team workflows and product priorities.",
  },
  {
    id: "fullstack",
    title: "Full-Stack Synthesis",
    description: "End-to-end delivery—UI, APIs, databases, and automated quality gates.",
  },
];

export const TIMELINE_ENTRIES: TimelineEntry[] = [
  {
    id: "catalyst",
    period: "2015 — 2018",
    title: "The Economic Catalyst",
    description: "Early career in analytics and workforce strategy shaping systems thinking.",
  },
  {
    id: "hr",
    period: "2018 — 2021",
    title: "Strategic HR Operations",
    description: "Operational leadership bridging people, process, and business goals.",
  },
  {
    id: "software",
    period: "2021 — Present",
    title: "Software Architecture",
    description: "Full-stack engineering with a test-first mindset and design-system discipline.",
  },
];

export const CLOSING_QUOTE =
  "I build for the human experience, backed by the logic of economic systems.";
