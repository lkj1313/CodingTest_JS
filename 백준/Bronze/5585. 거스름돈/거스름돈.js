const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let price = Number(input);
let change = 1000 - price;

const coins = [500, 100, 50, 10, 5, 1];
let count = 0;

for (let i = 0; i < coins.length; i++) {
  if (change === 0) break;

  count += Math.floor(change / coins[i]);

  change %= coins[i];
}

console.log(count);
