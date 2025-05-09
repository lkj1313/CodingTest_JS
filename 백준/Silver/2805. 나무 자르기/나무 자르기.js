const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number); //[4 7 , 20 15 10 17]
const trees = input[1].split(" ").map(Number);
let start = 1;
let end = Math.max(...trees);
let result=0;

while (start <= end) {
  const mid = Math.floor((start + end) / 2);
  let sum = trees.reduce((a, tree) => a + Math.max(tree - mid, 0), 0);
  if (sum >= M) {
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(result);
