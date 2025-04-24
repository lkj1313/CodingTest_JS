const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString().trim());

const dp = new Array(input + 1).fill(0); // dp[i] = i를 1로 만들기 위한 최소 연산 횟수

for (let i = 2; i <= input; i++) {
  // 기본 연산: 1을 뺀 경우
  dp[i] = dp[i - 1] + 1;

  // 2로 나눌 수 있는 경우
  if (i % 2 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 2] + 1);
  }

  // 3으로 나눌 수 있는 경우
  if (i % 3 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 3] + 1);
  }
}

console.log(dp[input]); // 결과 출력