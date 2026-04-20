import { Button, Form, Input } from "antd";
import { PageSection } from "../components/PageSection";

export function ContactPage() {
  return (
    <PageSection title="Contact" subtitle="Add your email, social links, and contact form flow.">
      <Form layout="vertical" style={{ maxWidth: 560 }}>
        <Form.Item label="Name" name="name" rules={[{ required: true, message: "Please enter your name" }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Email" name="email" rules={[{ required: true, message: "Please enter your email" }]}>
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
  );
}
