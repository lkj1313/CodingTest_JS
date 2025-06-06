const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf8").trim().split("\n").map(Number);

const scoreIndex = input.map((score, idx) => ({ score, idx: idx + 1 }));

const sorted = scoreIndex.sort((a, b) => b.score - a.score).slice(0, 5);
const sum = sorted.reduce((acc, b) => acc + b.score, 0);

const index = sorted.map((v) => v.idx).sort((a, b) => a - b);

console.log(sum);
console.log(index.join(" "));
