const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

let matrix1 = []; /// [[],[] ....]
let matrix2 = [];
for (let i = 1; i <= N; i++) {
  matrix1.push(input[i].split(" ").map(Number));
}

for (let i = N + 1; i <= N * 2; i++) {
  matrix2.push(input[i].split(" ").map(Number));
}

let result = []; // [[1,2,3],[2,3,4]...]

for (let i = 0; i < N; i++) {
  let row = [];
  for (let j = 0; j < M; j++) {
    row.push(matrix1[i][j] + matrix2[i][j]);
  }
  result.push(row);
}
[
  [1, 2, 3],
  [2, 3, 4],
];

result.forEach((row) => console.log(row.join(" ")));
