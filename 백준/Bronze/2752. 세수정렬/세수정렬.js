const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const arr = input.split(" ").map(Number);

arr.sort((a, b) => a - b);

console.log(arr.join(" "));
