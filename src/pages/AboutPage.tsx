import { Descriptions } from "antd";
import { PageSection } from "../components/PageSection";
import { PageShell } from "../components/PageShell";

export function AboutPage() {
  return (
    <PageShell>
      <PageSection
        title="About"
        subtitle="Full-stack development with a strong focus on quality through automation."
      >
        <Descriptions
          column={1}
          items={[
            {
              key: "role",
              label: "Role",
              children: "Full-Stack & QA Automation Engineer",
            },
            {
              key: "experience",
              label: "Experience",
              children: "Building web apps, APIs, and test automation for production teams",
            },
            {
              key: "focus",
              label: "Focus",
              children: "React, TypeScript, Node.js, Playwright, Agile delivery",
            },
            {
              key: "location",
              label: "Location",
              children: "Available for remote collaboration",
            },
          ]}
        />
      </PageSection>
    </PageShell>
  );
}
