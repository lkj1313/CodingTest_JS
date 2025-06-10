const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf8").trim();
let [X, Y] = input.split(" ").map(Number);
const Z = Math.floor((Y * 100) / X);

let answer = -1;
for (let i = 1; i <= 1_000_000_000; i++) {
  newZ = Math.floor(((Y + i) * 100) / (X + i));
  if (newZ > Z) {
    answer = i;
    break;
  }
}

console.log(answer);
