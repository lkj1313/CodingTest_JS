const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = +input[0];

const arr = input.slice(1);
const answer = [];
for (const a of arr) {
  const test = a.trim().split("");
  const stack = [];
  let isInvalid = false;
  for (const b of test) {
    if (b === "(") {
      stack.push("(");
    } else if (b === ")") {
      if (stack.length > 0) {
        stack.pop();
      } else {
        isInvalid = true;
        break;
      }
    }
  }
  if (!isInvalid && stack.length === 0) {
    answer.push("YES");
  } else {
    answer.push("NO");
  }
}
console.log(answer.join("\n"));
