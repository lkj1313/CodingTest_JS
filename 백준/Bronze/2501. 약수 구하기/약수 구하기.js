const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const [N, K] = input.split(" ").map(Number);
const answer = [];
for (let i = 1; i <= N; i++) {
  if (N % i === 0) {
    answer.push(i);
  }
}
if (answer.length >= K) {
  console.log(answer[K - 1]);
} else {
  console.log(0);
}
