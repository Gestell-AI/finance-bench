/**
 * Removes all code blocks (both fenced and inline) from the input string.
 *
 * @param input - The input string containing code blocks.
 * @returns A new string with all code blocks removed.
 */
export function removeCodeBlocks(input: string): string {
  // Regex to match fenced code blocks (``` or ~~~) with optional language specifier
  const fencedCodeBlockRegex = /```[\s\S]*?```|~~~[\s\S]*?~~~/g;

  // Regex to match inline code blocks enclosed in single backticks
  const inlineCodeRegex = /`[^`]*`/g;

  // First remove fenced code blocks
  let result = input.replace(fencedCodeBlockRegex, "");

  // Then remove inline code blocks
  result = result.replace(inlineCodeRegex, "");

  return result;
}
