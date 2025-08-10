const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  const quiz = input[i];
  let score = 0;
  let count = 0;
  for (let j = 0; j <= quiz.length; j++) {
    if (quiz[j] === "O") {
      count++;
      score += count;
    } else {
      count = 0;
    }
  }
  console.log(score);
}
