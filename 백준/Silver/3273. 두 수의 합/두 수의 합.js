const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = +input[0];
const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const x = +input[2];

let left = 0;
let right = n - 1;
let count = 0;
while (left < right) {
  let sum = arr[left] + arr[right];
  if (sum === x) {
    count++;
    left++;
    right--;
  } else if (sum > x) {
    right--;
  } else {
    left++;
  }
}

console.log(count);
