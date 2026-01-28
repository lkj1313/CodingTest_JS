const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = input.slice(1);
const S = arr.slice(0, N);
const Marr = arr.slice(N);

const set = new Set(S);
let count = 0;
for (let i = 0; i < Marr.length; i++) {
  if (set.has(Marr[i])) count++;
}

console.log(count);
