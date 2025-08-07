const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const N = input[0];

const arr = [];

for (let i = 1; i <= N; i++) {
  if (input[i] !== 0) {
    arr.push(input[i]);
  } else {
    arr.pop();
  }
}

const answer = arr.reduce((a, b) => a + b, 0);

console.log(answer);
