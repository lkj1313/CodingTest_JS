const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const temps = input[1].split(" ").map(Number);

let maxSum = 0;
let windowSum = 0;
for (let i = 0; i < K; i++) {
  windowSum += temps[i];
}
maxSum = windowSum;
for (let i = K; i < N; i++) {
  windowSum = windowSum + temps[i] - temps[i - K];
  maxSum = Math.max(maxSum, windowSum);
}

console.log(maxSum);
