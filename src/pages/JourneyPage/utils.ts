export function getPhilosophyCardClassName(baseClass: string, wide?: boolean): string {
  return wide ? `${baseClass} philosophy-card-wide` : baseClass;
}
