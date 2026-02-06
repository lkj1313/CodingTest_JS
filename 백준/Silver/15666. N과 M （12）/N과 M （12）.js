const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const seted = new Set(arr);
const setedArr = [...seted];
let answer = "";
const path = [];

function dfs(depth, last) {
  if (depth === M) {
    answer += path.join(" ") + "\n";
    return;
  }

  for (let i = 0; i < setedArr.length; i++) {
    if (setedArr[i] >= last) {
      path.push(setedArr[i]);
      last = setedArr[i];
    } else {
      continue;
    }
    dfs(depth + 1, setedArr[i]);
    path.pop();
  }
}
dfs(0, 0);
console.log(answer);
