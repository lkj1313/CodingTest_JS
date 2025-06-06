const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf8").trim().split(" ").map(Number);
const num1 = input[0];
const num2 = input[1];
function gcb(num1, num2) {
  //24,18
  while (num2 > 0) {
    let temp = num1 % num2;
    num1 = num2;
    num2 = temp;
  }
  return num1;
}
const gcbResult = gcb(num1, num2);
console.log(gcbResult);
console.log((num1 * num2) / gcbResult);
