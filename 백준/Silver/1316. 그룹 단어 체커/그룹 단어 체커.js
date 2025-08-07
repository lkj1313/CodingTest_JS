const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = input[0];
let count = 0;
for (let i = 1; i <= N; i++) {
  const word = input[i];
  const seen = new Set();
  let isGroup = true;
  let prevChar = "";

  for (const char of word) {
    if (char !== prevChar) {
      if (seen.has(char)) {
        isGroup = false;
        break;
      } else {
        seen.add(char);
      }
    }
    prevChar = char;
  }
  if (isGroup) count++;
}

console.log(count);
