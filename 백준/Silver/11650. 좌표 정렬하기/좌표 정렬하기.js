const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);

// 2차원배열
const points = input.slice(1).map((line) => {
  const [x, y] = line.split(" ").map(Number);
  return [x, y];
});

points.sort((a, b) => {
  if (a[0] !== b[0]) return a[0] - b[0];
  return a[1] - b[1];
});
console.log(points.map((p) => p.join(" ")).join("\n"));
