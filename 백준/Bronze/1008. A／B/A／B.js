const fs = require("fs");

// 입력을 받아서 처리
const input = fs.readFileSync("/dev/stdin").toString().split(" ");
const A = parseInt(input[0]);
const B = parseInt(input[1]);
console.log(A / B);
