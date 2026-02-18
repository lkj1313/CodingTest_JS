const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const [n, r] = input.split(" ").map(Number);

const answer = factorial(n) / (factorial(n - r) * factorial(r));

function factorial(n) {
  let result = BigInt(1);
  for (let i = 2; i <= n; i++) {
    result *= BigInt(i);
  }
  return result;
}

console.log(answer.toString());
