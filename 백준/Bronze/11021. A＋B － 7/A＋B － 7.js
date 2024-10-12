const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = +input[0];
let result = "";

for (i = 1; i <= T; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  result += `Case #${i}: ${a + b} \n`;
}

console.log(result);
