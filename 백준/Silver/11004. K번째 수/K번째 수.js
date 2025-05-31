const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf8").trim().split("\n");
const [N, K] = input[0].split(" ").map(Number);
const numbers = input[1].split(" ").map(Number);
const sorted = numbers.sort((a, b) => a - b);
console.log(sorted[K - 1]);
