const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf8").trim(); // 문자열 그대로 유지

const array = input.split("").map(Number);
const sum = array.reduce((a, b) => a + b, 0);
let answer;

if (!array.includes(0) || sum % 3 !== 0) {
  answer = -1;
} else {
  answer = array.sort((a, b) => b - a).join("");
}

console.log(answer);
