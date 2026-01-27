const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const N = +input;
const result = [];
let answer = "";
const visited = new Array(N + 1).fill(false);

function dfs(depth) {
  if (depth === N) {
    answer += result.join(" ") + "\n";
    return;
  }
  for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
      result.push(i);
      visited[i] = true;

      dfs(depth + 1);
      visited[i] = false;
      result.pop();
    }
  }
}

dfs(0);
console.log(answer);
