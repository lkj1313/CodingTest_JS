const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let answer = "";
const path = [];
function dfs(start, depth) {
  if (depth === M) {
    answer += path.join(" ") + "\n";
    return;
  }
  for (let i = start; i < N; i++) {
    path.push(arr[i]);
    dfs(i + 1, depth + 1);
    path.pop();
  }
}

dfs(0, 0);

console.log(answer);
