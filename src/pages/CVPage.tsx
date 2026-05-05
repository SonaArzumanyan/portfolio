import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import { Typography, Empty } from "antd";

export const CVPage = () => {
  const [cv, setCv] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("cv_markdown");

    if (saved) {
      setCv(saved);
    }
  }, []);

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 24 }}>
      <Typography.Title>My CV</Typography.Title>

      {cv ? (
        <div className="markdown">
          <ReactMarkdown>{cv}</ReactMarkdown>
        </div>
      ) : (
        <Empty description="No CV generated yet" />
      )}
    </div>
  );
};