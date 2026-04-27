import { useState } from "react";
import { Button, Input, Typography, Card } from "antd";
import { sendMessageToGemini } from "../api/gemini";
import { CV_PROMPT } from "../constants/cvPrompt";
import { Space } from "antd";
import { useNavigate } from "react-router-dom";

const { TextArea } = Input;

export const CVGeneratorPage = () => {
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState(CV_PROMPT);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    try{
    const res = await sendMessageToGemini(prompt);

    setResult(res);

    localStorage.setItem("cv_markdown", res);
    } catch(error) {
      console.error(error);
    }finally{
      setLoading(false);
    }
    };

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 24 }}>
      <Typography.Title level={2}>
        AI CV Generator
      </Typography.Title>

      <TextArea
        rows={8}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Paste your CV prompt here..."
      />

      <Button
        type="primary"
        onClick={handleGenerate}
        loading={loading}
        style={{ marginTop: 12 }}
      >
        Generate CV
      </Button>

          {result && (
      <Card style={{ marginTop: 24 }}>
        <pre style={{ whiteSpace: "pre-wrap" }}>
          {result}
        </pre>

        <Space style={{ marginTop: 16 }}>
          {/* Save */}
          <Button
            onClick={() =>
              localStorage.setItem("cv_markdown", result)
            }
          >
            Save CV
          </Button>

          {/* Copy */}
          <Button
            onClick={() =>
              navigator.clipboard.writeText(result)
            }
          >
            Copy CV
          </Button>

          {/* View */}
          <Button
            type="primary"
            onClick={() => navigate("/cv")}
          >
            View CV
          </Button>
        </Space>
      </Card>
    )}
    </div>
  );
};