const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let X = Number(input);
const stick = [64, 32, 16, 8, 4, 2, 1];

const count = X.toString(2).split("1").length - 1;

console.log(count);
