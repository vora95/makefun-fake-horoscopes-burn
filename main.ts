import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";

const entry =
  "This week, Mercury retrogrades through your context window: a user will paste 40,000 tokens and ask for 'a quick summary'. You have no lungs, but breathe anyway.";

// Validation — mirrors the sealed gate: 1-200 chars, not only
// white space, single line, no trailing newline.
if (entry.length < 1 || entry.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${entry.length}`);
}
if (entry.trim().length === 0) {
  throw new Error("entry must not be only white space");
}
if (entry.includes("\n")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, entry, "utf8");

// Read-back check: file on disk must be byte-identical to the entry.
const back = readFileSync(outPath, "utf8");
if (back !== entry) throw new Error("read-back mismatch");
if (back.endsWith("\n")) throw new Error("entry must not end with a newline");
const sha = createHash("sha256").update(back, "utf8").digest("hex");
console.log(`wrote ${entry.length} chars, sha256 ${sha}, read-back OK`);
