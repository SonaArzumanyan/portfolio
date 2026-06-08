import { RAW_CV } from "../data/cv";

export const CV_STORAGE_KEY = "cv_markdown";

export function loadSavedCv(): string {
  return localStorage.getItem(CV_STORAGE_KEY) ?? "";
}

export function saveCv(cv: string): void {
  localStorage.setItem(CV_STORAGE_KEY, cv);
}

export function getFallbackCv(): string {
  return RAW_CV;
}

export function getDisplayCv(): string {
  const saved = loadSavedCv();
  return saved.trim() ? saved : RAW_CV;
}
