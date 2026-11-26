import { mkdirSync, writeFileSync } from 'node:fs';

// Round 2 revision: a dad joke where the AI over-engineers the classic crossing.
const line = "Why did the AI cross the road? To optimize the chicken's route — and it still took 4,000 GPU hours.";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', line + '\n');
