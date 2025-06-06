const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf8").trim().split("\n");

const T = Number(input[0]);
const numbers = input[1].split(" ");
let result = 0;

function isPrimeNumber(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

for (let i = 0; i < T; i++) {
  if (isPrimeNumber(Number(numbers[i]))) {
    result += 1;
  }
}

console.log(result);
