import readline from 'readline';

export const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
export function ask(question: string): Promise<string> {
  return new Promise(resolve => input.question(question, resolve));
}

export function close(): void {
  input.close();
}