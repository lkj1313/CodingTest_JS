const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [A, B, C] = input.map(Number);

if (A === B && A === C) {
  console.log(10000 + A * 1000);
} else if (A === B || A === C) {
  console.log(1000 + A * 100);
} else if (B === C) {
  console.log(1000 + B * 100);
} else {
  console.log(Math.max(A, B, C) * 100);
}
