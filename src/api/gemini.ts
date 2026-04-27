import axios from "axios";
import {
  GEMINI_BASE_URL,
  GEMINI_MODEL,
  GEMINI_API_KEY,
} from "./config";
import { GeminiGenerateContentResponse } from "./types";

export const sendMessageToGemini = async (
  message: string
): Promise<string> => {
  const url = `${GEMINI_BASE_URL}/models/${GEMINI_MODEL}:generateContent`;

  const payload = {
    contents: [
      {
        parts: [{ text: message }],
      },
    ],
  };

  try {
    const response = await axios.post<GeminiGenerateContentResponse>(
      url,
      payload,
      {
        params: {
          key: GEMINI_API_KEY,
        },
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const text =
      response.data.candidates?.[0]?.content?.parts?.[0]?.text;

    return text || "";
  } catch (error: any) {
    console.error(
      "Gemini API Error:",
      error?.response?.data?.error?.message || error.message
    );

    return "Something went wrong. Please try again.";
  }
};