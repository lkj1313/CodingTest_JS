const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let line = 0;
const N = +input[line++];
let answerArr = [];
for (let i = 0; i < N; i++) {
  const T = +input[line++];
  const arr = input[line++].split(" ").map(Number);
  const length = arr.length;
  let max = 0;
  let answer = 0;
  for (let k = length - 1; k >= 0; k--) {
    if (arr[k] > max) {
      max = arr[k];
    } else {
      answer += max - arr[k];
    }
  }
  answerArr.push(answer);
}
console.log(answerArr.join("\n"));
