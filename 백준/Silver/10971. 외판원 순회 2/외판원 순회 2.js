const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];

const W = input.slice(1).map((line) => line.split(" ").map(Number));
const visited = new Array(N).fill(false);

let minCost = Infinity;

function dfs(currentNode, count, cost) {
  if (cost >= minCost) return;
  if (count === N) {
    if (W[currentNode][0] !== 0) {
      minCost = Math.min(minCost, cost + W[currentNode][0]);
    }
    return;
  }
  for (let i = 0; i < N; i++) {
    if (!visited[i] && W[currentNode][i]) {
      visited[i] = true;
      dfs(i, count + 1, cost + W[currentNode][i]);
      visited[i] = false;
    }
  }
}
visited[0] = true;
dfs(0, 1, 0);

console.log(minCost);
