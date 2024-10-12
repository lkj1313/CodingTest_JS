const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];

const S = input[1].split(" ").map(Number);

const max = Math.max(...S);
const min = Math.min(...S);

console.log(`${min} ${max}`);
