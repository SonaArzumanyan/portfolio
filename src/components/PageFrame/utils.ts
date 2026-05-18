export function getPageFrameClassName(baseClass: string, extraClass?: string): string {
  return extraClass ? `${baseClass} ${extraClass}` : baseClass;
}
