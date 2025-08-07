const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const arr = input.split("\n").map(Number);

const all = new Array(31).fill(false);

for (const num of arr) {
  all[num] = true;
}

for (let i = 1; i <= 30; i++) {
  if (!all[i]) {
    console.log(i);
  }
}
