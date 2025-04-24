const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const nums = input.slice(1).map(BigInt); // ← 여기 BigInt!

const map = new Map();

for (let i = 0; i < N; i++) {
  const num = nums[i];
  map.set(num, (map.get(num) || 0) + 1);
}

let maxCount = 0;
let number = null;

for (const [num, count] of map) {
  if (count > maxCount) {
    maxCount = count;
    number = num;
  } else if (count === maxCount && num < number) {
    number = num;
  }
}

console.log(String(number)); // ← BigInt는 String으로 출력!
