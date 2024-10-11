const fs = require("fs");

// 입력을 받아서 처리
const input = fs.readFileSync("/dev/stdin").toString();

const A = +input;

if (A % 4 === 0 && (A % 100 !== 0 || A % 400 === 0)) {
  console.log(1);
} else {
  console.log(0);
}
