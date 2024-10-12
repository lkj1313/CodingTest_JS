const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const A = input.map(Number); // 입력 값을 숫자 배열로 변환

const Max = Math.max(...A); // 최대값 구하기
const index = A.indexOf(Max) + 1; // 최대값의 인덱스(1-based)

console.log(`${Max}`);
console.log(`${index}`);
