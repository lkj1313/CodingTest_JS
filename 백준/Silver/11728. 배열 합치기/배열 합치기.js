const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf8").trim().split("\n");
const A = input[1].split(" ").map(Number);
const B = input[2].split(" ").map(Number);

const sumed = [...A, ...B];
console.log(sumed.sort((a, b) => a - b).join(" "));
