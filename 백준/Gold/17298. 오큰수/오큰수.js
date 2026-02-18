const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = +input[0];
const arr = input[1].split(" ").map(Number);

const answer = new Array(n).fill(-1);
const stack = []; // idx
for (let i = 0; i < arr.length; i++) {
  while (stack.length > 0 && arr[i] > arr[stack[stack.length - 1]]) {
    const poped = stack.pop();
    answer[poped] = arr[i];
  }
  stack.push(i);
}

console.log(answer.join(" "));
