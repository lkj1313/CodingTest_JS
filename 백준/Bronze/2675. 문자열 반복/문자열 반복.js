const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];
const answer = [];
for (let i = 1; i <= N; i++) {
  const kk = [];
  const arr = input[i].split(" ");
  let n = +arr[0];
  const word = arr[1];
  for (let char of word) {
    kk.push(char.repeat(n));
  }
  answer.push(kk.join(""));
}

console.log(answer.join("\n"));
