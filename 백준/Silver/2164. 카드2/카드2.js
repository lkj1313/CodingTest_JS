const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const N = Number(input);
const arr = [];
for (let i = 0; i < N; i++) {
  arr[i] = i + 1;
}
let head = 0;
while (arr.length - head > 1) {
  head++;
  arr.push(arr[head]); /// [1,2,3,4,2], [1,2,3,4,2,3], [1,2,3,4,2,3]
  head++;
}

console.log(arr[head]);
