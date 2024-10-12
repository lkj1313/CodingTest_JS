const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const SUM = +input[0];
let sumsum = 0;
for (let i = 2; i < input.length; i++) {
  const [A, B] = input[i].split(" ").map(Number);
  sumsum = sumsum + A * B;
}

SUM === sumsum ? console.log("Yes") : console.log("No");
