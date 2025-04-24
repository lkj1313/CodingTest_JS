const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input[0]); // 테스트 케이스 수
let idx = 1;

for (let t = 0; t < T; t++) {
  const N = Number(input[idx++]);
  const Nnums = input[idx++].split(" ").map(Number);
  const M = Number(input[idx++]);
  const Mnums = input[idx++].split(" ").map(Number);

  const map = new Map();
  for (let i = 0; i < N; i++) {
    map.set(Nnums[i], true);
  }

  let result = [];
  for (let i = 0; i < M; i++) {
    result.push(map.has(Mnums[i]) ? 1 : 0);
  }

  console.log(result.join("\n"));
}
