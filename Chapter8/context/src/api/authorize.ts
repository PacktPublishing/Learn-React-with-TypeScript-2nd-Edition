export function authorize(id: string): Promise<string[]> {
  return new Promise((resolve) => setTimeout(() => resolve(['admin']), 1000));
}
