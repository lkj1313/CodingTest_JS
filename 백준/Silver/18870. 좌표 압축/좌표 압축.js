const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];

const arr = input[1].split(" ").map(Number);

const uniqueSorted = [...new Set(arr)].sort((a, b) => a - b); // [-10, -9, 2, 4]

const map = new Map();

uniqueSorted.forEach((value, index) => {
  map.set(value, index);
});

const result = arr.map((value, index) => {
  return map.get(value);
});

console.log(result.join(" "));
