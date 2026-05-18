import type { JourneyEntry } from "./consts";

const TYPE_LABELS: Record<JourneyEntry["type"], string> = {
  work: "Experience",
  education: "Education",
  certification: "Certification",
};

export function getJourneyTypeLabel(type: JourneyEntry["type"]): string {
  return TYPE_LABELS[type];
}
