const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];
const A = input[1].split(" ").map(Number);

const newArr = A.map((num, idx) => {
  return [num, idx];
});

newArr.sort((a, b) => {
  if (a[0] === b[0]) return a[1] - b[1];
  return a[0] - b[0];
});

const answerArr = new Array(N);

for (let i = 0; i < N; i++) {
  const originIdx = newArr[i][1];
  answerArr[originIdx] = i;
}

console.log(answerArr.join(" "));

//오름차순으로 바꾸고 이사간위치를 console
