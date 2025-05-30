const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = Number(input[0]);
const coins = [25, 10, 5, 1];
for (let i = 1; i <= T; i++) {
  let cents = Number(input[i]);
  const result = [];
  for (let coin of coins) {
    const count = Math.floor(cents / coin);
    result.push(count);
    cents %= coin;
  }
  console.log(result.join(" "));
}
