const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = +input[0];
const array = input[1].split(" ").map(Number);
const c = +input[2];
const result = array.filter((n) => n === c).length;
console.log(result);
