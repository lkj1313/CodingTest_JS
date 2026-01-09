const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = input[0];

const arr = []; //[][]

for (let i = 1; i <= N; i++) {
  const row = input[i].split(" ").map(Number);
  arr.push(row);
}

arr.sort((a, b) => {
  if (a[0] !== b[0]) {
    return a[0] - b[0];
  } else return a[1] - b[1];
});

let answer = "";

arr.forEach((pos) => {
  answer += `${pos[0]} ${pos[1]}\n`;
});

console.log(answer);
