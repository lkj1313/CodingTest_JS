const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = Number(input[0]);
let line = 1;
let answer = [];

for (let t = 0; t < T; t++) {
  const n = Number(input[line]);
  const prices = input[line + 1].split(" ").map(Number);

  let maxProfit = 0;
  let maxPrice = 0;
  for (let i = n - 1; i >= 0; i--) {
    // 오타 수정: i--
    const price = prices[i];
    if (price > maxPrice) {
      maxPrice = price;
    } else {
      maxProfit += maxPrice - price;
    }
  }
  // answer.push(maxProfit); // 모든 결과를 모아서 출력할 경우 사용
  line = line + 2;
  console.log(maxProfit); // 수정된 부분: profit -> maxProfit
}
