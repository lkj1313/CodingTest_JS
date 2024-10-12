const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const T = +input;
let result = "";

for (i = 1; i <= T; i++) {
  result += "*".repeat(i) + `\n`;
}

console.log(result);
