const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf8").trim().split("\n");

const N = Number(input[0]);
const files = input.slice(1).map((a) => a.split("."));

files.sort();

let map = new Map();

for (let i = 0; i < files.length; i++) {
  map.set(files[i][1], (map.get(files[i][1]) || 0) + 1);
}
const sorted = [...map.entries()].sort((a, b) => a[0].localeCompare(b[0]));

for (const [na, number] of sorted) {
  console.log(`${na} ${number}`);
}
