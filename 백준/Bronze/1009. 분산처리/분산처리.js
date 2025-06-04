const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf8").trim().split("\n");

const T = Number(input[0]);
let index = 1;

while (index <= T) {
  const [a, b] = input[index++].split(" ").map(Number);
  let result = a % 10;

  for (let i = 2; i <= b; ++i) {
    result = (result * a) % 10;
  }

  if (result === 0) result = 10;

  console.log(result);
}
