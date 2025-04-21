const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const answer = input
  .split("")
  .sort((a, b) => b - a)
  .map(Number);

console.log(answer.join(""));
