const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];

const Aarr = input[1].split(" ").map(Number);

const answerArr = [];
const dp = new Array(N).fill(1);
function solution(n, arr) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
}

solution(N, Aarr);

console.log(Math.max(...dp));
