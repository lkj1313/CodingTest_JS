const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let line = 0;
const T = +input[line++];

for (let i = 0; i < T; i++) {
  const [N, M] = input[line++].split(" ").map(Number);
  const A = input[line++].split(" ").map(Number);

  const B = input[line++]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  let count = 0;
  for (let j = 0; j < N; j++) {
    const target = A[j];
    let left = 0;
    let right = M;

    while (right > left) {
      const mid = Math.floor((left + right) / 2);
      if (B[mid] < target) {
        left = mid + 1;
      } else if (target === B[mid]) {
        right = mid;
      } else {
        right = mid;
      }
    }
    count += left;
  }
  console.log(count);
}
