const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let line of input) {
  const [a, b, c] = line.split(" ").map(Number);
  if (a === 0 && b === 0 && c === 0) break;

  const nums = [a, b, c].sort((a, b) => a - b);
  const [x, y, z] = nums;
  if (z ** 2 === x ** 2 + y ** 2) {
    console.log("right");
  } else {
    console.log("wrong");
  }
}
