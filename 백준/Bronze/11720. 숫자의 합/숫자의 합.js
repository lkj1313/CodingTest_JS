const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = input.map(Number);

const N = input[0];
const numbers = input[1].split("").map(Number);

const sum = numbers.reduce((a, b) => a + b, 0);

console.log(sum);
