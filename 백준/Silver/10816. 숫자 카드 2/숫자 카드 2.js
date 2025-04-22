const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = input[0];
const cards = input[1].split(" ").map(Number);
const M = input[2];
const targets = input[3].split(" ").map(Number);

const cardCount = {};
for (let num of cards) {
  cardCount[num] = (cardCount[num] || 0) + 1;
}

const answer = targets.map((n) => cardCount[n] || 0).join(" ");
console.log(answer);
