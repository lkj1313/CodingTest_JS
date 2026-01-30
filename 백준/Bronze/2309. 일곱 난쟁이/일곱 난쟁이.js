const fs = require("fs");
const arr = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

arr.sort((a, b) => a - b);
const combiArr = [];
const currentArr = [];
let found = false;
function dfs(start) {
  if (currentArr.length === 7) {
    if (found) return;
    if (currentArr.reduce((a, b) => a + b, 0) === 100) {
      console.log(currentArr.join("\n"));
      found = true;
      return;
    }
    return;
  }
  for (let i = start; i < arr.length; i++) {
    currentArr.push(arr[i]);
    dfs(i + 1);
    currentArr.pop();
  }
}

dfs(0);
