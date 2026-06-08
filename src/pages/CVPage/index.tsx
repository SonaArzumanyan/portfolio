import ReactMarkdown from "react-markdown";
import { useCallback, useEffect, useState } from "react";
import { Alert, Button, Space, Typography, message } from "antd";
import { Link } from "react-router-dom";
import { PageFrame } from "../../components/PageFrame";
import { CV_GENERATOR_PATH, PAGE_TITLE } from "./consts";
import { isUsingSavedCv, loadCvForDisplay } from "./utils";
import styles from "./styles.module.css";

export function CVPage() {
  const [cv, setCv] = useState("");
  const [isSavedVersion, setIsSavedVersion] = useState(false);

  useEffect(() => {
    setCv(loadCvForDisplay());
    setIsSavedVersion(isUsingSavedCv());
  }, []);

  const handleCopy = useCallback(async () => {
    if (!cv.trim()) return;

    try {
      await navigator.clipboard.writeText(cv);
      message.success("CV copied to clipboard.");
    } catch {
      message.error("Could not copy CV to clipboard.");
    }
  }, [cv]);

  return (
    <PageFrame>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <Typography.Title className={styles.title}>{PAGE_TITLE}</Typography.Title>

          <Space wrap className={styles.actions}>
            <Button type="primary" onClick={handleCopy} disabled={!cv.trim()}>
              Copy
            </Button>
            <Link to={CV_GENERATOR_PATH}>
              <Button>Tailor for a Job</Button>
            </Link>
          </Space>
        </div>

        {!isSavedVersion && (
          <Alert
            type="info"
            message="Showing your source CV from src/data/cv.ts. Generate a tailored CV and cover letter on the job page, or edit the source file directly."
            showIcon
            className={styles.alert}
          />
        )}

        {cv ? (
          <div className="markdown">
            <ReactMarkdown>{cv}</ReactMarkdown>
          </div>
        ) : (
          <Typography.Paragraph type="secondary">
            No CV content available. Add your CV in src/data/cv.ts or use the generator.
          </Typography.Paragraph>
        )}
      </div>
    </PageFrame>
  );
}
