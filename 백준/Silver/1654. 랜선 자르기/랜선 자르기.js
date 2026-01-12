const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [K, N] = input[0].split(" ").map(Number);

const lanse = input.slice(1).map(Number);

let low = 1;
let high = Math.max(...lanse);
let answer = 0;
while (high >= low) {
  let mid = Math.floor((low + high) / 2);
  let total = 0; // 랜선갯수
  for (let x of lanse) {
    total += Math.floor(x / mid);
  }

  if (total >= N) {
    answer = mid;
    low = mid + 1;
  } else {
    high = mid - 1;
  }
}

console.log(answer);
