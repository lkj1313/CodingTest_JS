const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf8").trim().split("\n");
const n = Number(input[0]);
const sequence = input[1].split(" ").map(Number);
const x = Number(input[2]);

const sorted = sequence.sort((a, b) => a - b);
let answer = 0;
for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    if (sorted[i] + sorted[j] === x) {
      answer++;
    }
  }
}

console.log(answer);
