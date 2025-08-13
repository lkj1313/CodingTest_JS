const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);

const have = new Set(input[1].split(" ").map(Number));

const M = Number(input[2]);

const MustHave = input[3].split(" ").map(Number);

const result = MustHave.map((num) => (have.has(num) ? 1 : 0));
console.log(result.join(" "));
