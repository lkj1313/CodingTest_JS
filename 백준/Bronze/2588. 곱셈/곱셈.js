const fs = require("fs");

// 입력을 받아서 처리
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const A = +input[0];
const B = input[1];
const B1 = parseInt(B[2]);
const B2 = parseInt(B[1]);
const B3 = parseInt(B[0]);

console.log(A * B1);
console.log(A * B2);
console.log(A * B3);
console.log(A * parseInt(B));
