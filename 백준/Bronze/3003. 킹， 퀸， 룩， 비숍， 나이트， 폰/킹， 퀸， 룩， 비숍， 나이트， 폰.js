const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin", "utf-8")
  .trim()
  .split(" ")
  .map(Number);

const corret = [1, 1, 2, 2, 2, 8];

const result = corret.map((pice, index) => pice - input[index]); // 배열로된 결과

const answer = result.join(" ");
console.log(answer);
