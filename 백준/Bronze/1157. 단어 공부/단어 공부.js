const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf8").trim().split("\n");
const word = input[0].toUpperCase();
const map = new Map();
for (const ch of word) {
  map.set(ch, (map.get(ch) || 0) + 1);
}

let maxChar = "";
let maxCount = 0;
let isDuplicate = false;

for (let [char, count] of map.entries()) {
  if (count > maxCount) {
    maxCount = count;
    maxChar = char;
    isDuplicate = false;
  } else if (count === maxCount) {
    isDuplicate = true;
  }
}
if (isDuplicate === true) {
  console.log("?");
} else {
  console.log(maxChar);
}
