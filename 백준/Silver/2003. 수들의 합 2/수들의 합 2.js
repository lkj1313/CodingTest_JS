const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const numsArr = input[1].split(" ").map(Number);

let start = 0;
let end = 0;
let sum = 0;
let count = 0;

while (end <= N) {
  if (sum < M) {
    if (N === end) break;
    sum += numsArr[end];
    end++;
  } else {
    if (sum === M) count++;
    sum -= numsArr[start];
    start++;
  }
}

console.log(count);
