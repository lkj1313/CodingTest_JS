const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const A = input[0];
const B = input[1];
const answer = [];

for (let i = 2; i >= 0; i--) {
  answer.push(Number(A) * Number(B[i]));
}
const totalSum = Number(A) * Number(B);

answer.push(totalSum);

console.log(answer.join("\n"));
