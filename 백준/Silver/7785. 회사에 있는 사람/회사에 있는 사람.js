///2108번 통계학
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
const k = input.slice(1); // [a enter, b]
const map = new Map();
for (const n of k) {
  const [name, status] = n.split(" ");
  if (status === "enter") {
    map.set(name, true);
  } else {
    map.delete(name);
  }
}
const result = Array.from(map.keys()).sort().reverse();
for (const key of result) {
  console.log(key);
}
