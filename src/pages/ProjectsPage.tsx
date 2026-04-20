import { List, Tag, Typography } from "antd";
import { PageSection } from "../components/PageSection";

const sampleProjects = [
  {
    title: "Portfolio Website",
    description: "Personal branding site with blog and case studies.",
    tags: ["React", "TypeScript", "Antd"],
  },
  {
    title: "Dashboard UI",
    description: "Admin dashboard with charts, auth, and role management.",
    tags: ["React", "Vite", "REST API"],
  },
];

export function ProjectsPage() {
  return (
    <PageSection title="Projects" subtitle="Show your best practical frontend work here.">
      <List
        dataSource={sampleProjects}
        renderItem={(project) => (
          <List.Item>
            <List.Item.Meta
              title={project.title}
              description={
                <>
                  <Typography.Paragraph style={{ marginBottom: 8 }}>
                    {project.description}
                  </Typography.Paragraph>
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </>
              }
            />
          </List.Item>
        )}
      />
    </PageSection>
  );
}
