const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, X] = input[0].split(" ").map(Number); // 2

const arr = input[1].split(" ").map(Number);

let currentSum = 0; // 현재합
let count = 1;
for (let i = 0; i < X; i++) {
  currentSum += arr[i];
}
let maxSum = currentSum;
for (let i = X; i < N; i++) {
  currentSum = currentSum + arr[i] - arr[i - X];
  if (currentSum > maxSum) {
    maxSum = currentSum;
    count = 1;
  } else if (currentSum === maxSum) {
    count++;
  }
}
if (maxSum === 0) {
  console.log("SAD");
} else {
  console.log(maxSum);
  console.log(count);
}
