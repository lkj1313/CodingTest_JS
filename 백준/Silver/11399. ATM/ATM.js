const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const num = input[0];
const arr = input[1].split(" ").map(Number);

arr.sort((a, b) => a - b);

let count = 0;
const array = [];
for (let i = 0; i < arr.length; i++) {
  count += arr[i];
  array.push(count);
}

const answer = array.reduce((a, b) => a + b, 0);
console.log(answer);
