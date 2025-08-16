const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];

const arr = input.slice(1).map(Number);

arr.sort((a, b) => a - b);

let max = 0;

for (let i = 0; i < N; i++) {
  max = Math.max(max, arr[i] * (N - i));
}

console.log(max);
