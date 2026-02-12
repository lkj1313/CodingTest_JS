const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let line = 0;
const T = +input[line++];

for (let i = 0; i < T; i++) {
  const [N, M] = input[line++].split(" ").map(Number);
  const priorities = input[line++].split(" ").map(Number);

  const queue = priorities.map((p, i) => [p, i]);
  let count = 0;
  while (queue.length > 0) {
    const maxPriority = Math.max(...queue.map((v) => v[0]));
    const current = queue.shift();

    if (current[0] < maxPriority) {
      queue.push(current);
    } else {
      count++;
      if (current[1] === M) {
        console.log(count);
        break;
      }
    }
  }
}
