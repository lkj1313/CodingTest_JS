const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = input[0];
const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

console.log(arr[0], arr[arr.length - 1]);
