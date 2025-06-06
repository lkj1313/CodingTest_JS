const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf8").trim().split("\n");
const N = Number(input[0]);
for (let i = 1; i <= N; i++) {
  console.log(i);
}
