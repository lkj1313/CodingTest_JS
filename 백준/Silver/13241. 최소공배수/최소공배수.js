const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf8").trim();

const [A, B] = input.split(" ").map(Number);

function gcb(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

let maxGong = gcb(A, B);
let rhq = A * B;

console.log(rhq / maxGong);
