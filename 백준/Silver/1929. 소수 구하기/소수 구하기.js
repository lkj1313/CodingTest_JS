const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const [M, N] = input.split(" ").map(Number);

function IsPrime(n) {
  if (n === 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
const answerArr = [];
for (let i = M; i <= N; i++) {
  if (IsPrime(i)) {
    answerArr.push(i);
  }
}

console.log(answerArr.join("\n"));
