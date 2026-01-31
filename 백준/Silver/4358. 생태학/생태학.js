const fs = require("fs");
const arr = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const count = arr.length;
arr.sort((a, b) => a.localeCompare(b));
const map = new Map();

for (let i = 0; i < count; i++) {
  map.set(arr[i], (map.get(arr[i]) || 0) + 1);
}

const sortedNames = [...map.keys()].sort();

for (const name of sortedNames) {
  const number = map.get(name);
  const ratio = ((number / count) * 100).toFixed(4);
  console.log(`${name} ${ratio}`);
}
