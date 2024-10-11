const fs = require("fs");

// 입력을 받아서 처리
const input = fs.readFileSync("/dev/stdin").toString().split(" ");
const A = +input[0];
const B = +input[1];
const C = +input[2];
console.log(A + B + C);