const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const T = input[0]; // 테스트 케이스 개수
const nums = input.slice(1); // 각 테스트 케이스 n값들

const dp = new Array(11).fill(0);
dp[0] = 1;
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;
dp[4] = 7;
dp[5] = 13;

for (let i = 6; i <= 10; i++) {
  dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}

for (let i = 0; i < T; i++) {
  console.log(dp[nums[i]]);
}
