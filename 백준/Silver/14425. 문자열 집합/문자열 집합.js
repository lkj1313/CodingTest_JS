const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf8").trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const map = new Map();
let count = 0;
for (let i = 1; i <= N; i++) {
  map.set(input[i], 0);
}

for (let i = N + 1; i <= M + N + 1; i++) {
  if (map.has(input[i])) count++;
}

console.log(count);
