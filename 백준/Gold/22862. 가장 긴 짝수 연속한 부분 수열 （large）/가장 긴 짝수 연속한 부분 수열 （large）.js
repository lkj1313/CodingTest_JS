const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
let left = 0;
let count = 0;
let maxLength = 0;
for (let right = 0; right < arr.length; right++) {
  if (arr[right] % 2 !== 0) {
    count++;
  }

  while (count > K) {
    //홀수가 K보다 많을떄
    if (arr[left] % 2 !== 0) {
      count--;
    }
    left++;
  }
  maxLength = Math.max(maxLength, right - left - count + 1);
}

console.log(maxLength);
