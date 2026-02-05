const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let answer = "";
let path = [];
const visited = new Array(N).fill(false);
function dfs(depth) {
  if (depth === M) {
    answer += path.join(" ") + "\n";
    return;
  }

  for (let i = 0; i < N; i++) {
    if (!visited[i]) {
      path.push(arr[i]);
      visited[i] = true;

      dfs(depth + 1);
      path.pop();
      visited[i] = false;
    }
  }
}
/// 1,2,3 (1,2) (1,3) (2,1) (2,3)

dfs(0);
console.log(answer);
