import { Card, Space, Typography } from "antd";
import type { PropsWithChildren } from "react";

type PageSectionProps = PropsWithChildren<{
  title: string;
  subtitle: string;
}>;

export function PageSection({ title, subtitle, children }: PageSectionProps) {
  return (
    <Card>
      <Space direction="vertical" size={8}>
        <Typography.Title level={2} style={{ marginBottom: 0 }}>
          {title}
        </Typography.Title>
        <Typography.Paragraph type="secondary" style={{ marginBottom: 0 }}>
          {subtitle}
        </Typography.Paragraph>
        {children}
      </Space>
    </Card>
  );
}
