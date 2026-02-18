const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = +input[0];
const arr = input.slice(1).map(Number); // 수열
const nArr = Array.from({ length: n }, (v, i) => i + 1);
let k = 0;
const stack = [];
let possible = true;
const answer = [];
for (let i = 0; i < n; i++) {
  while (k < n && (arr[i] > stack[stack.length - 1] || stack.length === 0)) {
    stack.push(nArr[k++]);
    answer.push("+");
  }
  if (stack[stack.length - 1] === arr[i]) {
    stack.pop();
    answer.push("-");
  } else {
    possible = false;
    break;
  }
}

if (possible) {
  console.log(answer.join("\n"));
} else {
  console.log("NO");
}
