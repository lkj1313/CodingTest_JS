const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf8").trim();

const [X, Y] = input.split(" ").map(Number);
let Z = Math.floor((Y * 100) / X);
if (Z >= 99) {
  console.log(-1);
  return;
}

let left = 1;
let right = 1e9;
let answer = -1;
// (Y+N)/(X+N) *100 >= Z+1
while (left <= right) {
  let mid = Math.floor((left + right) / 2);
  let newZ = Math.floor(((Y + mid) * 100) / (X + mid));
  if (newZ > Z) {
    answer = mid;
    right = mid - 1;
  } else {
    left = mid + 1;
  }
}

console.log(answer);
