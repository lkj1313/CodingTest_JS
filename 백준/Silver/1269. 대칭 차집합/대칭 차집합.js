const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const A = input[1].split(" ").map(Number);
const B = input[2].split(" ").map(Number);

const Aset = new Set(A);
const Bset = new Set(B);

let count1 = 0;
let count2 = 0;

for (let i = 0; i < B.length; i++) {
  if (Aset.has(B[i])) {
    Aset.delete(B[i]);
    
  }
}
for (let i = 0; i < A.length; i++) {
  if (Bset.has(A[i])) {
    Bset.delete(A[i]);
  }
}

console.log(Aset.size+ Bset.size);
