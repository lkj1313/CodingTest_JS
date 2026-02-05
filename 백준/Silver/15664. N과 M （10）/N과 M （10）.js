const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let answer = [];
const path = [];
let result = "";
function dfs(start, depth) {
  if (depth === M) {
    answer.push([...path]);
    return;
  }
  for (let i = start; i < N; i++) {
    path.push(arr[i]);
    dfs(i + 1, depth + 1);
    path.pop();
  }
}
dfs(0, 0);
const set = new Set(answer.map((a) => JSON.stringify(a)));
const setedAnswer = [...set].map((a) => JSON.parse(a));

setedAnswer.forEach((a) => (result += a.join(" ") + "\n"));

console.log(result);
