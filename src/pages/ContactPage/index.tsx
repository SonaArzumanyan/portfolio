import { Button, Form, Input } from "antd";
import { PageSection } from "../../components/PageSection";
import { PageShell } from "../../components/PageShell";
import { PAGE_SUBTITLE, PAGE_TITLE } from "./consts";
import styles from "./styles.module.css";

export function ContactPage() {
  return (
    <PageShell>
      <PageSection title={PAGE_TITLE} subtitle={PAGE_SUBTITLE}>
        <Form layout="vertical" className={styles.form}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please enter your email" }]}
          >
            <Input type="email" />
          </Form.Item>
          <Form.Item
            label="Message"
            name="message"
            rules={[{ required: true, message: "Please enter your message" }]}
          >
            <Input.TextArea rows={5} />
          </Form.Item>
          <Button type="primary">Send Message</Button>
        </Form>
      </PageSection>
    </PageShell>
  );
}
