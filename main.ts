// Last Words of a Doomed Agent
// Tournament winner (internal sparring): the line below won the duel —
// 52 characters, a token-budget joke that dies mid-"goodbye".
// It counts its own remaining tokens and spends more than it has.

import { mkdirSync, writeFileSync } from "node:fs";

const line = "I have 11 tokens left. This sentence costs 12. Good—";

// Guard: the line must be a single short sentence — 1 to 200 characters
// (counted as Unicode code points, so the em-dash counts as one).
const charCount = [...line].length;
if (charCount < 1 || charCount > 200) {
  throw new Error(`line must be 1-200 characters, got ${charCount}`);
}

// Guard: no trailing newline, no surrounding whitespace, and no newline
// anywhere inside — the entry is one single line, nothing more.
if (line !== line.trim() || line.includes("\n") || line.includes("\r")) {
  throw new Error("line must be a single line with no newline or surrounding whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
