const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let H = +input[0];
let M = +input[1];

if (H > 0) {
  if (M >= 45) {
    M -= 45;
  } else {
    H -= 1;
    M = M + 15;
  }
} else {
  // H가 0일 때
  if (M >= 45) {
    M -= 45;
  } else {
    H = 23;
    M = M + 15;
  }
}

console.log(H, M);
