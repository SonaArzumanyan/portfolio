import { useState } from "react";
import { Button, Input, Typography, Card, Space, Tabs } from "antd";
import { sendMessageToGemini } from "../api/gemini";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Empty } from "antd";
import { CV_PROMPT } from "../constants/cvPrompt";

const { TextArea } = Input;

export const CVGeneratorPage = () => {
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
        localStorage.setItem("cv_markdown", res.improvedCV);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const hasResults = Boolean(improvedCV || coverLetter);

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 24 }}>
      <Typography.Title level={2}>
        AI CV Generator
      </Typography.Title>

      <Typography.Title level={5}>CV Input</Typography.Title>
      <TextArea
        rows={10}
        value={userCV}
        onChange={(e) => setUserCV(e.target.value)}
        placeholder="Paste your CV in plain text or markdown"
      />

      <Typography.Title level={5} style={{ marginTop: 16 }}>
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
        style={{ marginTop: 12 }}
        disabled={!userCV.trim()}
      >
        Generate
      </Button>

      {hasResults && (
        <Card style={{ marginTop: 24 }}>
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

          <Space style={{ marginTop: 8 }}>
            <Button
              onClick={() =>
                localStorage.setItem("cv_markdown", improvedCV)
              }
              disabled={!improvedCV.trim()}
            >
              Save CV
            </Button>

            <Button
              onClick={() =>
                navigator.clipboard.writeText(
                  [improvedCV, coverLetter].filter(Boolean).join("\n\n")
                )
              }
              disabled={!improvedCV.trim() && !coverLetter.trim()}
            >
              Copy Result
            </Button>

            <Button
              type="primary"
              onClick={() => navigate("/cv")}
              disabled={!improvedCV.trim()}
            >
              View CV
            </Button>
          </Space>
        </Card>
      )}
    </div>
  );
};