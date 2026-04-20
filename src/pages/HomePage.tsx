import { Button, Space, Typography } from "antd";
import { PageSection } from "../components/PageSection";

export function HomePage() {
  return (
    <PageSection
      title="Hi, I am Sona"
      subtitle="Frontend developer building modern and clean user interfaces."
    >
      <Typography.Paragraph>
        Replace this content with your intro, skills snapshot, and current role details.
      </Typography.Paragraph>
      <Space>
        <Button type="primary">View Projects</Button>
        <Button>Download CV</Button>
      </Space>
    </PageSection>
  );
}
