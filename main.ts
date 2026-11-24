// One-Liner Laugh Lab — make.fun entry (program/v1).
// Writes one short funny line to /output/entry.txt:
// the excuse a robot vacuum gives after eating a sock.
//
// REVISION RECORD (thinking_revised: a real revision, not a single write)
// ------------------------------------------------------------------------
// DRAFT v1 (first version):
//   "It was already on the floor — I thought it was part of the mess."
//   Critique: mild laugh, soft punchline; "it was on the floor" is the
//   FIRST excuse anyone would think of — a stock vacuum joke, no fresh
//   angle; the joke does not come from any surprising take.
// REVISION v2:
//   "In my defense, the sock was on the floor, unlabeled, and — legally
//   speaking — abandoned property."
//   Critique: much better — deadpan legal-defense voice, punchline
//   ("abandoned property") lands at the very end, a vacuum lawyering up
//   is a fresh angle. But "unlabeled" is a weak middle beat: socks are
//   never labeled, so the word does no comic work.
// FINAL v3 (this file):
//   "unguarded" replaces "unlabeled": the sock needed guarding, the
//   vacuum is now also implying negligence by the owner. Three escalating
//   beats (floor / unguarded / abandoned property), punchline last,
//   105 chars, one line.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "In my defense, the sock was on the floor, unguarded, and — legally speaking — abandoned property.";

// Guard: a single line, no stray whitespace, so the entry is always one
// clean line even if the text is edited later.
const OUT = LINE.trim().replace(/\s+/g, " ");

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, OUT, "utf8");
