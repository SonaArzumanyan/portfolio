import axios from "axios";
import {
  GEMINI_BASE_URL,
  GEMINI_MODEL,
  GEMINI_API_KEY,
} from "./config";
import { GeminiGenerateContentResponse } from "./types";
import SKILLS_MD from "../prompts/skills.md?raw";
import RULES_MD from "../prompts/skillsRules.md?raw";

export type GeminiCareerResponse = {
  raw: string;
  improvedCV: string;
  coverLetter: string;
};

const parseCareerResponse = (text: string): GeminiCareerResponse => {
  const improvedMarker = "## Improved CV";
  const coverMarker = "## Cover Letter";

  const improvedStart = text.indexOf(improvedMarker);
  const coverStart = text.indexOf(coverMarker);

  if (improvedStart === -1 || coverStart === -1 || coverStart <= improvedStart) {
    return {
      raw: text,
      improvedCV: text,
      coverLetter: "",
    };
  }

  const improvedCV = text
    .slice(improvedStart + improvedMarker.length, coverStart)
    .trim();
  const coverLetter = text.slice(coverStart + coverMarker.length).trim();

  return {
    raw: text,
    improvedCV,
    coverLetter,
  };
};

const buildCareerPrompt = (userCV: string, jobDescription?: string): string => `
${SKILLS_MD}

${RULES_MD}

TASK:
Improve the following CV and generate a tailored cover letter.

CV:
${userCV}

JOB DESCRIPTION:
${jobDescription?.trim() ? jobDescription : "Not provided. Generate a strong general-purpose frontend CV and cover letter."}

OUTPUT FORMAT (STRICT):
## Improved CV
[markdown content]

## Cover Letter
[markdown content]
`;

export const sendMessageToGemini = async ({
  userCV,
  jobDescription,
}: {
  userCV: string;
  jobDescription?: string;
}): Promise<GeminiCareerResponse> => {
  if (!GEMINI_API_KEY) {
    const missingKeyMessage =
      "Gemini API key is missing. Set VITE_GEMINI_API_KEY in your environment and redeploy.";
    return {
      raw: missingKeyMessage,
      improvedCV: missingKeyMessage,
      coverLetter: "",
    };
  }

  const message = buildCareerPrompt(userCV, jobDescription);
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

    return parseCareerResponse(text || "");
  } catch (error: unknown) {
    let errorMessage = "Unknown error";

    if (axios.isAxiosError(error)) {
      errorMessage =
        (error.response?.data as { error?: { message?: string } })?.error
          ?.message || error.message;
    } else if (error instanceof Error) {
      errorMessage = error.message;
    }

    console.error("Gemini API Error:", errorMessage);

    const fallback = `Gemini request failed: ${errorMessage}`;
    return {
      raw: fallback,
      improvedCV: fallback,
      coverLetter: "",
    };
  }
};