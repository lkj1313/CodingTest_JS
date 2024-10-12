const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = input.length - 1;
let result = "";

for (i = 0; i < T; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  result += a + b + "\n";
}

console.log(result);
