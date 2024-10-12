const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n"); // 줄 단위로 입력 분리

const array = input[1].split("").map(Number); // 두 번째 줄을 숫자로 변환

const answer = array.reduce((a, b) => a + b, 0); // 숫자의 합 구하기
console.log(answer);
