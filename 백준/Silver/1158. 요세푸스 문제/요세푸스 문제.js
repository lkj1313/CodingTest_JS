const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf8").trim();
const [N, K] = input.split(" ").map(Number);
let quee = [];
let result = [];
for (let i = 1; i <= N; i++) {
  quee.push(i);
}
while (quee.length > 0) {
  for (let i = 0; i < K - 1; i++) {
    quee.push(quee.shift());
  }
  result.push(quee.shift());
}

console.log(`<${result.join(", ")}>`);
