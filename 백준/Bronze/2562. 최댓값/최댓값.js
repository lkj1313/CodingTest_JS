const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = input.map(Number);

const maxNum = arr.reduce((a, b) => Math.max(a, b));

const index = arr.indexOf(maxNum);

console.log(maxNum);
console.log(index + 1);
