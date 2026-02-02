const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let X = +input;
const dp = new Array(X + 1).fill(0);
dp[2] = 1;
for (let i = 3; i <= X; i++) {
  dp[i] = dp[i - 1] + 1;
  if (i % 2 === 0) {
    dp[i] = Math.min(dp[i / 2] + 1, dp[i]);
  }
  if (i % 3 === 0) {
    dp[i] = Math.min(dp[i / 3] + 1, dp[i]);
  }
}

console.log(dp[X]);
