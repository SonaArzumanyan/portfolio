export function buildCopyText(improvedCv: string, coverLetter: string): string {
  return [improvedCv, coverLetter].filter(Boolean).join("\n\n");
}
