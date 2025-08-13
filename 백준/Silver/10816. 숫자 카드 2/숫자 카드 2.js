const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);

const have = input[1].split(" ").map(Number);
have.sort((a, b) => a - b);

const M = Number(input[2]);

const mustHave = input[3].split(" ").map(Number);

const freq = new Map();

for (const v of have) {
  if (freq.has(v)) {
    freq.set(v, freq.get(v) + 1);
  } else {
    freq.set(v, 1);
  }
}

const res = mustHave.map((v) => freq.get(v) || 0);

console.log(res.join(" "));
