const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const [N, K] = input.split(" ").map(Number);
const arr = Array.from({ length: N }, (_, i) => i + 1);
let idx = 0;
let answer = [];
while (arr.length > 0) {
  idx = (idx + K - 1) % arr.length;
  const remove = arr.splice(idx, 1);
  answer.push(remove[0]);
}

console.log(`<${answer.join(", ")}>`);
