const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];
const A = input[1].split(" ").map(Number); // 배열 넘버화
const maxNum = Math.max(...A); // 배열중 최고점수
const jo = A.map((num) => (num / maxNum) * 100); // 점수 조작 (최고점수로 나눈 후 100을 곱함)
const answer = jo.reduce((a, b) => a + b, 0) / N;
console.log(answer);
