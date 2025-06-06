const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf8").trim();

const [N, M] = input.split(" ").map(Number);

/// N!/M!(N-M)!
let left = 1;
let right = 1;
let k = 1;

///5 ,3
for (let i = 1; i <= N; i++) {
  left *= i; //1*2*3*4*5  //N!
}
for (let i = 1; i <= N - M; i++) {
  right *= i; // 1*2 (N-M)!
}
for (let i = 1; i <= M; i++) {
  k *= i;
}
console.log(left / (k * right));
