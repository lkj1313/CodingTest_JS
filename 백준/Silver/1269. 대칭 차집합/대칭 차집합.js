const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [An, Bn] = input[0].split(" ").map(Number); // A원소의수, B원소의수
const A = input[1].split(" ").map(Number); // A집합
const B = input[2].split(" ").map(Number); // B집합
const Amap = new Map();

for (let i = 0; i < A.length; i++) {
  Amap.set(A[i], true);
}

let common = 0;
for (let i = 0; i < B.length; i++) {
  if (Amap.has(B[i])) {
    common++;
  }
}

console.log(A.length + B.length - common * 2);
