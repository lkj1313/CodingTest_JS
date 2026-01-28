const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];
const arr = input.slice(1);
const map = new Map();

for (let i = 0; i < N; i++) {
  const name = arr[i];
  map.set(name, (map.get(name) || 0) + 1);
}

const newArr = [...map];

let max = 0;

for (let i = 0; i < newArr.length; i++) {
  if (newArr[i][1] > max) {
    max = newArr[i][1];
  }
}

const filtered = newArr.filter((a) => a[1] === max);

filtered.sort((a, b) => a[0].localeCompare(b[0]));

console.log(filtered[0][0]);
