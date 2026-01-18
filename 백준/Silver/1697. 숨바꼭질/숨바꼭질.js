const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const [N, K] = input.split(" ").map(Number);

class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }

  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }

  isEmpty() {
    return this.tailIndex - this.headIndex === 0;
  }
}

function solve(N, K) {
  if (N >= K) return N - K;

  const maxPos = 100000 + 1;
  const visited = new Array(maxPos).fill(-1);

  const queue = new Queue();

  queue.enqueue(N);
  visited[N] = 0;

  while (!queue.isEmpty()) {
    const current = queue.dequeue();

    if (current === K) return visited[current];

    for (const next of [current - 1, current + 1, current * 2]) {
      if (next >= 0 && next <= 100000 && visited[next] === -1) {
        visited[next] = visited[current] + 1;
        queue.enqueue(next);
      }
    }
  }
}

console.log(solve(N, K));
