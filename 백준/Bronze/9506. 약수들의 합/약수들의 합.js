const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.pop();

const arr = input.map(Number);
const answer = [];
for (let i = 0; i < arr.length; i++) {
  const set = new Set([1]);
  for (let j = 2; j <= Math.sqrt(arr[i]); j++) {
    if (arr[i] % j === 0) {
      set.add(j);
      set.add(arr[i] / j);
    }
  }
  const sortedDivisors = [...set].sort((a, b) => a - b);
  const sum = sortedDivisors.reduce((a, b) => a + b, 0);

  if (sum === arr[i]) {
    console.log(`${arr[i]} = ${sortedDivisors.join(" + ")}`);
  } else {
    console.log(`${arr[i]} is NOT perfect.`);
  }
}
