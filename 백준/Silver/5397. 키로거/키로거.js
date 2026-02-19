const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trimEnd().split("\n");

let line = 0;
const T = Number(input[line++]);
let answer = "";

for (let tc = 0; tc < T; tc++) {
  const arr = (input[line++] ?? "").split("");
  const leftStack = [];
  const rightStack = [];

  for (let i = 0; i < arr.length; i++) {
    const ch = arr[i];

    if (ch === "<") {
      if (leftStack.length) rightStack.push(leftStack.pop());
    } else if (ch === ">") {
      if (rightStack.length) leftStack.push(rightStack.pop());
    } else if (ch === "-") {
      if (leftStack.length) leftStack.pop();
    } else {
      leftStack.push(ch);
    }
  }

  answer += leftStack.join("") + rightStack.reverse().join("") + "\n";
}

process.stdout.write(answer);
