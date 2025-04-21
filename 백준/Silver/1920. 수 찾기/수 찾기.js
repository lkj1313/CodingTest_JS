const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const two = input[1].split(" ").map(Number);

const M = Number(input[2]);
const four = input[3].split(" ").map(Number);

const set = new Set(two); // 기준 집합
const answer = four.map((num) => (set.has(num) ? 1 : 0));
console.log(answer.join("\n"));
