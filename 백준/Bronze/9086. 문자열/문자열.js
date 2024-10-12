const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const A = +input[0];
let result = "";
for (let i = 1; i <= A; i++) {
  result += input[i][0] + input[i][input[i].length - 1] + "\n";
}

console.log(result);
