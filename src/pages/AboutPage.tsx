import { Descriptions } from "antd";
import { PageSection } from "../components/PageSection";

export function AboutPage() {
  return (
    <PageSection title="About" subtitle="Share your experience, strengths, and work style.">
      <Descriptions
        column={1}
        items={[
          { key: "role", label: "Role", children: "Frontend Developer" },
          { key: "experience", label: "Experience", children: "Add your years of experience" },
          { key: "focus", label: "Focus", children: "React, TypeScript, design systems" },
          { key: "location", label: "Location", children: "Add your location" },
        ]}
      />
    </PageSection>
  );
}
