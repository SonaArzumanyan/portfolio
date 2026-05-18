export function hasRequiredFields(name: string, email: string, message: string): boolean {
  return Boolean(name.trim() && email.trim() && message.trim());
}
