const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf8").trim();
const N = Number(input);
for (let i = N; i >= 1; i--) {
  console.log(i);
}
