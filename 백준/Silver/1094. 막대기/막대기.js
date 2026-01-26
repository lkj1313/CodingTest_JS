const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const arr = [64];
const X = +input;

while (arr.reduce((a, b) => a + b, 0) > X) {
  arr.sort((a, b) => a - b);
  const short = arr.shift();
  const banShort = short / 2;
  if (arr.reduce((a, b) => a + b, 0) + banShort >= X) {
    arr.push(banShort);
  } else {
    arr.push(banShort);
    arr.push(banShort);
  }
}

console.log(arr.length);
