const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf8").trim().split("\n");

const T = Number(input[0]);
let line = 1;

for (let i = 0; i < T; i++) {
  const n = Number(input[line++]);
  const map = new Map();
  for (let j = 0; j < n; j++) {
    const [_, type] = input[line++].split(" ");
    map.set(type, (map.get(type) || 0) + 1);
  }
  let result = 1;
  for (let count of map.values()) {
    result *= count + 1;
  }
  console.log(result - 1);
}
