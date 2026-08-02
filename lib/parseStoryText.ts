/** Splits a raw multi-point stage field into clean lines, stripping leading
 * numbering ("1.", "2)"), dashes, bullets and ">>" markers from the source data. */
export function parseStagePoints(raw: string | undefined | null): string[] {
  if (!raw) return [];
  return raw
    .split(/\n+/)
    .map((line) =>
      line
        .trim()
        .replace(/^(?:\d+[.)]|[-••]|>+)\s*/, "")
        .trim()
    )
    .filter(Boolean);
}
