const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf8").trim().split("\n").map(Number);

const k = input[0];

const stack = [];

for (let i = 1; i <= k; i++) {
  if (input[i] === 0) {
    stack.pop();
  } else {
    stack.push(input[i]);
  }
}

const sum = stack.reduce((a, b) => a + b, 0);

console.log(sum);
