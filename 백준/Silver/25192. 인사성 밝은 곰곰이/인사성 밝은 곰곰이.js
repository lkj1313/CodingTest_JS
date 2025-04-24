const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const logs = input.slice(1);

let count = 0;
const set = new Set();

for (const log of logs) {
  if (log === "ENTER") {
    set.clear();
  } else {
    if (!set.has(log)) {
      set.add(log);
      count++;
    }
  }
}
console.log(count);
