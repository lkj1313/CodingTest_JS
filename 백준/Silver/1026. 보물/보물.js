const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];

const A = input[1].split(" ").map(Number);
const B = input[2].split(" ").map(Number);

A.sort((a, b) => a - b);
B.sort((a, b) => b - a);
let sum = 0;
for (let i = 0; i < N; i++) {
  let multiple = A[i] * B[i];
  sum += multiple;
}

console.log(sum);
