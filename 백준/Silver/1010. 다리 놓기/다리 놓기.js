const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf8").trim().split("\n");

const T = Number(input[0]);
const cases = input.slice(1).map((line) => line.split(" ").map(Number));

function factorial(n) {
  res = 1;
  for (let i = 1; i <= n; i++) {
    res *= i;
  }
  return res;
}

function combination(n, m) {
  return factorial(m) / (factorial(n) * factorial(m - n));
}

for (let i = 0; i < cases.length; i++) {
  const [n, m] = cases[i];
  console.log(Math.round(combination(n, m)));
}
