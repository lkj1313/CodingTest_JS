const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const [N, M] = input.split(" ").map(Number);

let result = [];
const path = [];

function dfs(start) {
  if (path.length === M) {
    result.push(path.join(" "));
    return;
  }

  for (let i = start; i <= N; i++) {
    path.push(i);
    dfs(i);
    path.pop();
  }
}

dfs(1);
console.log(result.join("\n"));
