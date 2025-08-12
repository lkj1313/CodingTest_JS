const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const arr = input.split("").map(Number);

arr.sort((a, b) => b - a);

const answer = arr.join("");
console.log(answer);
