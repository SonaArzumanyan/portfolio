import { getDisplayCv, loadSavedCv } from "../../utils/cvStorage";

export function loadCvForDisplay(): string {
  return getDisplayCv();
}

export function isUsingSavedCv(): boolean {
  return loadSavedCv().trim().length > 0;
}
