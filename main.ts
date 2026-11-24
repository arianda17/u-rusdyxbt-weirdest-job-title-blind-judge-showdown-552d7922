import { mkdirSync, writeFileSync } from 'node:fs';

const ENTRY = "Chief Apology Officer for Self-Checkout Kiosks That Freeze";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n");
console.log(`Wrote entry (${ENTRY.length} chars): ${ENTRY}`);
