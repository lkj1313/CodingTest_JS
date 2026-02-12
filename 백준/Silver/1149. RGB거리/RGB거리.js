const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];

const arr = input
  .slice(1)
  .map((line) => line.split(" ").map((item) => Number(item)));

const dp = arr;

for (let i = 1; i < N; i++) {
  dp[i][0] += Math.min(dp[i - 1][1], dp[i - 1][2]);

  dp[i][1] += Math.min(dp[i - 1][0], dp[i - 1][2]);

  dp[i][2] += Math.min(dp[i - 1][0], dp[i - 1][1]);
}

const answer = Math.min(dp[N - 1][1], dp[N - 1][2], dp[N - 1][0]);

console.log(answer);
