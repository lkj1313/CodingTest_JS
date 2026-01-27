const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const [N, M] = input.split(" ").map(Number);

const result = [];
let answer = "";

function dfs(start, depth) {
  if (depth === M) {
    answer += result.join(" ") + "\n";
    return;
  }

  for (let i = start; i <= N; i++) {
    result.push(i);
    dfs(i + 1, depth + 1);
    result.pop();
  }
}

dfs(1, 0);
console.log(answer);
