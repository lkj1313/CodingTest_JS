const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let H = parseInt(input[0]);
let M = parseInt(input[1]);

if (M >= 45) {
  M = M - 45;
} else {
  H = H - 1;
  M = 60 + M - 45;
  if (H < 0) {
    H = 23;
  }
}

console.log(H, M);
