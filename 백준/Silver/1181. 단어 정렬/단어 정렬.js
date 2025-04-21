const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const words = input.slice(1);
const unique = [...new Set(words)];
unique.sort((a, b) => {
  if (a.length !== b.length) {
    return a.length - b.length;
  }
  return a.localeCompare(b);
});
console.log(unique.join("\n"));
