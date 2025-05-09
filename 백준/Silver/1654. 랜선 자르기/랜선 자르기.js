const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [K, N] = input[0].split(" ").map(Number);
const cables = input.slice(1).map(Number);
let start = 1;
let end = Math.max(...cables);
let result;

while (start <= end) {
  const mid = Math.floor((start + end) / 2);
  let count = cables.reduce((a, cable) => a + Math.floor(cable / mid), 0);
  if (count >= N) {
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(result);
