const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf8").trim();
const number = input.split(" ").map(Number);

number.sort((a, b) => a - b);

console.log(number.join(" "));
