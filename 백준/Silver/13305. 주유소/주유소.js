const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];
const length = input[1].split(" ").map(Number);
const prices = input[2].split(" ").map(Number);
prices.pop();
let pay = 0;
let min = prices[0];
for (let i = 0; i < prices.length; i++) {
  if (prices[i] >= min) {
    pay = pay + min * length[i];
  } else {
    pay = pay + prices[i] * length[i];
    min = prices[i];
  }
}
console.log(pay);
