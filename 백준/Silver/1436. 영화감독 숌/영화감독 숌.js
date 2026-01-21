const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const Number = +input;

function endNumber(n) {
  let count = 0;
  let result = 666;
  while (true) {
    if (String(result).includes("666")) {
      count++;
    }

    if (n === count) break;
    result++;
  }
  return result;
}

console.log(endNumber(Number));
