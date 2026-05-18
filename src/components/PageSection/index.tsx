import { Card, Space, Typography } from "antd";
import type { PropsWithChildren } from "react";
import { getSectionGap } from "./utils";
import styles from "./styles.module.css";

type PageSectionProps = PropsWithChildren<{
  title: string;
  subtitle: string;
  gap?: number;
}>;

export function PageSection({ title, subtitle, children, gap }: PageSectionProps) {
  return (
    <Card className={styles.card}>
      <Space direction="vertical" size={getSectionGap(gap)}>
        <Typography.Title level={2} className={styles.title}>
          {title}
        </Typography.Title>
        <Typography.Paragraph type="secondary" className={styles.subtitle}>
          {subtitle}
        </Typography.Paragraph>
        {children}
      </Space>
    </Card>
  );
}
