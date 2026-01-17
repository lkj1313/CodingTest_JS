const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const nums = input[1].split(" ").map(Number);

const remainderCount = new Array(M).fill(0);
let answer = 0;
let currentSum = 0;

for (let i = 0; i < N; i++) {
  currentSum += nums[i];

  const rem = currentSum % M;

  if (rem === 0) answer++;

  answer += remainderCount[rem];

  remainderCount[rem]++;
}

console.log(answer);
