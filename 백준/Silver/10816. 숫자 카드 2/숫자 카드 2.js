const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];

const Numbers = input[1].split(" ").map(Number);

const M = +input[2];

const Ms = input[3].split(" ").map(Number);

const map = new Map();
for (let i = 0; i < N; i++) {
  if (!map.get(Numbers[i])) {
    map.set(Numbers[i], 1);
  } else {
    map.set(Numbers[i], map.get(Numbers[i]) + 1);
  }
}

const answer = [];

for (let i = 0; i < M; i++) {
  map.get(Ms[i]) ? answer.push(map.get(Ms[i])) : answer.push(0);
}

console.log(answer.join(" "));
