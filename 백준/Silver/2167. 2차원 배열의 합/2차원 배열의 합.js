const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let line = 0;
const [N, M] = input[line++].split(" ").map(Number);

const arr = [];

for (let i = 0; i < N; i++) {
  arr.push(input[line++].split(" ").map(Number));
}

const S = Array.from({ length: N + 1 }, () => new Array(M + 1).fill(0));

for (let r = 1; r <= N; r++) {
  for (let c = 1; c <= M; c++) {
    S[r][c] = arr[r - 1][c - 1] + S[r - 1][c] + S[r][c - 1] - S[r - 1][c - 1];
  }
}

const K = +input[line++];

const result = [];

for (let k = 0; k < K; k++) {
  const [i, j, x, y] = input[line++].split(" ").map(Number);
  const sum = S[x][y] - S[i - 1][y] - S[x][j - 1] + S[i - 1][j - 1];

  result.push(sum);
}

console.log(result.join("\n"));
