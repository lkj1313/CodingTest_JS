const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf8").trim().split("\n");
const N = Number(input[0]);
const M = Number(input[1]);
const array = input[2].split(" ").map(Number);
let answer = 0;
for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    if (array[i] + array[j] === M) {
      answer++;
    }
  }
}
console.log(answer);
