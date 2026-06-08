import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider, theme } from "antd";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/global.css";
import "./styles/markdown.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: "#2bcfff",
          colorText: "#e8f0ff",
          colorTextSecondary: "#c5daf5",
          colorTextTertiary: "#a8c4ea",
          colorTextQuaternary: "#8fb3e8",
          colorBgContainer: "rgba(4, 20, 62, 0.95)",
          colorBgElevated: "rgba(8, 24, 58, 0.98)",
          colorBgLayout: "#050d29",
          colorBorder: "rgba(96, 145, 218, 0.45)",
          colorBorderSecondary: "rgba(78, 128, 201, 0.3)",
          colorLink: "#7cc4ff",
          colorLinkHover: "#a8dcff",
          borderRadius: 10,
        },
        components: {
          Alert: {
            colorInfoBg: "rgba(36, 116, 199, 0.22)",
            colorInfoBorder: "rgba(76, 201, 240, 0.5)",
            colorErrorBg: "rgba(120, 32, 48, 0.35)",
            colorErrorBorder: "rgba(255, 120, 140, 0.45)",
          },
          Input: {
            colorBgContainer: "rgba(5, 20, 54, 0.9)",
            colorText: "#e8f0ff",
            colorTextPlaceholder: "rgba(168, 196, 234, 0.8)",
          },
          Card: {
            colorBgContainer: "rgba(4, 20, 62, 0.95)",
          },
          Tabs: {
            colorText: "#c5daf5",
            colorTextDescription: "#a8c4ea",
          },
          Button: {
            colorText: "#e8f0ff",
            defaultColor: "#e8f0ff",
            defaultBg: "rgba(34, 66, 121, 0.45)",
            defaultBorderColor: "rgba(96, 145, 218, 0.5)",
          },
          Form: {
            labelColor: "#c5daf5",
          },
          Empty: {
            colorTextDescription: "#a8c4ea",
          },
        },
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>,
);
