import {
  getGeminiErrorMessage,
  type GeminiCareerResponse,
} from "../../api/gemini";

export function buildCopyText(improvedCv: string, coverLetter: string): string {
  return [improvedCv, coverLetter].filter(Boolean).join("\n\n");
}

export type GenerateCareerResult =
  | { ok: true; improvedCV: string; coverLetter: string }
  | { ok: false; message: string };

export function parseCareerGenerationResponse(
  response: GeminiCareerResponse
): GenerateCareerResult {
  const errorMessage = getGeminiErrorMessage(response);
  if (errorMessage) {
    return { ok: false, message: errorMessage };
  }

  if (!response.improvedCV.trim()) {
    return { ok: false, message: "Gemini returned an empty CV." };
  }

  if (!response.coverLetter.trim()) {
    return { ok: false, message: "Gemini returned an empty cover letter." };
  }

  return {
    ok: true,
    improvedCV: response.improvedCV,
    coverLetter: response.coverLetter,
  };
}
