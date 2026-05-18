import { useState } from "react";
import { Button, Input, Typography, Card, Space, Tabs, Empty } from "antd";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { sendMessageToGemini } from "../../api/gemini";
import { CV_PROMPT } from "../../constants/cvPrompt";
import { PageFrame } from "../../components/PageFrame";
import { CV_STORAGE_KEY, PAGE_TITLE } from "./consts";
import { buildCopyText } from "./utils";
import styles from "./styles.module.css";

const { TextArea } = Input;

export function CVGeneratorPage() {
  const navigate = useNavigate();
  const [userCV, setUserCV] = useState(CV_PROMPT);
  const [jobDescription, setJobDescription] = useState("");
  const [improvedCV, setImprovedCV] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!userCV.trim()) return;

    setLoading(true);
    try {
      const res = await sendMessageToGemini({
        userCV,
        jobDescription,
      });

      setImprovedCV(res.improvedCV);
      setCoverLetter(res.coverLetter);

      if (res.improvedCV.trim()) {
        localStorage.setItem(CV_STORAGE_KEY, res.improvedCV);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const hasResults = Boolean(improvedCV || coverLetter);

  return (
    <PageFrame>
      <div className={styles.pageContent}>
      <Typography.Title level={2} className={styles.pageTitle}>
        {PAGE_TITLE}
      </Typography.Title>

      <Typography.Title level={5}>CV Input</Typography.Title>
      <TextArea
        rows={10}
        value={userCV}
        onChange={(e) => setUserCV(e.target.value)}
        placeholder="Paste your CV in plain text or markdown"
      />

      <Typography.Title level={5} className={styles.sectionTitle}>
        Job Description Input
      </Typography.Title>
      <TextArea
        rows={8}
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        placeholder="Paste the target job description (optional)"
      />

      <Button
        type="primary"
        onClick={handleGenerate}
        loading={loading}
        className={styles.generateButton}
        disabled={!userCV.trim()}
      >
        Generate
      </Button>

      {hasResults && (
        <Card className={styles.resultsCard}>
          <Tabs
            items={[
              {
                key: "improved-cv",
                label: "Improved CV",
                children: improvedCV ? (
                  <div className="markdown">
                    <ReactMarkdown>{improvedCV}</ReactMarkdown>
                  </div>
                ) : (
                  <Empty description="No improved CV generated yet" />
                ),
              },
              {
                key: "cover-letter",
                label: "Cover Letter",
                children: coverLetter ? (
                  <div className="markdown">
                    <ReactMarkdown>{coverLetter}</ReactMarkdown>
                  </div>
                ) : (
                  <Empty description="No cover letter generated yet" />
                ),
              },
            ]}
          />

          <Space className={styles.actions}>
            <Button
              onClick={() => localStorage.setItem(CV_STORAGE_KEY, improvedCV)}
              disabled={!improvedCV.trim()}
            >
              Save CV
            </Button>

            <Button
              onClick={() => navigator.clipboard.writeText(buildCopyText(improvedCV, coverLetter))}
              disabled={!improvedCV.trim() && !coverLetter.trim()}
            >
              Copy Result
            </Button>

            <Button type="primary" onClick={() => navigate("/cv")} disabled={!improvedCV.trim()}>
              View CV
            </Button>
          </Space>
        </Card>
      )}
      </div>
    </PageFrame>
  );
}
