const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const [N, M] = input.split(" ").map(Number);
const result = [];
const visited = new Array(N + 1).fill(false);
let answer = "";

function dfs(depth) {
  if (depth === M) {
    answer += result.join(" ") + "\n";
    return;
  }
  //[1,2]
  for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      result.push(i);

      dfs(depth + 1);

      result.pop();
      visited[i] = false;
    }
  }
}

dfs(0);
console.log(answer);
