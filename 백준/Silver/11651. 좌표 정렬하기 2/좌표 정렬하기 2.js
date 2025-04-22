const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const nums = input.slice(1); // ["0 4", "1 2"....]
const coords = nums.map((a, index) => {
  const [x, y] = a.split(" ").map(Number);
  return [x, y];
}); // [[0,4],[1,2]]

coords.sort((a, b) => {
  if (a[1] !== b[1]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
});

const answer = coords.map((coord) => coord.join(" ")).join("\n");
console.log(answer);
