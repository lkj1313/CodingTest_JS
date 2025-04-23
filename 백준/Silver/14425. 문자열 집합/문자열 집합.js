///2108번 통계학
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const nPoketmos = input.slice(1, n + 1);
const Mpoketmos = input.slice(n + 1);
const map = new Map();
for (const name of nPoketmos) {
  map.set(name, name);
}
let count = 0;
for (const name of Mpoketmos) {
  if (map.has(name)) {
    count++;
  }
}

console.log(count);
