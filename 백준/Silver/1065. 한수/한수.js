const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf8").trim();
const N = Number(input);

function isHansoo(n) {
  const digist = String(n).split("").map(Number);
  if (digist.length <= 2) return true;
  const diff = digist[1] - digist[0];
  for (let i = 2; i < digist.length; i++) {
    if (digist[i] - digist[i - 1] !== diff) return false;
  }
  return true;
}
let count = 0;
function countFucntion() {
  for (let i = 1; i <= N; i++) {
    if (isHansoo(i)) count++;
  }
}
countFucntion();
console.log(count);
