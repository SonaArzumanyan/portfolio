import { useState } from "react";
import { Alert, Button, Input, Typography, Card, Space, Tabs, Empty, message } from "antd";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { sendMessageToGemini } from "../../api/gemini";
import { PageFrame } from "../../components/PageFrame";
import { getDisplayCv, saveCv } from "../../utils/cvStorage";
import { PAGE_TITLE } from "./consts";
import { buildCopyText, parseCareerGenerationResponse } from "./utils";
import styles from "./styles.module.css";

const { TextArea } = Input;

export function CVGeneratorPage() {
  const navigate = useNavigate();
  const [userCV, setUserCV] = useState(getDisplayCv);
  const [jobDescription, setJobDescription] = useState("");
  const [improvedCV, setImprovedCV] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const canGenerate = Boolean(userCV.trim() && jobDescription.trim());

  const handleGenerate = async () => {
    if (!canGenerate) return;

    setLoading(true);
    setError("");

    try {
      const response = await sendMessageToGemini({
        userCV,
        jobDescription,
      });
      const result = parseCareerGenerationResponse(response);

      if (!result.ok) {
        setError(result.message);
        return;
      }

      setImprovedCV(result.improvedCV);
      setCoverLetter(result.coverLetter);
    } catch (generateError) {
      const errorMessage =
        generateError instanceof Error
          ? generateError.message
          : "Failed to generate CV and cover letter.";
      setError(errorMessage);
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
        placeholder="Paste the target job description (required)"
      />

      <Button
        type="primary"
        onClick={handleGenerate}
        loading={loading}
        className={styles.generateButton}
        disabled={!canGenerate}
      >
        Generate CV & Cover Letter
      </Button>

      {error && (
        <Alert type="error" message={error} showIcon className={styles.errorAlert} />
      )}

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
              onClick={() => {
                saveCv(improvedCV);
                message.success("CV saved for the Resume page.");
              }}
              disabled={!improvedCV.trim()}
            >
              Save CV
            </Button>

            <Button
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(
                    buildCopyText(improvedCV, coverLetter)
                  );
                  message.success("Results copied to clipboard.");
                } catch {
                  message.error("Could not copy results to clipboard.");
                }
              }}
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
