const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf8").trim().split("\n").map(Number);
const sum = input.reduce((a, b) => a + b, 0);
const average = sum / input.length;
const sorted = input.sort((a, b) => a - b);
const middle = sorted[2];
const answer = [average, middle];
console.log(answer.join("\n"));
