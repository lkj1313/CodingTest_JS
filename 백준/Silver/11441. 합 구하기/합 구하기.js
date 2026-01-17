const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];

const Nums = input[1].split(" ").map(Number);

const M = +input[2];

const preFixSum = new Array(N + 1).fill(0);

for (let i = 0; i < N; i++) {
  preFixSum[i + 1] = preFixSum[i] + Nums[i];
}
// [0, 10, 30...]
const answerArr = [];

for (let i = 3; i < M + 3; i++) {
  const arr = input[i].split(" ").map(Number);
  const [k, j] = arr;
  answerArr.push(preFixSum[j] - preFixSum[k - 1]);
}

console.log(answerArr.join("\n"));
