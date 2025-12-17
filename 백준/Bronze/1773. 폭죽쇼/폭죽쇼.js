const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, C] = input[0].split(" ").map(Number);

const boom = Array(C + 1).fill(false);

const periods = input.slice(1).map(Number);

const uniquePeriods = new Set(periods);

for (const p of uniquePeriods) {
  for (let t = p; t <= C; t += p) {
    boom[t] = true;
  }
}

let count = 0;
for (let i = 0; i <= C; i++) {
  if (boom[i]) count++;
}

console.log(count);
