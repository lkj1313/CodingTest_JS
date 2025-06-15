const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf8").trim().split("\n");

input.sort();
let map = new Map();
for (let i = 0; i < input.length; i++) {
  if (map.has(input[i])) {
    map.set(input[i], map.get(input[i]) + 1);
  } else {
    map.set(input[i], 1);
  }
}

for ([na, number] of map) {
  console.log(`${na} ${((number / input.length) * 100).toFixed(4)}`);
}
