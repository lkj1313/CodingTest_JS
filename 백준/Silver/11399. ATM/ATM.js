const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const num = Number(input[0]);
const pi = input[1].split(" ").map(Number);
pi.sort((a, b) => a - b);
let sum = 0;
let total = 0;
for (let i = 0; i < num; i++) {
  sum += pi[i];
  total += sum;
}

console.log(total);
