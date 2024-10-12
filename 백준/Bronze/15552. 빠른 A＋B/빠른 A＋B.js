const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let result = "";
const T = +input[0];
for (i = 1; i <= T; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  result += a + b + "\n";
}

console.log(result);
