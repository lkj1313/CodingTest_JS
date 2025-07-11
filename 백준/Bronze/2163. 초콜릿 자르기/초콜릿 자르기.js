const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

[A, B] = input.split(" ").map(Number);

console.log(A * B - 1);
