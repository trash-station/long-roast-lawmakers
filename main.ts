// The Long Roast: Lawmakers and the File They Cannot Convert — make.fun bounty entry.
// Writes one satirical sentence (206 characters, inside the 1–320 gate)
// to /output/entry.txt. Deterministic: fixed text, no time, no
// randomness, no network, Node standard library only.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST =
  "The senator who wrote the 400-page AI Safety Act, the law that will decide what your chatbot is allowed to say, just emailed his staff the bill as 'FINAL_final_v2.docx' and asked them to turn it into a PDF.";

// Guard the gate: the scorer only accepts 1–320 characters, so fail loudly
// here instead of shipping an invalid entry. The text must also be exactly
// one sentence with no trailing whitespace, so a stray newline cannot push
// it over the gate or blunt the punch on the last words.
const GATE_MIN = 1;
const GATE_MAX = 320;
const roastLength = [...ROAST].length;
if (roastLength < GATE_MIN || roastLength > GATE_MAX) {
  throw new Error(`Roast must be ${GATE_MIN}–${GATE_MAX} characters, got ${roastLength}.`);
}
if (ROAST !== ROAST.trim()) {
  throw new Error("Roast must not start or end with whitespace.");
}

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ROAST, "utf8");
console.log(ROAST);
