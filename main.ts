import { mkdirSync, writeFileSync } from "node:fs";

// One-line patch note for a bug in real life / human biology.
// Dry release-note register, stated as if it shipped.
const LINE =
  "v1.7.2: fixed a bug where the brain replayed an embarrassing moment from 2014 at 3 a.m. instead of sleeping.";
const points = [...LINE];
if (points.length < 1 || points.length > 160) {
  throw new Error(`entry must be 1-160 code points, got ${points.length}`);
}
if (!LINE.trim() || LINE.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${points.length} code points to /output/entry.txt`);
