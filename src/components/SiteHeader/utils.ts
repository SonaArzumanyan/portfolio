export function getHeaderLinkClassName(isActive: boolean, baseClass: string, activeClass: string): string {
  return isActive ? `${baseClass} ${activeClass}` : baseClass;
}
