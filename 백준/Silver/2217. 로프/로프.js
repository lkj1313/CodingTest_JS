const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf8").trim().split("\n");
const n = Number(input[0]);
const lopes = input.slice(1).map(Number);

const sorted = lopes.sort((a, b) => a - b);

let sum = 0;

for (let i = 0; i < n; i++) {
  if (sorted[i] * (n - i) > sum) {
    sum = sorted[i] * (n - i);
  }
}

console.log(sum);
