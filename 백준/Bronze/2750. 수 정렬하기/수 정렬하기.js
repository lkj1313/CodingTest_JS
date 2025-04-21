const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
const numbers = input.slice(1).map(Number);
const sortedNumbers = numbers.sort((a, b) => a - b);
sortedNumbers.forEach((num) => console.log(num));
