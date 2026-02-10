const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, X] = input[0].split(" ").map(Number);

const arr = input[1].split(" ").map(Number);

let currentSum = 0;

for (let i = 0; i < X; i++) {
  currentSum += arr[i];
}
let maxVal = currentSum;
let count = 1;
for (let i = X; i < N; i++) {
  let sum = currentSum - arr[i - X] + arr[i];
  if (sum > maxVal) {
    maxVal = sum;
    count = 1;
  } else if (sum === maxVal) {
    count++;
  }
  currentSum = sum;
}

if (maxVal > 0) {
  console.log(maxVal);
  console.log(count);
} else {
  console.log("SAD");
}
