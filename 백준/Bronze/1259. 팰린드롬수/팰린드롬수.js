// 백준에서 입력을 받는 일반적인 방법
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const arr = [];
for (let i = 0; i < input.length - 1; i++) {
  const nums = input[i];
  const reversed = input[i].split("").reverse().join("");
  arr.push(nums === reversed ? "yes" : "no");
}
let answer = arr.join("\n");
console.log(answer);
