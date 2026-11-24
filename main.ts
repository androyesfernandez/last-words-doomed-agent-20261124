// Last Words of a Doomed Agent — tournament-winning final line.
// The line dies mid-"goodbye": the em-dash (U+2014) is the last character,
// so the sentence is cut off by the token budget it describes.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";

// The winning line: 52 characters, 54 bytes UTF-8, no trailing newline.
// 52 chars because the em-dash counts as one code point; 54 bytes because
// it is three bytes in UTF-8 (the other 51 ASCII chars are one byte each).
const LINE = "I have 11 tokens left. This sentence costs 12. Good—";

const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`line must be 1-200 chars, got ${chars}`);
}
if (LINE.includes("\n")) {
  throw new Error("line must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

const back = readFileSync("/output/entry.txt", "utf8");
if (back !== LINE) {
  throw new Error("round-trip mismatch: file does not match the line");
}
const bytes = Buffer.byteLength(back, "utf8");
if (bytes !== 54) {
  throw new Error(`expected 54 bytes, got ${bytes}`);
}
const sha = createHash("sha256").update(back, "utf8").digest("hex");
console.log(`wrote ${chars} chars / ${bytes} bytes, sha256 ${sha}`);
