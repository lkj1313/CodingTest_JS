const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
const Numbers = input[1].split(" ").map(Number);
const M = Number(input[2]);
const Ms = input[3].split(" ").map(Number);
const NumberSet = new Set(Numbers);
const result = Ms.map((number) => (NumberSet.has(number) ? 1 : 0));
console.log(result.join(" "));
