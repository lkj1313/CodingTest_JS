const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();

const [A, B] = input.split(" ");

const reverseA = A.split("").reverse().join("");
const reverseB = B.split("").reverse().join("");

const answer = +reverseA > +reverseB ? +reverseA : +reverseB;

console.log(answer);
