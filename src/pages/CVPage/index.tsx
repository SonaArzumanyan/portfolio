import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import { Typography, Empty } from "antd";
import { PageShell } from "../../components/PageShell";
import { CV_STORAGE_KEY, PAGE_TITLE } from "./consts";
import { loadCvFromStorage } from "./utils";
import styles from "./styles.module.css";

export function CVPage() {
  const [cv, setCv] = useState("");

  useEffect(() => {
    setCv(loadCvFromStorage(CV_STORAGE_KEY));
  }, []);

  return (
    <PageShell variant="narrow">
      <div className={styles.wrapper}>
        <Typography.Title>{PAGE_TITLE}</Typography.Title>

        {cv ? (
          <div className="markdown">
            <ReactMarkdown>{cv}</ReactMarkdown>
          </div>
        ) : (
          <Empty description="No CV generated yet" />
        )}
      </div>
    </PageShell>
  );
}
