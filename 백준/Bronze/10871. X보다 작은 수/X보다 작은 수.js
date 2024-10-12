const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, X] = input[0].split(" ").map(Number);
const array = input[1]
  .split(" ")
  .map(Number)
  .filter((a) => X > a)
  .join(" ");

console.log(array);
