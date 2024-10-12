const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const array = input.map(Number).map((a) => a % 42);
const result = [...new Set(array)];
console.log(result.length);
