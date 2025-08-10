const fs = require("fs");
const word = fs.readFileSync("/dev/stdin").toString().trim();

const reversed = word.split("").reverse().join("");

if (reversed === word) {
  console.log(1);
} else {
  console.log(0);
}
