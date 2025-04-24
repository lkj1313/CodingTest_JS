const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const str = input[0];
let substr = [];
for (let i = 0; i < str.length; i++) {
  for (let j = i + 1; j <= str.length; j++) {
    substr.push(str.slice(i, j));
  }
}
const set = new Set(substr);
console.log(set.size);
