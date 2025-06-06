const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf8").trim().split("\n").map(Number);

const ABC = input[0] * input[1] * input[2];
const SABC = String(ABC);
let map = new Map();
for (let char of SABC) {
  map.set(char, (map.get(char) || 0) + 1);
}
let result = new Array(10).fill(0);
for (let [key, value] of map) {
  result[Number(key)] = value;
}

console.log(result.join("\n"));
