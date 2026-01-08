const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [A, B] = input;

const reverseAArr = A.split("").reverse();
const reverseBArr = B.split("").reverse();

const reverseA = reverseAArr.join("");
const reverseB = reverseBArr.join("");

const answer = Math.max(reverseA, reverseB);

console.log(answer);
