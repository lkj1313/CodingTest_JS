const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const An = new Set(input[1].split(" ").map(Number));

const M = Number(input[2]);
const Mn = input[3].split(" ").map(Number);

let result = "";
for (let i = 0; i < M; i++) {
  result += (An.has(Mn[i]) ? 1 : 0) + "\n";
}

console.log(result);
