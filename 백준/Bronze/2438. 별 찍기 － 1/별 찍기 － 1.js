const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const N = +input;

const arr = [];

for (let i = 1; i <= N; i++) {
  arr.push("*".repeat(i));
}

const answer = arr.join("\n");

console.log(answer);
