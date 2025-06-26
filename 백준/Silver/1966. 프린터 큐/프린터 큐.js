const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = +input[0];
let line = 1;
const result = [];
for (let t = 0; t < T; t++) {
  const [N, M] = input[line].split(" ").map(Number);
  const priorities = input[line + 1].split(" ").map(Number);
  line += 2;

  // 큐: [{index, priority}]
  let queue = priorities.map((p, i) => ({ idx: i, priority: p }));
  count = 0;
  while (queue.length) {
    const current = queue.shift();
    const hasHigher = queue.some((doc) => doc.priority > current.priority);
    if (hasHigher) {
      queue.push(current); // 뒤로보냄
    } else {
      count++;
      if (current.idx === M) {
        result.push(count);
        break;
      }
    }
  }
}

console.log(result.join("\n"));
