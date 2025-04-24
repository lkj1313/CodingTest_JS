const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
const books = input.slice(1);
const map = new Map();

for (let i = 0; i < N; i++) {
  if (map.has(books[i])) {
    map.set(books[i], map.get(books[i]) + 1);
  } else {
    map.set(books[i], 1);
  }
}
let maxCount = 0;
let bestSeller = "";
for (const [title, count] of map) {
  if (count > maxCount) {
    maxCount = count;
    bestSeller = title;
  }
  if (count === maxCount && title < bestSeller) {
    bestSeller = title;
  }
}

console.log(bestSeller);
