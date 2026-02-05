const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];
const arr = input[1].split(" ").map(Number);

const dp = new Array(N + 1).fill(0);

dp[1] = arr[0];
let maxSum = dp[1];
for (let i = 1; i < N; i++) {
  dp[i + 1] = Math.max(dp[i] + arr[i], arr[i]);
  maxSum = Math.max(dp[i+1], maxSum)
}

console.log(maxSum)
