const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const targets = input[1].split(" ").map(Number);

let queue = Array.from({ length: N }, (_, i) => i + 1);
let count = 0;
for (const target of targets) {
  const targetIndex = queue.indexOf(target);
  const halfIndex = queue.length / 2;

  if (targetIndex <= halfIndex) {
    while (queue[0] !== target) {
      queue.push(queue.shift());
      count++;
    }
  } else {
    while (queue[0] !== target) {
      queue.unshift(queue.pop());
      count++;
    }
  }
  queue.shift();
}

console.log(count);
