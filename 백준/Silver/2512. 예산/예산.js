const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let num = Number(input[0]);
let arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let budgets = Number(input[2]);

let start = 0;
let end = Math.max(...arr); // 괄호 [] 불필요

let answer = 0;

while (start <= end) {
  let mid = Math.floor((start + end) / 2); // 상한선
  let sum = arr.reduce((sum, budget) => sum + Math.min(budget, mid), 0);

  if (sum > budgets) {
    end = mid - 1;
  } else {
    answer = mid;
    start = mid + 1;
  }
}

console.log(answer);
