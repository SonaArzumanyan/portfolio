export type ExperienceCard = {
  id: string;
  title: string;
  period: string;
  description: string;
  visualClass: string;
};

export type PhilosophyBlock = {
  id: string;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  wide?: boolean;
};

export const PAGE_TITLE = "From Theory to Scale.";
export const PAGE_SUBTITLE =
  "A non-linear journey from economic foundations and organizational logic to human-centric software architecture.";

export const EXPERIENCE_CARDS: ExperienceCard[] = [
  {
    id: "epam",
    title: "EPAM Systems",
    period: "2021 — Present",
    description:
      "Leading frontend delivery for enterprise platforms—performance budgets, design systems, and cross-team technical alignment.",
    visualClass: "experience-visual-epam",
  },
  {
    id: "pivot",
    title: "The Pivot to Craft",
    period: "2017 — 2021",
    description:
      "Transitioned from process optimization into hands-on engineering—React, APIs, and quality automation as core craft.",
    visualClass: "experience-visual-pivot",
  },
  {
    id: "hr",
    title: "Human Capital Strategy",
    period: "2015 — 2017",
    description:
      "Built operational frameworks for talent and workforce planning—foundation for human-centric product thinking.",
    visualClass: "experience-visual-hr",
  },
];

export const PHILOSOPHY_BLOCKS: PhilosophyBlock[] = [
  {
    id: "cognitive",
    title: "Cognitive Synthesis",
    description:
      "Merging human psychology with software architecture—every interface decision balances clarity, speed, and trust.",
    stat: "20",
    statLabel: "Years of growth mindset",
  },
  {
    id: "future",
    title: "Refining the Future",
    description:
      "Bridging design vision and engineering execution so teams ship coherent products at scale.",
    stat: "3",
    statLabel: "Core principles: clarity, quality, velocity",
    wide: true,
  },
];
