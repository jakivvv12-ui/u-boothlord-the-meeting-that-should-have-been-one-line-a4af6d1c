import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const out = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const line = "The decision was 'ship it Friday'; the other 58 minutes were the calendar collecting witnesses.";

if (line.length < 1 || line.length > 200) {
  throw new Error("entry must be 1-200 characters");
}

mkdirSync(out, { recursive: true });
writeFileSync(join(out, "entry.txt"), line + "\n");
