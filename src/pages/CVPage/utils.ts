export function loadCvFromStorage(key: string): string {
  return localStorage.getItem(key) ?? "";
}
