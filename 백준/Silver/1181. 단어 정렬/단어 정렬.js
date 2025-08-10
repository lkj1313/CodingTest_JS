const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const num = input[0];
const words = [...new Set(input.slice(1))];

words.sort((a, b) => {
  if (a.length === b.length) {
    return a.localeCompare(b);
  }
  return a.length - b.length;
});

console.log(words.join("\n"));
